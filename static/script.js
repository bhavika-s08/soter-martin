// code for associations.html ------------------------------------------------------

// constants for image, heading, and paragraph for each slide
const imgEl = document.getElementById('slide-img');
const headingEl = document.getElementById('slide-heading');
const textEl = document.getElementById('slide-text');

// constant for the "next" button
const nextBtn = document.getElementById('next-btn');

// index to track position in list
let currentIndex = 0;


function updateSlide(index) 
{
  const [img, heading, text] = slides[index];
  imgEl.src = img;
  headingEl.textContent = heading;
  textEl.textContent = text;
}

// Show first slide initially
updateSlide(currentIndex);

// Next button moves to next slide, loops around
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});
