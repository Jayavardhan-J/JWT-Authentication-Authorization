const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// signUp OTP button
const signUpBtn = document.getElementById("sign-up-btn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("emailText").value;

  fetch("http://localhost:8081/user/sendOtp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailId: email }),
  })
    .then((response) => response.text())
    .then((data) => {
      let ele = document.getElementById("signUp-status-message");

      ele.innerText = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Sign In OTP Button
const signInBtn = document.getElementById("sign-in-btn");
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("emailTex").value;

  fetch("http://localhost:8081/user/sendOtp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailId: email }),
  })
    .then((response) => response.text())
    .then((data) => {
      let ele = document.getElementById("signIn-status-message");

      ele.innerText = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Sign in and generate token
const signInBtnText = document.getElementById("sign-in-validate-btn");

signInBtnText.addEventListener("click", (e) => {
  e.preventDefault();
  let otp = document.getElementById("sign-in-otp-text").value;
  let email = document.getElementById("emailTex").value;
  validateOtp(otp, email);
});

const signUpBtnText = document.getElementById("sign-up-validate-btn");

signUpBtnText.addEventListener("click", (e) => {
  e.preventDefault();
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  let mobileNo = document.getElementById("mobileNumber").value;
  let otp = document.getElementById("sign-up-otp-text").value;
  let email = document.getElementById("emailText").value;

  createUser(fName, lName, mobileNo, email);
  validateOtp(otp, email);
});
function createUser(fName, lName, mobileNo, email) {
  fetch("http://localhost:8081/home/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: fName,
      lastName: lName,
      emailId: email,
      mobile: mobileNo,
    }),
  })
    .then((response) => {
      return response;
    })
    .then((data) => {
      console.log(data);
    });
}
function validateOtp(otpField, emailField) {
  fetch("http://localhost:8081/user/validateOtp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailId: emailField, oneTimePassword: otpField }),
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((data) => {
      if (data.status === 200) {
        return data.text();
      }
    })
    .then((newToken) => {
      validateReuqest(newToken, emailField);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let sessionToken = "";

function validateReuqest(token, emailId) {
  fetch("http://localhost:8081/home/dashboard?email=" + emailId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ email: emailId }),
  })
    .then((response) => response.status)
    .then((data) => {
      if (data == 200) {
        sessionToken = token;
        fetchUser(token, emailId);
      }
    });
}

function fetchUser(token, emailId) {
  fetch("http://localhost:8081/home/getUser?email=" + emailId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.status == 302) {
        return response.json();
      } else return "Unauthorized access!";
    })
    .then((data) => {
      var myObject = {
        firstName: data.firstName,
        lastName: data.lastName,
        emailId: data.emailId,
        mobile: data.mobile,
      };
      var userData = JSON.stringify(myObject);
      localStorage.setItem("myObject", userData);
      window.location.href = "dashboard.html";
    });
}
