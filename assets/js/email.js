



window.onload = function() {
    document.getElementById('fillForm').addEventListener('submit', function(event) {
        event.preventDefault();
                
        emailjs.sendForm('service_2widl53', 'template_DeannaCarina', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('fillForm').reset(); // Reset form once the message has been sent
                window.location.replace("https://deannacarina.github.io/Resume/thanks.html");
            }, function(error) {
                console.log('FAILED...', error);
            });
    });    
}

