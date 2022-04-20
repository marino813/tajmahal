import "./style.css";
import home from "./pages/home"
import contact from "./pages/contact";
import menu from "./pages/menu";

const menuButton = document.getElementById('menu');
const orderButton = document.getElementById('orderOnline');
const contactButton = document.getElementById('contact');

menuButton.addEventListener("click", function(){
    menu();
    menuButton.disabled = true;
    contactButton.disabled = false;
    orderButton.disabled = false; 
});

orderButton.addEventListener("click", function(){
    const menuSection = document.getElementById('menuSection');    
    menuSection.remove();

    contactButton.disabled = false;
    menuButton.disabled = false; 
    orderButton.disabled = true; 
});

contactButton.addEventListener("click", function(){
    const menuSection = document.getElementById('menuSection');    
    menuSection.remove();
    
    contactButton.disabled = true;
    menuButton.disabled = false; 
    orderButton.disabled = false; 
});

home();
contact();

