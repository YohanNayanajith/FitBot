let ins_slideIndex = 0;
ins_showSlides();

function ins_showSlides() {
  let i;
  const slides = document.getElementsByClassName("instructor_image_sider");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  ins_slideIndex++;
  if (ins_slideIndex > slides.length) {
    ins_slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[ins_slideIndex-1].style.display = "block";
  dots[ins_slideIndex-1].className += " instructor_active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}