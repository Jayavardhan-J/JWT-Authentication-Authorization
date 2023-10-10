const testApiBtn =document.getElementById('test-api-btn');
testApiBtn.addEventListener('click',() => {
	
	let ele = document.getElementById('profile-container');
	ele.style.display="none";
	let addEle = document.getElementById('test-api-container');
	addEle.style.display='flex';
})

	

const profileApiBtn =document.getElementById('profile-btn');
profileApiBtn.addEventListener('click',() => {
	
	let ele = document.getElementById('profile-container');
	ele.style.display="flex";
	let addEle = document.getElementById('test-api-container');
	addEle.style.display='none';
})

// export function setProfile(name,email,phoneNo){
// 	let nameEle = document.getElementById('name');
// 	let emailEle = document.getElementById('emailId');
// 	let phoneEle =document.getElementById('mobile');
// 			console.log(nameEle.value);
// 			console.log(email)
// 			console.log(phoneNo)
// 	nameEle.innerHTML=name;
// 	emailEle.innerHTML=email;
// 	phoneEle.innerHTML=phoneNo;
// }

