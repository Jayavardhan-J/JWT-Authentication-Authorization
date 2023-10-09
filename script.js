const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});








// signUp OTP button
const signUpBtn = document.getElementById('sign-up-btn');

signUpBtn.addEventListener('click',(e) => {
	e.preventDefault();
	
	let email = document.getElementById('emailText').value;
	console.log(email)
	fetch('http://localhost:8081/user/sendOtp', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({emailId: email}),
		})
		.then(response => response.text())
		.then((data) => {
		console.log(data);
			let ele = document.getElementById('sign-up-status');
			let statusMessage = document.createElement('p');
			statusMessage.innerText=data;
			ele.appendChild(statusMessage);
		})
		.catch((error) => {
		console.error('Error:', error);
		});
	
})

// Sign In OTP Button
const signInBtn = document.getElementById('sign-in-btn');

	signInBtn.addEventListener('click',(e) => {
		e.preventDefault();
		
		let email = document.getElementById('emailTex').value;
		console.log(email)
		fetch('http://localhost:8081/user/sendOtp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({emailId: email}),
			})
			.then(response => response.text())
			.then((data) => {
			
			// window.location.href = "dashboard.html"
				// console.log(data.text());
				let ele = document.getElementById('sign-in-status');
				let statusMessage = document.createElement('p');
				statusMessage.innerText=data;
				ele.appendChild(statusMessage);
			})
			
			.catch((error) => {
			console.error('Error:', error);
			});
		
	})

	// Sign in and generate token
	const signInBtnText = document.getElementById('sign-in-validate-btn');

	signInBtnText.addEventListener('click',(e) => {
		e.preventDefault();
		
		let otp = document.getElementById('sign-in-otp-text').value;
		let email = document.getElementById('emailTex').value;	
		console.log(otp)
		fetch('http://localhost:8081/user/validateOtp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({emailId: email, oneTimePassword : otp}),
			})
			.then(response => response.text())
			.then((data) => {
				console.log(data);
			 if(data){
				valdiateToken(data);
				
			 }
			 else{
				console.log(data);
				let ele = document.getElementById('sign-in-status');
				let statusMessage = document.createElement('p');
				statusMessage.innerText=data;
				ele.appendChild(statusMessage);
			 }
				
			})
			
			.catch((error) => {
			console.error('Error:', error);
			});
		
	})
let sessionToken="";
	function valdiateToken (token){
		let emailId = document.getElementById('emailTex').value;
		fetch('http://localhost:8081/home/dashboard?email='+emailId ,{
			method :'POST',
			headers : {
				'Content-Type' : 'application/json',
				'Authorization' : 'Bearer '+token
			},
			body : JSON.stringify({ email: emailId })
		})
		.then(response => response.status)
		.then(data =>{
			if(data===200){
				sessionToken=token;
				window.location.href = "dashboard.html";
			}
			else{
				console.log(data);
				let ele = document.getElementById('sign-in-status');
				let statusMessage = document.createElement('p');
				statusMessage.innerText=data;
				ele.appendChild(statusMessage);
			}
		})

		
	}


