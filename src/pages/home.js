const home = function(){

    const titlemenu = document.querySelector('.titlemenu');

    const homeImage = document.createElement("img");
    homeImage.id = "homeImage";
    homeImage.src = "../src/img/diningroom2.jpg"

    titlemenu.after(homeImage)

}

export default home;