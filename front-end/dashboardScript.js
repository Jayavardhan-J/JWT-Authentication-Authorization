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