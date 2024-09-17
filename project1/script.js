document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
    });
});
const descriptionText = "GlowShop is an innovative e-commerce platform offering a wide variety of high-quality products for fashion, home, electronics, and more. We believe in combining exclusive collections with fast, reliable service to deliver the best shopping experience. Our mission is to bring value and satisfaction to every customer.";

let index = 0;
let typingSpeed = 50; // Speed of typing effect

function typeWriter() {
    if (index < descriptionText.length) {
        document.getElementById("company-desc-text").innerHTML += descriptionText.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Trigger typing effect when scrolling to the company description
window.addEventListener('scroll', function() {
    let companyDescSection = document.querySelector('.company-description');
    let position = companyDescSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition && index === 0) {
        typeWriter();
    }
});
