window.addEventListener("scroll", reveal);

function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = reveals[i].getBoundingClientRect().top;
		let revealPoint = 200;

		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

document
	.getElementById("contactForm")
	.addEventListener("submit", async function (event) {
		event.preventDefault();
		document.getElementById("btnSub").setAttribute("disabled", "disabled");
		// Evitar que el formulario se envíe de manera tradicional
		// await new Promise(() => setTimeout(() => {
		// 	const r = {	
		// 		status:"success",	
		// 		message: "esto es un test",
		// 	};
		// 	handleResponse(r);
		// }, 1000)
		// )
	
		let formData = new FormData(this);
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "contact.php", true);
		xhr.onload = function () {
			console.log(xhr);
			if (xhr.status === 200) {
				let response = JSON.parse(xhr.responseText);
				handleResponse(response);
			} else {
				alert("An error occurred!");
			}
		};
		xhr.send(formData);
	});

const handleResponse = (response) => {
	const formResponse = document.getElementById("form-message");
	formResponse.innerHTML = "";
	formResponse.innerHTML = response.message;
	if (response.status === "success") {
		formResponse.style.color = "green";
	} else {
		formResponse.style.color = "red";
	}
	document.getElementById("btnSub").removeAttribute("disabled");
};
