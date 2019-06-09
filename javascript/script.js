var slideIndex = 1;

function movetoSlide(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  var bgImg = slides[slideIndex-1].getElementsByTagName('img')[0].src;
  console.log(bgImg);
  document.body.style.backgroundImage = "url('"+bgImg+"')";
  slides[slideIndex-1].style.display = "block";  
}


for(var i=0;i<images.length;i++){ 
	duplicateImageNode(i,images);
}

function duplicateImageNode (i,images) {

	img = images[i];

	var itm = document.getElementById("imageNode");

	
	var cln = itm.cloneNode(true);
	cln.id = 'imageNode'+i;
	cln.getElementsByTagName("img")[0].src = img.src;
	cln.getElementsByClassName("text")[0].innerHTML = img.caption;
	cln.getElementsByClassName("numbertext")[0].innerHTML = (i+1)+'/'+images.length;

	
	document.getElementById("slides-container").appendChild(cln);

	if (images.length-1 == i){
	itm.parentNode.removeChild(itm);
	}

}

showSlides(slideIndex);