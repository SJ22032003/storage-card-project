// first check if we have data in local storage
const storedUserInformation = localStorage.getItem("userInformation");

// clear button
const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", () => {
  localStorage.removeItem("userInformation");
  userInformationToBeStored();
});

if (storedUserInformation) {
  console.log("We have data in local storage");
  const userInformation = JSON.parse(storedUserInformation);
  editUserInfoToDom(userInformation);

} else {
  userInformationToBeStored();
}

function userInformationToBeStored() {

  const informationToGet = [
    { label:"Enter your firstName", key: "firstName" },
    { label:"Enter your lastName", key: "lastName" },
    { label:"Enter your country", key: "country" },
    { label:"Enter your phoneNumber", key: "phoneNumber" },
  ];

  // object to store this information
  const userInformationObject = {};

  // loop through the informationToGet
  informationToGet.forEach((info) => {
    const value = prompt(info.label);
    userInformationObject[info.key] = value;
  })


  // store the data in local storage
  localStorage.setItem(
    "userInformation",
    JSON.stringify(userInformationObject)
  );

  // now its time to show in the view
  editUserInfoToDom(userInformationObject);
}


function editUserInfoToDom(data){
  document.getElementById("first-name").textContent = data.firstName;
  document.getElementById("last-name").textContent = data.lastName;
  document.getElementById("country").textContent = data.country;
  document.getElementById("phone-number").textContent = data.phoneNumber;
}