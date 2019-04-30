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


