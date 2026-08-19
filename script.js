document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only intercept links that point to a section on the current page.
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.getElementById(href.substring(1));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
