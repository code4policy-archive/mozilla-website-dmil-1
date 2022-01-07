 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('#logo');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;
