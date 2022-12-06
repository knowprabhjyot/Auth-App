
// So if the user is not logged in, don't allow the user to go to home page 
// When we learn react, there we use concept called as Protected Routes
(function isNotLoggedIN() {
    let accessToken = JSON.parse(localStorage.getItem("acess-token"));

    if (!accessToken) {
        alert("You are not logged in, so please login");
        window.location.href = "../login.html";
    }
})();


const getUser =  JSON.parse(localStorage.getItem("user"));
let baseUrl = "/api/v1";


const userNameTitle = document.querySelector("#username");

userNameTitle.innerHTML = `Hello ${getUser.name}` ;


const showListOfPosts  = async () => {
    const response = await fetch(`${baseUrl}/posts`);
    const finalOutput = await response.json();

    const getPostView = document.querySelector("#postsview");

    for (let i = 0 ; i < finalOutput.data.length; i++) {

        const div = document.createElement("div");
        div.classList.add("card");

        const h3 = document.createElement("h3");
        h3.textContent = finalOutput.data[i].title;

        div.appendChild(h3);

        const h4 = document.createElement("h4");
        h4.textContent = finalOutput.data[i].subTitle;

        div.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = finalOutput.data[i].description;

        div.appendChild(p);

        console.log(div);

        getPostView.appendChild(div);

    }


}


showListOfPosts();


const logout = () => {
    // Ideally we should another API for loging the user out, so that we can destroy the access-token
    
    alert("Succesfully logged out!");
    localStorage.removeItem('acess-token');
    localStorage.removeItem('user');

    window.location.href = "../login.html";
}