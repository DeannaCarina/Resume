function sendMail(contactForm) {
    emailjs.send("gmail", "template_DeannaCarina", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "form_subject": contactForm.subject.value,
        "form_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.location.replace('https://deannacarina.github.io/Resume/thanks.html')
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}