
const burgerToggle = document.querySelectorAll("[data-burger-toggle]");
const burger = document.querySelector(".burger-mobile");

let isBurgerActive = false;

burgerToggle.forEach(button => {
    button.addEventListener("click", function() {
        isBurgerActive = !isBurgerActive;
    
        console.log(isBurgerActive)
    
        if (isBurgerActive) {
            
            document.body.style.overflow = "hidden";
            burger.classList.add("active");
            return;
        }
        burger.classList.remove("active");
        document.body.style.overflow = "";
    
    });
})