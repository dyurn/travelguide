document.addEventListener('DOMContentLoaded', function() {
    var testimonials = [
        {
            text: "J'ai passé un moment incroyable à Monterey Bay ! Les activités d'observation des baleines étaient fantastiques.",
            author: "John Doe"
        },
        {
            text: "La faune maritime de Monterey Bay est à couper le souffle. Je le recommande vivement à tous les amoureux de la nature.",
            author: "Jane Smith"
        },
        {
            text: "Monterey Bay est un endroit merveilleux pour en apprendre davantage sur la conservation marine et les efforts déployés pour protéger notre environnement.",
            author: "Alice Brown"
        }
    ];

    var currentTestimonial = 0;
    var testimonialText = document.querySelector('.testimonial-text');
    var testimonialAuthor = document.querySelector('.testimonial-author');

    function updateTestimonial() {
        var testimonial = testimonials[currentTestimonial];
        testimonialText.textContent = testimonial.text;
        testimonialAuthor.textContent = testimonial.author;
    }

    document.getElementById('next-testimonial').addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });

    updateTestimonial();
});
