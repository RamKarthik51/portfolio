const scrollContainer = document.querySelector('.scrollable');

function scrollLeftContent() {
  console.log('Scrolling left');
  scrollContainer.scrollBy({ left: -200, behavior: 'smooth' }); // Correctly scroll left
}

function scrollRightContent() {
  console.log('Scrolling right');
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' }); // Correctly scroll right
}

