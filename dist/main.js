(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>o});var i=n(81),t=n.n(i),a=n(645),c=n.n(a)()(t());c.push([e.id,"body {\r\n    margin: auto;\r\n    background-color: red;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Anton', sans-serif;\r\n    font-size: 120px;\r\n    color: wheat;\r\n    margin: 5px;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Anton', sans-serif;\r\n    font-size: 60px;\r\n    color: black;\r\n    margin-top: -60px;\r\n    margin-bottom: 0px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\np {\r\n\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n#homeImage {\r\n    filter: drop-shadow(0 0 0.25rem black);\r\n}\r\n\r\n.menu {\r\n\r\n}\r\n\r\n.seperator {\r\n    width: 80%;\r\n    border-style: solid;\r\n}\r\n\r\n.section-title {\r\n    font-family: 'Jost', sans-serif;\r\n    font-style: italic;\r\n    color: wheat;\r\n    font-size: 50px;\r\n}\r\n\r\n.titlemenu {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    font-weight: bolder;\r\n    font-family: 'Jost', sans-serif;\r\n    font-size: 27px;\r\n    font-variant: all-small-caps;\r\n}\r\n\r\n.menu-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n}\r\n\r\n.item-main {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-family: 'Jost', sans-serif;\r\n    font-style: italic;\r\n    color: wheat;\r\n    font-size: 25px\r\n}\r\n\r\n.description {\r\n    text-align: left;\r\n    font-family: 'Jost', sans-serif;\r\n    font-style: italic;\r\n}\r\n\r\n",""]);const o=c},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",i=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),i&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),i&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,i,t,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(c[s]=!0)}for(var p=0;p<e.length;p++){var m=[].concat(e[p]);i&&c[m[0]]||(void 0!==a&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=a),n&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=n):m[2]=n),t&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=t):m[4]="".concat(t)),r.push(m))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,i=0;i<r.length;i++)if(r[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},c=[],o=0;o<e.length;o++){var s=e[o],p=i.base?s[0]+i.base:s[0],m=a[p]||0,f="".concat(p," ").concat(m);a[p]=m+1;var d=n(f),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var y=t(u,i);i.byIndex=o,r.splice(o,0,{identifier:f,updater:y,references:1})}c.push(f)}return c}function t(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,t){var a=i(e=e||[],t=t||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var o=n(a[c]);r[o].references--}for(var s=i(e,t),p=0;p<a.length;p++){var m=n(a[p]);0===r[m].references&&(r[m].updater(),r.splice(m,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var i=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,t&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(i,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},197:e=>{e.exports=JSON.parse('{"@context":"http://schema.org","@type":"Restaurant","address":{"@type":"PostalAddress","addressLocality":"","addressRegion":"","postalCode":"","streetAddress":""},"geo":{"@type":"GeoCoordinates","latitude":"","longitude":""},"name":"","servesCuisine":["Indian"],"hasMenu":[{"@type":"Menu","name":"Main","hasMenuSection":[{"@type":"MenuSection","name":"Appetizers","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Papadum","description":"A bean wafer, indian crispy bread","offers":[{"@type":"Offer","Price":"0.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Samosa (Meat or Vegetable)","description":"Crisp and spiced patties","offers":[{"@type":"Offer","Price":"3.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Pakora","description":"Mixed vegetable fritters","offers":[{"@type":"Offer","Price":"3.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Banana Pakora","description":"Banana fritters","offers":[{"@type":"Offer","Price":"3.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Begun Bhaji","description":"Eggplant fritters","offers":[{"@type":"Offer","Price":"3.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Sheek Kebab","description":"Minced meat with onions and herbs roasted on skewers","offers":[{"@type":"Offer","Price":"6.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chana Bhaji","description":"Fried and spiced chick peas&amp;comma; served with poori","offers":[{"@type":"Offer","Price":"6.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Fried Shrimp","description":"Shrimp cooked bangali style&amp;comma; served with poori","offers":[{"@type":"Offer","Price":"8.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Taj Mahal Liver","description":"Chicken liver sauteed with herbs and spices&amp;comma; served with poori","offers":[{"@type":"Offer","Price":"6.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mushroom Bhaji","description":"Fresh mushroom pieces tastefully cooked simmered with tomato&amp;comma; served with poori","offers":[{"@type":"Offer","Price":"6.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Assorted Indian Hors D\'oeuvres (Vegetable or Meat)","description":"Samosa, pakoras, sheek kebab and papadum served with mint sauce and onion relish","offers":[{"@type":"Offer","Price":"6.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Soups","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Mulligatawny Soup","description":"Delicious lentil soup with tomatoes, lemon&amp;comma; herbs and mild indian spices","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Soup","description":"Mixed fresh vegetable soup with mild indian spices","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Coconut Soup","description":"Delicious hot coconut in milk","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Taj Mahal Soup","description":"Chicken soup spiced with garlic&amp;comma; ginger&amp;comma; cinnamon&amp;comma; cardamom and some indian herbs","offers":[{"@type":"Offer","Price":"2.25","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Indian Breads","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Nan","description":"Unleavened bread baked in the oven","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Garlic Nan","description":"Unleavened bread baked with roasted garlic","offers":[{"@type":"Offer","Price":"3.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chapati","description":"Light&amp;comma; unleavened&amp;comma; freshly baked soft bread","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Paratha","description":"Layered bread fried in butter","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Poori","description":"Puffy bread fried in oil","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Cheese Poori","description":"Deep fried poori bread stuffed with cheese","offers":[{"@type":"Offer","Price":"3.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Aloo Paratha","description":"Paratha stuffed with mashed and spiced potatoes","offers":[{"@type":"Offer","Price":"3.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Keema Paratha","description":"Paratha stuffed with mildly spiced minced meat and peas","offers":[{"@type":"Offer","Price":"3.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mughlai Paratha","description":"Paratha stuffed with mildly spiced minced meat&amp;comma; peas&amp;comma; eggs&amp;comma; chopped onion and green pepper","offers":[{"@type":"Offer","Price":"3.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Onion Kulcha","description":"Paratha stuffed with mildly spiced chopped onion and peas","offers":[{"@type":"Offer","Price":"3.25","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Fresh Vegetable Specialties","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Mixed Vegetable Curry","description":"A combination of garden fresh vegetables sauteed in lightly spiced sauce","offers":[{"@type":"Offer","Price":"8.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Vindaloo","description":"Highly spiced fresh vegetables cooked in tangy sharp spice","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Saag Paneer","description":"Spinach and cheese cooked with mild or hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Matar Ponir","description":"Green peas and cheese cooked with mild or hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chana Saag","description":"Chick peas and spinach cooked with mild or hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Dhansak","description":"Combination of fresh mix-vegetable cooked in persian style with lentil and spinach and hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Bhindi Masala","description":"Okra cooked with tomatoes&amp;comma; onions and Bengali spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Kurma","description":"Cooked in Mughlai style with mild sauces","offers":[{"@type":"Offer","Price":"9.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Aloo Gobi Matar","description":"Potatoes&amp;comma; cauliflower and sweet peas cooked with mild or hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chana Masala","description":"Chick peas cooked with chopped tomatoes mild or hot spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Aloo Palak","description":"Potatoes and spinach tastefully sauteed with herbs and Indian spices","offers":[{"@type":"Offer","Price":"9.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Malai Kofta","description":"Mix vegetable balls cooked with creamy mild sauces","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Poneer Tikka Masala","description":"Poneer cubes cooked with tomato&amp;comma; butter and creamy sauce","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Vegetable Karahi","description":"Served sizzling","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Chicken Curry Specialties","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Chicken Curry","description":"Boneless chicken cooked in mildly spiced sauce","offers":[{"@type":"Offer","Price":"9.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Vindaloo","description":"Chicken cooked with hot pepers&amp;comma; potatoes and highly spiced","offers":[{"@type":"Offer","Price":"9.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Madras","description":"Chicken cooked with tomatoes and medium hot spices","offers":[{"@type":"Offer","Price":"9.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Saag","description":"Chicken cooked with spinach and mild spices","offers":[{"@type":"Offer","Price":"9.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Mushroom","description":"Chicken cooked with mushrooms and mild spices","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Bhona","description":"Chicken cooked with chopped onions&amp;comma; tomatoes and green peppers and medium spices","offers":[{"@type":"Offer","Price":"9.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Shahi Kurma","description":"Chicken cooked in Mughlai style in a mild and creamy sauce","offers":[{"@type":"Offer","Price":"10.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Matar","description":"Chicken cooked with green peas and tomatoes and mild spices","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Dhansak","description":"Chicken cooked in Persian style with lentils and spinach and medium hot spices","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Bhindi","description":"Chicken cooked in bhindi (fresh okra) in mildy spiced sauce","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Shree Mangal","description":"Chicken cooked with pineapple&amp;comma; almond&amp;comma; sultana and nuts in mild sauce","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Kashmiri","description":"Chicken cooked with banana and a creamy mild spices","offers":[{"@type":"Offer","Price":"10.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Sabzi","description":"Chicken cooked with sabzi fresh vegetables in medium hot sauce","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Tikka Makhni","description":"Broiled chicken cooked with tomatoes&amp;comma; butter&amp;comma; almond and coconut and creamy sauce","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Tikka Masala","description":"Boneless broiled chicken cubes cooked with green peppers in creamy sauce","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Karahi","description":"Served sizzling","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Lamb Curry Specialties","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Lamb Curry","description":"Cooked in lightly spiced gravy","offers":[{"@type":"Offer","Price":"10.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Vindaloo","description":"Highly spiced meat cooked with potatoes in a tangy sharp sauce","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Madras","description":"Cooked with tomatoes and medium hot spices","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Rogan Josh","description":"Cubes of gosht lamb cooked with green peppers and in lightly spiced gravy","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Saag","description":"Cooked with spinach and fresh Indian spices","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Bhona","description":"Cooked with chopped onions&amp;comma; tomatoes&amp;comma; green peppers and medium hot spices","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Kurma","description":"Cooked with Mughlai style in mild and creamy sauce","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Matar","description":"Cooked with green peas and tomatoes and mild spices","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Dhansak","description":"Cooked in Persian style with lentil and spinach and medium hot spices","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Sabzi","description":"Succulent pieces of gosht lamb cooked with fresh vegetable in medium hot sauce","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Kashmiri","description":"Cooked with banana creamy and mild spices","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Shree Mangal","description":"Cooked with pineapple&amp;comma; almond&amp;comma; sultana and nuts in mild sauce","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Karahi","description":"Served sizzling","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Seafood Specialities","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Shrimp Curry","description":"Cooked With Green peppers and tomatoes in lightly spiced sauce","offers":[{"@type":"Offer","Price":"14.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Crabmeat Curry","description":"Can be served as vindaloo or with spinach&amp;comma; cooked with tomatoes and mild spices","offers":[{"@type":"Offer","Price":"14.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Kurma","description":"Cooked in mughlai style in mild and creamy sauce","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Vindaloo","description":"Cooked with potatoes in a tangy sharp sauce","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Saag","description":"Cooked with spinach and tomatoes in delicately spiced sauce","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Matar","description":"Cooked with green peas and tomatoes and mild spices","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Bengal","description":"From the bay of bengal&amp;comma; cooked with cream and fastidious sauce","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Taj Mahal Fish Curry","description":"Fish of the day cooked in bengali style with precisely spiced gravy","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Bhindi","description":"Shrimp cooked with fresh okra in medium hot sauce","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Kashmiri","description":"Cooked with banana creamy and mild spices","offers":[{"@type":"Offer","Price":"15.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Tandoori Masala","description":"Broiled shrimp&amp;comma; cooked with green peppers&amp;comma; tomatoes in creamy sauce","offers":[{"@type":"Offer","Price":"16.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Karahi","description":"Served sizzling","offers":[{"@type":"Offer","Price":"16.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lobster Curry","description":"Cooked with tomatoes in medium hot spiced sauce","offers":[{"@type":"Offer","Price":"24.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lobster Chili Masala","description":"Cooked with onion&amp;comma; green pepper and mild or hot spices","offers":[{"@type":"Offer","Price":"25.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Indian Barbeque Served Sizzling","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Tandoori Chicken","description":"Spring chicken marinated in yogurt&amp;comma; vinegar&amp;comma; mint&amp;comma; exotic tandoori spices and grilled in the oven","offers":[{"@type":"Offer","Price":"11.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Tikka","description":"Chicken cubes marinated in yogurt&amp;comma; vinegar&amp;comma; mint&amp;comma; exotic Tandoori spices and grilled in the oven","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Kebab","description":"Cubed chicken marinated in mild spices&amp;comma; barbequed on skewers over charcoal","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Seekh Kebab","description":"Minced meat with onions and herbs roasted on skewers","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Rashmi Kebab","description":"Boneless chicken breast marinated in mild spices&amp;comma; barbequed on skewers over charcoal","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Tandoori Mixed Grill","description":"An assortment of Tandoori specialties","offers":[{"@type":"Offer","Price":"16.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lamb Tikka","description":"Cubes of lamb marinated in yogurt&amp;comma; vinegar&amp;comma; mint&amp;comma; exotic Tandoori spices and grilled in the oven","offers":[{"@type":"Offer","Price":"14.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Fish Tandoori","description":"Fish marinated in yogurt&amp;comma; vinegar&amp;comma; mint&amp;comma; exotic Tandoori spices and grilled in the oven","offers":[{"@type":"Offer","Price":"16.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Tandoori","description":"Served sizzling","offers":[{"@type":"Offer","Price":"17.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"A La Carte - Biryani Specialties","description":"A La Carte Specialties are served with saffron rice&amp;comma; brown rice upon request&amp;comma; dal&amp;comma; cabbage and onion relish","hasMenuItem":[{"@type":"MenuItem","name":"Vegetable Biryani","description":"Long grain rice cooked with onion&amp;comma; tomato&amp;comma; yogurt and milk&amp;comma; mixed with a combination of vegetables","offers":[{"@type":"Offer","Price":"10.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shahjahani Biryani","description":"Long grain rice flavored with saffron&amp;comma; cooked Mughlai style with boneless chicken&amp;comma; eggs&amp;comma; nuts and 15 exotic spices","offers":[{"@type":"Offer","Price":"11.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Chicken Tikka Biryani","description":"Long grain rice flavored with saffron&amp;comma; cooked Mughlai style with boneless chicken&amp;comma; tikka&amp;comma; eggs&amp;comma; nuts and 15 exotic spices","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Taj Mahal Biryani","description":"Long grain rice flavored with saffron&amp;comma; cooked oriental Bengali style with succulent pieces of lamb&amp;comma; eggs&amp;comma; nuts and 20 exotic spices with special recipe","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mixed Biryani","description":"Long grain rice flavored with saffron and cooked with lamb&amp;comma; chicken and vegetables and eggs","offers":[{"@type":"Offer","Price":"12.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Shrimp Biryani","description":"Cooked taj mahal style","offers":[{"@type":"Offer","Price":"16.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Tid-Bits","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Raita","description":"Cool whipped yogurt with cucumber&amp;comma; tomatoes and mint","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lassi","description":"Refreshing Indian cold drink made from yogurt and masala sweet or salted","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mango Lassi","description":"Refreshing Indian cold drink made from yogurt and fresh mango","offers":[{"@type":"Offer","Price":"2.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Yogurt","description":"Homemade","offers":[{"@type":"Offer","Price":"1.75","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Taj Mahal Salad","description":"Indian style mixed salad","offers":[{"@type":"Offer","Price":"3.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Condiments","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Sweet Mango Chutney","description":"","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Lemon Pickle","description":"Hot and spicy","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mango Pickle","description":"Hot and spicy","offers":[{"@type":"Offer","Price":"1.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Homemade Bengali Desserts","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Rasmalai","description":"Made from fresh homemade cottage cheese in sweetened milk served cold with pistachios","offers":[{"@type":"Offer","Price":"2.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Gulabjaman","description":"Made with dry milk and cottage cheese balls deep fried and dipped in sugar syrup and rose water","offers":[{"@type":"Offer","Price":"2.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Firni","description":"Indian style rose water flavored custard pudding","offers":[{"@type":"Offer","Price":"2.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Mango Ice Cream","description":"","offers":[{"@type":"Offer","Price":"2.95","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Kulfi","description":"Homemade style ice cream with pistachio&amp;comma; saffron and nuts","offers":[{"@type":"Offer","Price":"2.95","priceCurrency":"USD"}]}]},{"@type":"MenuSection","name":"Beverages","description":"","hasMenuItem":[{"@type":"MenuItem","name":"Tea or Coffee","description":"","offers":[{"@type":"Offer","Price":"1.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Indian Spice Tea","description":"","offers":[{"@type":"Offer","Price":"1.25","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Iced Tea","description":"","offers":[{"@type":"Offer","Price":"1.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Iced Coffee","description":"","offers":[{"@type":"Offer","Price":"1.50","priceCurrency":"USD"}]},{"@type":"MenuItem","name":"Soft Drinks","description":"","offers":[{"@type":"Offer","Price":"1.50","priceCurrency":"USD"}]}]}]}],"priceRange":"$$","openingHours":"","telephone":"","url":"https://www.allmenus.com/ny/brooklyn/52513-taj-mahal-indian-restaurant/menu/"}')}},r={};function n(i){var t=r[i];if(void 0!==t)return t.exports;var a=r[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var i in r)n.o(r,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=n(379),r=n.n(e),i=n(795),t=n.n(i),a=n(569),c=n.n(a),o=n(565),s=n.n(o),p=n(216),m=n.n(p),f=n(589),d=n.n(f),u=n(426),y={};y.styleTagTransform=d(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=t(),y.insertStyleElement=m(),r()(u.Z,y),u.Z&&u.Z.locals&&u.Z.locals;console.log("coming from HOME script"),console.log("coming from CONTACT script"),function(){class e{constructor(e,r,n,i){this.itemSection=i,this.itemTitle=e,this.itemPrice=r,this.itemDescription=n}}const r=n(197),i=(r.hasMenu[0].hasMenuSection[0].hasMenuItem,r.hasMenu[0].hasMenuSection[0].name,document.querySelector(".titlemenu")),t=document.createElement("div");t.className="menu";const a=document.createElement("li");a.className="menu-items",i.after(t),t.appendChild(a);const c=r.hasMenu[0].hasMenuSection;for(let r=0;r<c.length;r++)for(var o=0;o<c[r].hasMenuItem.length-1;o++){const n=new e(c[r].hasMenuItem[o].name,c[r].hasMenuItem[o].offers[0].Price,c[r].hasMenuItem[o].description,c[r].name);s(n.itemTitle,n.itemDescription,n.itemPrice,n.itemSection)}function s(e,r,n,i){const t=document.getElementsByClassName("section-title");if(t.length>0)for(let e=0;e<t.length;e++)if(t[e].innerText=i)console.log(t[e].innerText),c();else{const e=document.createElement("div");e.className="section-title",e.innerText=i,a.appendChild(e);const r=document.createElement("hr");r.className="seperator",e.appendChild(r),c()}else{console.log("line 64");const e=document.createElement("div");e.className="section-title",e.innerText=i,a.appendChild(e);const r=document.createElement("hr");r.className="seperator",e.appendChild(r),c()}function c(){const i=document.querySelector(".section-title"),t=document.createElement("span");t.className="item-price",t.innerText=n;const a=document.createElement("div");a.className="item-main";const c=document.createElement("span");c.className="item-title",c.innerText=e,i.after(a),a.appendChild(c),c.after(t);const o=document.createElement("p");o.className="description",o.innerText=r,a.after(o)}}}()})()})();