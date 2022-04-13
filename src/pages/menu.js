
const menu = function(){
    
    class Menuitem {
        constructor(itemTitle, itemPrice, itemDescription, itemSection) {
            this.itemSection = itemSection;
            this.itemTitle = itemTitle;
            this.itemPrice = itemPrice;
            this.itemDescription = itemDescription;
        }
    }

    const tajMenu = require('../assets/menu.json');

    const menuList = tajMenu.hasMenu[0].hasMenuSection[0].hasMenuItem;
    const menuSection = tajMenu.hasMenu[0].hasMenuSection[0].name;

    const navLinks = document.querySelector('.titlemenu');

    const menuClass = document.createElement("div");
    menuClass.className = "menu";

    const menuLI = document.createElement("li");
    menuLI.className = "menu-items";

    navLinks.after(menuClass);
    menuClass.appendChild(menuLI);


    const hasMenuSection = tajMenu.hasMenu[0].hasMenuSection;

    for (let i = 0; i < hasMenuSection.length; i++) {

        for (var j = 0; j < hasMenuSection[i].hasMenuItem.length - 1; j++) {
            const itemAdd = new Menuitem(hasMenuSection[i].hasMenuItem[j]["name"],hasMenuSection[i].hasMenuItem[j]["offers"][0]["Price"],hasMenuSection[i].hasMenuItem[j]["description"], hasMenuSection[i].name)

            menuMaker (itemAdd.itemTitle, itemAdd.itemDescription, itemAdd.itemPrice, itemAdd.itemSection);
        }
    }
 

    function menuMaker (item, description, price, section) {

        const sectionName = document.getElementsByClassName('section-title');

        if (sectionName.length > 0) {
            
            for (let i = 0; i < sectionName.length; i++) {
                if  (sectionName[i].innerText = section) {
                    //infinite loop here!
                console.log(sectionName[i].innerText)
                buildsubMenu();
                } else {
                    const sectionTitle = document.createElement("div")
                    sectionTitle.className = "section-title"
                    sectionTitle.innerText = section;
                    menuLI.appendChild(sectionTitle);
                    const horizontalRule = document.createElement("hr")
                    horizontalRule.className = "seperator";
                    sectionTitle.appendChild(horizontalRule);
                    buildsubMenu();
                }
            }
        } else {
            console.log(`line 64`)
            const sectionTitle = document.createElement("div")
            sectionTitle.className = "section-title"
            sectionTitle.innerText = section;
            menuLI.appendChild(sectionTitle);
            const horizontalRule = document.createElement("hr")
            horizontalRule.className = "seperator";
            sectionTitle.appendChild(horizontalRule);
            buildsubMenu();
        }

        function buildsubMenu () {
            const sectionTitle = document.querySelector('.section-title');

            const listPrice = document.createElement("span");
            listPrice.className = "item-price";
            listPrice.innerText = price;

            //create and appened DOM element for item name
            const itemContainer = document.createElement("div")
            itemContainer.className = "item-main";
            const title = document.createElement("span");
            title.className = "item-title";
            title.innerText = item;
            sectionTitle.after(itemContainer)
            itemContainer.appendChild(title);
            title.after(listPrice)

            const menuDescription = document.createElement("p");
            menuDescription.className = "description";
            menuDescription.innerText = description;
            itemContainer.after(menuDescription);
        }
    }
}

export default menu;