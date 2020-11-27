
const fetchBlogs = async () => {
    const response = await fetch("https://dev.to/api/articles?username=tiwariaditya");
    const restObject = await response.json();
    // console.log(restObject);
    return restObject;
}; 

let blogs;
const createCard = (res) => {
    // console.log(res);
        let blog = `<div class="container"> <div class="card">
                <div class="card-blog-image">
                    <img src="${res.cover_image}" alt="js">
                </div>
                <div class="card-heading">
                    <p class="header">${res.title}</p>
                    <p class="text">${res.description}</p>
                    <div class="project-link"><a href="${res.url}" class="link">Read here-></a></div>
                </div>
            </div> </div>`;
            document.querySelector(".blogs").insertAdjacentHTML('afterbegin', blog);
            // const rootBlogsDiv = document.querySelector(".blogs").;
            // const text = document.createTextNode(blog);
            // rootBlogsDiv.appendChild(text);

}


fetchBlogs().then( res => {
    //console.log(res);
    for(let i = 0;i < res.length; i++){
        createCard(res[i]);
    }
});

