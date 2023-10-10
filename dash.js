console.log(document.getElementsByClassName("profile-img-container"));
// document.addEventListener("DOMContentLoaded", () => {
//   console.log(document.getElementById("name"));
//   console.log("reached");
// });

export function setProfile(name, email, phoneNo) {
  let nameEle = document.getElementById("name");
  let emailEle = document.getElementById("emailId");
  let phoneEle = document.getElementById("mobile");
  console.log(name);
  console.log(email);
  console.log(phoneNo);

  nameEle.textContent = name;
  emailEle.textContent = email;
  phoneEle.textContent = phoneNo;
}
