let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > lastScrollY && window.scrollY > 200) {
    // Scrolling down and past 100px
    navbar.classList.add('hide');
  } else {
    // Scrolling up
    navbar.classList.remove('hide');
  }

  lastScrollY = window.scrollY;
});

function toggleMenu() {
   const menu = document.getElementById("navMenu");
   menu.classList.toggle("active");
 }
 

 
 