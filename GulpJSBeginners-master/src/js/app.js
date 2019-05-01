function add(a, b)
{
   return a + b;
}
function mul(a, b)
{
   return a * b;
}

// var element = document.getElementsByClassName("item-products");
	
// declare function for "onMouseOver" event:
 function addActiveClass(element) {
<<<<<<< HEAD
  element.classList.add("active");
 // var elevalue = element.getAttribute('class');
   var x = document.querySelectorAll(".dropdownSection");
   var ele = document.querySelector("header");
   ele.className= "globalNav initialized overlayActive dropdownActive";   
    if(element.classList.contains("item-products")){
    x[0].classList.add("active"); 
    document.getElementById("dropdownArrow").setAttribute(
      "style", " transform: translateX(513px) rotate(45deg);");
      document.getElementById("dropDownBackground").setAttribute(
        "style", " transform: translateX(400px) scaleX(1.2) scaleY(2);");
      document.getElementById("myDropdownContainer").setAttribute(
        "style", " transform: translateX(417px); width: 650px; height: 653px;");
   } else if(element.classList.contains("item-developers")){
    x[1].classList.add("active");
    document.getElementById("dropdownArrow").setAttribute(
      "style", " transform: translateX(620px) rotate(45deg);");
      document.getElementById("dropDownBackground").setAttribute(
        "style", " transform: translateX(400px) scaleX(1.2) scaleY(2);");
      document.getElementById("myDropdownContainer").setAttribute(
        "style", " transform: translateX(500px); width: 650px; height: 653px;");
   } 
   else if(element.classList.contains("item-company")) {
    x[2].classList.add("active");
    document.getElementById("dropdownArrow").setAttribute(
      "style", " transform: translateX(750px) rotate(45deg);");
      document.getElementById("dropDownBackground").setAttribute(
        "style", " transform: translateX(550px) scaleX(1.2) scaleY(2);");
      document.getElementById("myDropdownContainer").setAttribute(
        "style", " transform: translateX(450px); width: 650px; height: 653px;");
   }
   
 
 }
 function removeActiveClass(element) {
   element.classList.remove("active");
   var x = document.querySelectorAll(".dropdownSection");
   var ele = document.querySelector("header");  
   ele.className= "globalNav initialized noDropdownTransition";
   if(element.classList.contains("item-products")){
    x[0].classList.remove("active");
   }
   if(element.classList.contains("item-developers")){
    x[1].classList.remove("active");
   }
   if(element.classList.contains("item-company")){
    x[2].classList.remove("active");
   }
 }
 function addmobileActiveClass(ele) {
   ele.classList.add("globalPopupActive");
 }
 function removemobileActiveClass(ele) {
 var navbutton = document.querySelector(".mobile");
  navbutton.classList.remove("globalPopupActive");
}
=======
   var elevalue = element.getAttribute('class');
   var x = document.querySelectorAll(".dropdownSection");
  //  console.log(selector);
  //  console.log(selector.length);
   if(elevalue == "rootLink item-products hasDropdown colorize"){
    x[1].classList.add("active");
   } else if(elevalue == "rootLink item-developers hasDropdown colorize"){
    x[2].classList.add("active");
   } else {
    x[3].classList.add("active");
   }
    element.classList.add("active");
   var ele = document.querySelector("header");
   ele.className= "globalNav initialized overlayActive dropdownActive";
 }
 function removeActiveClass(element) {
    element.classList.remove("active");
   var ele = document.querySelector("header");
   ele.className= "globalNav initialized noDropdownTransition";
 }
>>>>>>> fe59111cdb335cd173e5c064fa9c6a05d3eab290


