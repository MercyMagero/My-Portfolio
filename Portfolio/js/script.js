// /*==== Resume setion =====*/
//     //hide and show
// let HideAbtBtn = document.getElementById('hideaboutme');
// let HideEdcBtn = document.getElementById('hideeducation');
// let HidexpBtn = document.getElementById('hideexperience');
// let HideSklBtn = document.getElementById('hideskills');

// let DetailAbout = document.getElementById('detailed-about');
// let DetailEducation = document.getElementById('detailed-education');
// let DetailExperience = document.getElementById('detailed-experience');
// let DetailSkills = document.getElementById('detailed-skills');


// HidexpBtn.addEventListener("click", event => {
//     if(DetailExperience.style.display === "none"){
//         DetailExperience.style.display = "block";
//         DetailEducation.style.display = "none";
//         DetailAbout.style.display = "none";
//         DetailSkills.style.display = "none";
//     }
//     else{
//         DetailExperience.style.display = "block";
//     }
// });

// HideSklBtn.addEventListener("click", event => {
//     if(DetailSkills.style.display === "none"){
//         DetailSkills.style.display = "block";
//         DetailEducation.style.display = "none";
//         DetailAbout.style.display = "none";
//         DetailExperience.style.display = "none";
//     }
//     else{
//         DetailSkills.style.display = "block";
//     }
// });

// HideAbtBtn.addEventListener("click", event => {
//     if(DetailAbout.style.display === "none"){
//         DetailAbout.style.display = "block";
//         DetailEducation.style.display = "none";
//         DetailExperience.style.display = "none";
//         DetailSkills.style.display = "none";

//     }
//     else{
//         DetailAbout.style.display = "none";
//     }
// });

// HideEdcBtn.addEventListener("click", event => {
//     if(DetailEducation.style.display === "none"){
//         DetailEducation.style.display = "block";
//         DetailAbout.style.display = "none";
//         DetailExperience.style.display = "none";
//         DetailSkills.style.display = "none";
//     }
//     else{
//         DetailEducation.style.display = "block";
//     }
// });

// Reference buttons
let HideAbtBtn = document.getElementById('hideaboutme');
let HideEdcBtn = document.getElementById('hideeducation');
let HidexpBtn = document.getElementById('hideexperience');
let HideSklBtn = document.getElementById('hideskills');

// Reference detail sections
let DetailAbout = document.getElementById('detailed-about');
let DetailEducation = document.getElementById('detailed-education');
let DetailExperience = document.getElementById('detailed-experience');
let DetailSkills = document.getElementById('detailed-skills');

// Function to hide all detail sections
function hideAllDetails() {
    DetailAbout.style.display = "none";
    DetailEducation.style.display = "none";
    DetailExperience.style.display = "none";
    DetailSkills.style.display = "none";
}

// Event listeners for each button
HideAbtBtn.addEventListener("click", () => {
    hideAllDetails();
    // Toggle display for the "About" section
    DetailAbout.style.display = (DetailAbout.style.display === "block") ? "none" : "block";
});

HideEdcBtn.addEventListener("click", () => {
    hideAllDetails();
    // Toggle display for thme "Education" section
    DetailEducation.style.display = (DetailEducation.style.display === "block") ? "none" : "block";
});

HidexpBtn.addEventListener("click", () => {
    hideAllDetails();
    // Toggle display for the "Experience" section
    DetailExperience.style.display = (DetailExperience.style.display === "block") ? "none" : "block";
});

HideSklBtn.addEventListener("click", () => {
    hideAllDetails();
    // Toggle display for the "Skills" section
    DetailSkills.style.display = (DetailSkills.style.display === "block") ? "none" : "block";
});


// Responsive counting numbers animation
let valueDisplays = document.querySelectorAll(".numbers");
let interval = 5000;

valueDisplays.forEach((item) => {
    let startValue = 0;
    let endValue = parseInt(item.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval( function () {
        startValue += 1;
        item.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration);
});


/*========== nav link sections active =============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop  - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


// Remove menu icon when click on navbar link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*========== swiper  =========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// *======== menu icon navbar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Dark mode / light mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form',  { origin: 'bottom'});