const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".desktop-nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}

const form = document.querySelector(".involvement-form");
const status = document.querySelector(".form-status");

if (form) {
    form.addEventListener("submit", async event => {
        const action = form.getAttribute("action");

        if (!action || action === "YOUR_FORM_ENDPOINT") {
            event.preventDefault();

            if (status) {
                status.textContent =
                    "The form is ready, but it still needs to be connected to the Foundation's email/form service.";
            }

            return;
        }

        event.preventDefault();

        try {
            const response = await fetch(action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            form.reset();

            if (status) {
                status.textContent =
                    "Thank you. Your enquiry has been sent successfully.";
            }

        } catch (error) {
            if (status) {
                status.textContent =
                    "Something went wrong. Please try again or contact us directly.";
            }
        }
    });
}