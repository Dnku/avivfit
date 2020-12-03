function about(){

var elmnt = document.getElementById("as");
elmnt.scrollIntoView({behavior: "smooth", block: "start"})
}

function services(){

   var elmnt = document.getElementById("services");
   elmnt.scrollIntoView({behavior: "smooth", block: "end"})
   }

   function photos(){

      var elmnt = document.getElementById("photos");
      elmnt.scrollIntoView({behavior: "smooth", block: "start"})
      }

      function clients(){

         var elmnt = document.getElementById("clients");
         elmnt.scrollIntoView({behavior: "smooth", block: "start"})
         }   

   function contact(){

      var elmnt = document.getElementById("contact");
      elmnt.scrollIntoView({behavior: "smooth", block: "start"})
      }
      
   function nav_toggle(navId) {
      nav = document.getElementById(navId);
      if (nav.style.display == "none") {
         nav.style.display = "block"; // == boolean check, single = assimilation
      } else {
         nav.style.display = "none";
   
      }
   }


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


