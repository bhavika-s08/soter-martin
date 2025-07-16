# imports ----------------------------------------------------------------------------------------------------------------------------------
import os, io, psycopg2 
from flask import Flask, render_template, request, url_for, redirect, send_file, flash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_bcrypt import Bcrypt

# create app -------------------------------------------------------------------------------------------------------------------------------
app = Flask(__name__)

# configure app ----------------------------------------------------------------------------------------------------------------------------
app.config['SECRET_KEY'] = 'changeme'
login_manager = LoginManager(app)
login_manager.login_view = 'login'                         
bcrypt = Bcrypt(app)

# user creation class  ---------------------------------------------------------------------------------------------------------------------
class User(UserMixin):
    def __init__(self, id, username, firstname, lastname, password_hash, isadmin=False, isreadonly=False):
        self.id = id
        self.username = username
        self.firstname = firstname
        self.lastname = lastname
        self.password_hash = password_hash
        self.isadmin = isadmin
        self.isreadonly = isreadonly

# database connection  ---------------------------------------------------------------------------------------------------------------------
def get_db_connection():
    conn = psycopg2.connect(
        host='drhscit.org', 
        database=os.environ['DB'],
        user=os.environ['DB_UN'], 
        password=os.environ['DB_PW']
    )
    return conn

# user loader for flask-login --------------------------------------------------------------------------------------------------------------
@login_manager.user_loader
def load_user(user_id):

    # get connections
    conn = get_db_connection()
    cur = conn.cursor()

    # gather user details
    cur.execute('SELECT id, username, firstname, lastname, password_hash, isadmin, isreadonly FROM pink_users WHERE id = %s', (user_id,))
    user = cur.fetchone()

    # close connections 
    cur.close()
    conn.close()

    if user:
        return User(
            id=user[0],
            username=user[1],
            firstname=user[2],
            lastname=user[3],
            password_hash=user[4],
            isadmin=user[5],
            isreadonly=user[6]
        )
    return None

# index route --------------------------------------------------------------------------------------------------------------------------
@app.route('/')
def index():
    return render_template('index.html')

# meet-the-team route -----------------------------------------------------------------------------------------------------------------
@app.route('/meet-the-team')
def meet_the_team():
    return render_template('meet-the-team.html')

# contact-us route --------------------------------------------------------------------------------------------------------------------
@app.route('/contact-us')
def contact_us():
    return render_template('contact-us.html')

# run app -----------------------------------------------------------------------------------------------------------------------------
if __name__ == '__main__':
    app.run(debug=True)
