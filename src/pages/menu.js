
const menu = function(){

    const tajMenu = require('../assets/menu.json');

    const navLinks = document.querySelector('.titlemenu');

    const menuClass = document.createElement("div");
    menuClass.className = "menu";
    menuClass.id = "menuSection"

    const menuLI = document.createElement("li");
    menuLI.className = "menu-items";

    navLinks.after(menuClass);
    menuClass.appendChild(menuLI);

    const hasMenuSection = tajMenu.hasMenu[0].hasMenuSection;
    
    for (var foodSection in hasMenuSection) {

        sectionBuilder(hasMenuSection[foodSection].name)

        for (var i = hasMenuSection[foodSection].hasMenuItem.length - 1; i >= 0; i--) {
            menuMaker (
                hasMenuSection[foodSection].hasMenuItem[i].name,
                hasMenuSection[foodSection].hasMenuItem[i].description,
                hasMenuSection[foodSection].hasMenuItem[i].offers[0].Price
            )
        }
    }
 
    function sectionBuilder (sectionName) {
        const sectionTitle = document.createElement("div")
        sectionTitle.className = "section-title"
        sectionTitle.innerText = sectionName;
        menuLI.appendChild(sectionTitle);
        const horizontalRule = document.createElement("hr")
        horizontalRule.className = "seperator";
        sectionTitle.appendChild(horizontalRule);
    }

    function menuMaker (
        item, 
        description, 
        price, 
        ) {
        const sectionTitle = document.getElementsByClassName('section-title');

        const listPrice = document.createElement("span");
        listPrice.className = "item-price";
        listPrice.innerText = price;

        //create and appened DOM element for item name
        const itemContainer = document.createElement("div")
        itemContainer.className = "item-main";
        const title = document.createElement("span");
        title.className = "item-title";
        title.innerText = item;
        sectionTitle[sectionTitle.length - 1].after(itemContainer)
        itemContainer.appendChild(title);
        title.after(listPrice)

        const menuDescription = document.createElement("p");
        menuDescription.className = "description";
        menuDescription.innerText = description;
        itemContainer.after(menuDescription);
    }
}

export default menu;