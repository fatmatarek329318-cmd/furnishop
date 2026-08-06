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