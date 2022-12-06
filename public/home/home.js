const getUser =  JSON.parse(localStorage.getItem("user"));

const userNameTitle = document.querySelector("#username");

userNameTitle.innerHTML = `Hello ${getUser.name}` ;


