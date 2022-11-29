
let user = {};
let baseUrl = "/api/v1";


const setLoginEmail = (event) => {
    user.email = event.target.value;
}

const setLoginPassword = (event) => {
    user.password = event.target.value;
}

const submitUserLoginForm = async (event) => {

    // We don't want to page to refresh because we are not using actions here!
    event.preventDefault();
    // We will call the API for our own backend Here!

    try {
       const response = await fetch(`${baseUrl}/users/login`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const finalIncomingResponse = await response.json();

        // We have to fix this 
        if (finalIncomingResponse.accessToken) {
            window.location.href = "/home.html";
        } else {
            alert(finalIncomingResponse.message);
        }
    } catch(error) {
        console.log(error);
    }

}