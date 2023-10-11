
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

function setProfile (){
	var storedObjectString = localStorage.getItem('myObject');
	var retrievedObject = JSON.parse(storedObjectString);
	let nameEle = document.getElementById("name");
	let emailEle = document.getElementById("emailId");
	let phoneEle = document.getElementById("mobile");
	
	nameEle.innerText=retrievedObject.firstName+" "+retrievedObject.lastName;
	phoneEle.innerText = retrievedObject.mobile;
	emailEle.innerText=retrievedObject.emailId;
  
	
  }
  setProfile();
