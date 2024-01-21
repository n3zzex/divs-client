
const accordionButtons = document.querySelectorAll("[data-accordion]");
const accordionContent = document.querySelectorAll("[data-accordion-content]");

accordionButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const attribute = this.getAttribute("data-accordion");

        const elContent = document.querySelector(`[data-accordion-content="${attribute}"]`);

        if (!elContent) {
            return;
        }

        if (this.classList.contains("active")) {
            elContent.classList.remove("active")
            return this.classList.remove("active");
        }

        elContent.classList.add("active")
        return this.classList.add("active");

    })
});