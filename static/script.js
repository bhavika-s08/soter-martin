// ----------------- Slideshow logic (associations.html) -----------------
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

if (imgEl && headingEl && textEl && nextBtn) {
    updateSlide(currentIndex);

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    });
}

// ----------------- Manufacturer table logic -----------------
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
        "Xylem": { moq: "No Minimum", freight: "50 pumps" }
    };

    const submitBtn = document.getElementById("submit-btn");
    const clearBtn = document.getElementById("clear-btn");
    const manufacturerSelect = document.getElementById("manufacturer-select");
    const tableBody = document.getElementById("table-body");

    if (submitBtn && clearBtn && manufacturerSelect && tableBody) {
        submitBtn.addEventListener("click", () => {
            const selected = manufacturerSelect.value;

            if (selected && data[selected]) {
                const row = document.createElement("tr");

                const manufacturerCell = document.createElement("td");
                manufacturerCell.textContent = selected;
                manufacturerCell.style.border = "1px solid black";
                manufacturerCell.style.padding = "8px";

                const moqCell = document.createElement("td");
                moqCell.textContent = data[selected].moq;
                moqCell.style.border = "1px solid black";
                moqCell.style.padding = "8px";

                const freightCell = document.createElement("td");
                freightCell.textContent = data[selected].freight;
                freightCell.style.border = "1px solid black";
                freightCell.style.padding = "8px";

                row.appendChild(manufacturerCell);
                row.appendChild(moqCell);
                row.appendChild(freightCell);

                tableBody.appendChild(row);
            } else {
                alert("Please select a valid manufacturer.");
            }
        });

        clearBtn.addEventListener("click", () => {
            tableBody.innerHTML = "";
        });
    }
});
