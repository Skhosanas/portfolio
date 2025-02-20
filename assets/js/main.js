AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// Select the image element
const gifImage = document.getElementById('gif-image');

// Define the source for the static image and the animated GIF
const gifSrc = './assets/images/chef.gif';   // Replace with your actual animated GIF
const staticSrc = './assets/images/chef.png';  // Replace with your static image

// Add mouseenter event to start the animation
gifImage.addEventListener('mouseenter', () => {
  gifImage.src = gifSrc;  // Change to animated GIF on hover
});

// Add mouseleave event to return to the static image
gifImage.addEventListener('mouseleave', () => {
  gifImage.src = staticSrc;  // Change back to static image when hover ends
});


// Get the video element
const videoPlayer = document.getElementById('videoPlayer');

// Loop until the video is paused
videoPlayer.addEventListener('play', () => {
  videoPlayer.loop = true;  // Ensure the video loops when played
});

videoPlayer.addEventListener('pause', () => {
  videoPlayer.loop = false;  // Stop looping when the video is paused
});


