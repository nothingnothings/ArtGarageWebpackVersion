

import './assets/css/style.css';


import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import products1 from '../assets/images/products1.jpg'
import products2 from '../assets/images/products2.jpg'
import products3 from '../assets/images/products3.jpg'



function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
