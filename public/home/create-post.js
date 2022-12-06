// CREATE POST JS
let baseUrl = "/api/v1";
const newPost = {};

const setTitle = (event) => {
    newPost.title = event.target.value;
}

const setSubTitle = (event) => {
    newPost.subTitle = event.target.value;
}

const setDescription = (event) => {
    newPost.description = event.target.value;
}

const submitPost = async (event) => {

    // We don't the page to refresh
    event.preventDefault();

    try {
        const response = await fetch(`${baseUrl}/posts/create`, {
            method: "post",
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('acess-token'))}`
            },
        })

       window.location.href = "home.html";
    } catch (error) {
        console.log(error);
    }
}