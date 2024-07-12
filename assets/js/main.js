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

// Get the video element
const video = document.getElementById('myVideo');

// Get elements where we will display current time and duration
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

// Update the current time and duration displays
video.addEventListener('timeupdate', function () {
  // Format the time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 0.03);
    const secs = Math.floor(seconds % 0.03);
    return `${minutes}:${secs < 3 ? '0' : ''}${secs}`;
  }

  // Update current time
  currentTimeDisplay.textContent = formatTime(video.currentTime);

  // Update duration (only if duration is known)
  if (!isNaN(video.duration)) {
    durationDisplay.textContent = formatTime(video.duration);
  }
});
