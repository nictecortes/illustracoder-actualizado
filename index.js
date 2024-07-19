window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }

    }

}
document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

            var formData = new FormData(this);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'contact.php', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    var formResponse = document.getElementById('formResponse');
                    formResponse.innerHTML = response.message;
                    if (response.status === "success") {
                        formResponse.style.color = "green";
                    } else {
                        formResponse.style.color = "red";
                    }
                } else {
                    alert('An error occurred!');
                }
            };
            xhr.send(formData);
        });