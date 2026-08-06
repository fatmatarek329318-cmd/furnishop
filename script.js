document.addEventListener("DOMContentLoaded", () => {

    let cartCount = 0;
    const cartCountElement = document.getElementById('cartCount');
    const productCards = document.querySelectorAll('.card5');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3')?.innerText || "Product";
            const price = card.querySelector('.price span')?.innerText || "";
            
            cartCount++;
            if (cartCountElement) {
                cartCountElement.innerText = cartCount;
            }
            alert(`Added to cart: ${title} ${price} `);
        });
    });

    const mailForm = document.querySelector('.form6');
    if (mailForm) {
        mailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = mailForm.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim() !== "") {
                alert("Thank you for subscribing to our newsletter! ");
                emailInput.value = "";
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    const shopNowBtn = document.querySelector('a[href="#products"]');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('products');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});