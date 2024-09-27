let getDataBtn = document.getElementById("getDataBtn");
getDataBtn.addEventListener("click", () => {
  getData();
});

function getData() {
  let getUserData = document.getElementById("post");
  let userDataFrmStorage = JSON.parse(localStorage.getItem("userDataArray"));
  console.log(userDataFrmStorage);
  if (Array.isArray(userDataFrmStorage) && userDataFrmStorage.length > 0) {
    let userDataHTML = "";

    userDataFrmStorage.forEach(function (userData) {
      userDataHTML += `
            <div class="user-data">
              <p><strong>First Name:</strong> ${userData.firstName}    </p>
              <p><strong>Last Name:</strong> ${userData.lastName}      </p>
              <p><strong>Email:</strong> ${userData.email}             </p>
              <p><strong>Phone Number:</strong> ${userData.phoneNumber}</p>
              <hr>
            </div>
          `;
    });

    getUserData.innerHTML = userDataHTML;
  } else {
    getUserData.innerHTML = "<p>No user data found.</p>";
  }
}

document.getElementById("logout").addEventListener("click", (event) => {
  event.preventDefault();

  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
  localStorage.clear();
});
