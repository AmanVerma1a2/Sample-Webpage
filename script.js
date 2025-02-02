document.addEventListener('DOMContentLoaded', () => {
    
    const skillList = document.getElementById('skill-list');
    if (skillList) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const percentage = bar.closest('.bar-graph').dataset.percentage;
                    bar.style.width = `${percentage}%`;
                }
            });
        }, { threshold: 0.2 });

       
        const bars = skillList.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }

  
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Add your menu toggle logic here
            console.log('Menu clicked');
        });
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Add any resize handling logic here
        }, 250);
    });
});