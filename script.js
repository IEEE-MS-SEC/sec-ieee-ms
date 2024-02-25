

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".team-cards .event-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // Adjust the threshold as needed
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // Adjust the threshold as needed
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
