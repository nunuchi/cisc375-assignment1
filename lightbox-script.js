var slideIndex = 1;

function openModal() {//open the modal
	document.getElementById("theModal").style.display = "block";
}

function closeModal() { //close the modal
	document.getElementById("theModal").style.display = "none";
}

function slideChange(n) { // change image slide
	slideShow(slideIndex += n);
}

function currentSlide(n) { // the current image slide to use
	slideShow(slideIndex = n);
}

function slideShow(n) {// set of image to show in modal
  var i;
  var slides = document.getElementsByClassName("slideItem");
  
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}

function playSlideShow() { //plays the image slide show
	slideChange(1);
 	setTimeout(playSlideShow, 10000); //change image every 10 seconds
}

function escapeKey(esc) {
	if (esc.keyCode == 27) { //allows for esc key to exit the modal
		closeModal();
	}
}

function rarrowKey(r) {
	if (r.keyCode == 39) { // allows for right arrow key to use the next button
		slideChange(1);
	}
}

function larrowKey(l) {
	if (l.keyCode == 37) { //allows for left arrow key to use the back button
		slideChange(-1);
	}
}