$(document).ready(function() {
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

var button = document.querySelector('.mobile-button');
var menu = document.querySelector('#header-mobile');
button.onclick = function(){
  menu.classList.toggle('active')
}