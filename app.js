document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    registration();
  });
function registration() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (firstName === "") {
    Swal.fire({
      icon: "error",
      title: "First name should not be empty",
      text: "Plz enter your first name",
    });
  } else if (lastName === "") {
    Swal.fire({
      icon: "error",
      title: "Last name should not be empty",
      text: "Plz enter your last name",
    });
  } else if (email === "") {
    Swal.fire({
      icon: "error",
      title: "Email should not be empty",
      text: "Plz enter your email",
    });
  } else if (phoneNumber === "") {
    Swal.fire({
      icon: "error",
      title: "Phone number should not be empty",
      text: "Plz enter your phone number",
    });
  } else if (password === "") {
    Swal.fire({
      icon: "error",
      title: "Password should not be empty",
      text: "Plz enter your password",
    });
  } else if (confirmPassword !== password) {
    Swal.fire({
      icon: "error",
      title: "Passwords do not match",
      text: "Plz enter your confirm password",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `${firstName}${lastName} Registration Successfuly`,
      showConfirmButton: false,
      timer: 2000,
    });
    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    };
    let arr = JSON.parse(localStorage.getItem("userDataArray")) || [];
    arr.push(userData);
    localStorage.setItem("userDataArray", JSON.stringify(arr));

    setTimeout(() => {
      window.location.href = "./post.html";
    }, 1000);
  }
}
