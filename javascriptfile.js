<script>
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
      link.addEventListener('click', () => {
        alert('Please contact me via email or phone!');
});
});
const toggleButton = document.getElementById('toggle-button');
const timetable = document.getElementById('timetable');
toggleButton.addEventListener('click', () => {
  timetable.classList.toggle('hidden');
});
  </script>
