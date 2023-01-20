function sendMail(contactForm) {
    emailjs.sendForm("service_2widl53", "template_DeannaCarina", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "form_subject": contactForm.subject.value,
        "form_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Your email has been sent.')
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById('fillForm').reset(); // Reset form once the message has been sent
    return false; // This is to prevent the page from refreshing when you submit your form 
}
