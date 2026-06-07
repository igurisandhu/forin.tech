window.initContactForm = function () {

    const form = document.getElementById("contact-form");

    if (!form) return;

    const submitBtn = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            status.textContent =
                "Please fill all required fields.";

            status.className =
                "text-red-500 text-center mt-4";

            return;

        }

        const payload = {

            name: name,

            email: email,

            phone: phone,

            subject: subject || `New Inquiry from ${name}`,

            message: `
                Name: ${name}

                Email: ${email}

                Phone: ${phone}

                Message:
                ${message}
            `,

            company: "",
            website: ""

        };

        try {

            submitBtn.disabled = true;

            submitBtn.innerHTML =
                "Sending...";

            status.textContent = "";

            const response = await fetch(
                "https://api.forin.tech/api/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                throw new Error("Request Failed");
            }

            status.textContent =
                "Message sent successfully. We'll get back to you soon.";

            status.className =
                "text-green-500 text-center mt-4";

            form.reset();

        } catch (error) {

            console.error(error);

            status.textContent =
                "Unable to send message right now. Please try again later.";

            status.className =
                "text-red-500 text-center mt-4";

        } finally {

            submitBtn.disabled = false;

            submitBtn.innerHTML =
                "Send Message";

        }

    });

};