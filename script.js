document.addEventListener("DOMContentLoaded", () => {

    let cartCount = 0;
    const cartCountElement = document.getElementById('cartCount');
    const productCards = document.querySelectorAll('.card5');

    productCards.forEach(card => {
        card.style.cursor = "pointer";
        
        card.addEventListener('click', () => {
            const title = card.querySelector('h3')?.innerText || "Product";
            const price = card.querySelector('.price')?.innerText || "";
            
            cartCount++;
            if (cartCountElement) {
                cartCountElement.innerText = cartCount;
            }

            alert(`Added (${title}) with price ${price} to cart! `);
        });
    });

    const counters = document.querySelectorAll('.bar-item h2');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const rawText = counter.innerText.trim();
            const numericValue = parseFloat(rawText.replace(/[^0-9.]/g, ''));
            const suffix = rawText.replace(/[0-9.]/g, '');

            if (isNaN(numericValue)) return;

            let current = 0;
            const increment = numericValue / 40;

            const updateNumber = () => {
                current += increment;
                if (current < numericValue) {
                    counter.innerText = Math.ceil(current) + suffix;
                    setTimeout(updateNumber, 30);
                } else {
                    counter.innerText = rawText;
                }
            };
            updateNumber();
        });
    };

    window.addEventListener('scroll', () => {
        const barSection = document.querySelector('.bar');
        if (barSection && !hasAnimated) {
            const sectionPos = barSection.getBoundingClientRect().top;
            if (sectionPos < window.innerHeight - 50) {
                animateCounters();
                hasAnimated = true;
            }
        }
    });

    const mailForm = document.querySelector('.form6');
    if (mailForm) {
        mailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = mailForm.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim() !== "") {
                alert(`Thank you for subscribing! Discount code sent to: ${emailInput.value}`);
                emailInput.value = "";
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    const shopNowBtn = document.querySelector('a[href="products1"]');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const productsSection = document.getElementById('products1');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

});