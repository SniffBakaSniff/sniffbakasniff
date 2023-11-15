const checkbox = document.getElementById('active');
const wrapper = document.querySelector('.wrapper');

if (Modernizr.backdropfilter) {
  // Apply backdrop-filter directly to the .wrapper element
  wrapper.style.backdropFilter = 'blur(10px)';
} else {
  // Create a semi-transparent overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('blur-overlay');
  document.body.appendChild(overlay);
}

checkbox.addEventListener('change', () => {
  wrapper.classList.toggle('active');
});

