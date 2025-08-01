// code for associations.html ------------------------------------------------------

// constants for image, heading, and paragraph for each slide
const imgEl = document.getElementById('slide-img');
const headingEl = document.getElementById('slide-heading');
const textEl = document.getElementById('slide-text');

// constant for the "next" button
const nextBtn = document.getElementById('next-btn');

// index to track position in list
let currentIndex = 0;

// updates the current slide to the next one
function updateSlide(index) 
{
  // take the variables from the slides array
  const img = slides[index][0];
  const heading = slides[index][1];
  const text = slides[index][2];

  // set the new values
  imgEl.src = img;
  headingEl.textContent = heading;
  textEl.textContent = text;
}

// show initial slide (first one in the array)
updateSlide(currentIndex);

// "next" button to show all the 
nextBtn.addEventListener('click', function() 
{
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

// Slideshow logic – only runs on pages that have the slideshow
if (document.getElementById('slide-img')) {
    const imgEl = document.getElementById('slide-img');
    const headingEl = document.getElementById('slide-heading');
    const textEl = document.getElementById('slide-text');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function updateSlide(index) {
        const img = slides[index][0];
        const heading = slides[index][1];
        const text = slides[index][2];

        imgEl.src = img;
        headingEl.textContent = heading;
        textEl.textContent = text;
    }

    updateSlide(currentIndex);

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    });
}

// Manufacturer data and interaction logic
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded");

    const data = {
        "Aker": { moq: "No Minimum", freight: "Half Truck Load" },
        "Boshart": { moq: "$50", freight: "$1,300" },
        "Briggs": { moq: "No Minimum", freight: "300 pcs. / china + $75.00 stop off fee" },
        "Cello": { moq: "$75", freight: "$750" },
        "Comfort Designs": { moq: "No Minimum", freight: "Email Job Specifics" },
        "Ekern": { moq: "No Minimum", freight: "25 pcs" },
        "Elcoma": { moq: "$30", freight: "50 bars" },
        "Endot": { moq: "No Minimum", freight: "$4,500" },
        "FEDPRO": { moq: "$250", freight: "$1,200" },
        "Flood Buzz": { moq: "48 pieces", freight: "96 pieces" },
        "Greenfield": { moq: "$50", freight: "$1,850" },
        "JB Products": { moq: "No Minimum", freight: "$2,000" },
        "MAAX": { moq: "No Minimum", freight: "Full Freight Allowance" },
        "Pioneer": { moq: "No Minimum", freight: "$3,000 on all categories (Central Brass, Olympia & Pioneer)" },
        "Stiebel Eltron": { moq: "No Minimum", freight: "$2,000" },
        "Tigre": { moq: "$250", freight: "$2,000" },
        "Xylem": { moq: "No Minimum", freight: "50 pumps (includes Laing)" }
    };

    const submitBtn = document.getElementById("submit-btn");
    const manufacturerSelect = document.getElementById("manufacturer-select");
    const resultDiv = document.getElementById("result-display");

    if (submitBtn && manufacturerSelect && resultDiv) {
        submitBtn.addEventListener("click", () => {
            const selected = manufacturerSelect.value;

            if (selected && data[selected]) {
                resultDiv.innerHTML = `
                    <h3>${selected}</h3>
                    <p><strong>Minimum Order Requirement:</strong> ${data[selected].moq}</p>
                    <p><strong>Freight Allowance:</strong> ${data[selected].freight}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p>Please select a valid manufacturer.</p>`;
            }
        });
    }
});
``

