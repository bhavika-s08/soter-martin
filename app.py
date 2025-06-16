# imports --------------------------------------------------------------------------------------------------------------------------
import os, io, psycopg2 
from flask import Flask, render_template, request, url_for, redirect, send_file, flash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_bcrypt import Bcrypt

# create app --------------------------------------------------------------------------------------------------------------------------
app = Flask(__name__)

# configure app -----------------------------------------------------------------------------------------------------------------------
app.config['SECRET_KEY'] = 'pinkpantheress' # ♡
login_manager = LoginManager(app)
login_manager.login_view = 'login'                         
bcrypt = Bcrypt(app)

@app.route('/')
def home():
    return "Welcome to your Flask app!"

if __name__ == '__main__':
    app.run(debug=True)
