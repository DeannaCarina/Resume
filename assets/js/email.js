



window.onload = function() {
    document.getElementById('fillForm').addEventListener('submit', function(event) {
        event.preventDefault();
                
        emailjs.sendForm('service_2widl53', 'template_DeannaCarina', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        document.getElementById('fillForm').reset(); // Reset form once the message has been sent
        return false; // This is to prevent the page from refreshing when you submit your form 
    });    
}
window.location.replace("https://deannacarina.github.io/Resume/thanks.html");
