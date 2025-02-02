const skillList = document.getElementById('skill-list');
const bars = skillList.querySelectorAll('.bar');

bars.forEach((bar) => {
    const percentage = bar.style.width;
    const span = bar.querySelector('.percentage');
    span.textContent = percentage;
    bar.style.transition = 'width 2s ease-in-out'; 
    bar.style.width = percentage;
});
