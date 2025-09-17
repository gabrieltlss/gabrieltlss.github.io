const contactForm = document.getElementById("contact-form");

let timeOutID = 0;
contactForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    clearTimeout(timeOutID);

    const form = ev.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const feedbackElem = document.getElementById("feedback");

    try {
        feedbackElem.style.color = "black";
        feedbackElem.textContent = "Enviando...";

        const response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        })

        const result = await response.json();

        if (result.message) {
            feedbackElem.textContent = "E-mail enviado com sucesso!";
            feedbackElem.style.color = "green";
            form.reset();
            timeOutID = setTimeout(() => { feedbackElem.textContent = "" }, 3 * 1000);
        } else if (result.error) {
            feedbackElem.textContent = "E-mail não enviado!";
            feedbackElem.style.color = "red";
            form.reset();
            timeOutID = setTimeout(() => { feedbackElem.textContent = "" }, 3 * 1000);
        }
    } catch (error) {
        feedbackElem.textContent = "Erro no servidor!";
        feedbackElem.style.color = "red";
        form.reset();
        timeOutID = setTimeout(() => { feedbackElem.textContent = "" }, 3 * 1000);
    }
})