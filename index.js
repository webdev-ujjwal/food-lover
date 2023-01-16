const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

// /* JS code to chnage icon color on hovering to div */ 
// document.getElementByClass("card").addEventListener("mouseover", function() {
//     document.getElementByClass("f-icon").setStyle('color: #fff !important');
// });
    
// document.getElementByClass("card").addEventListener("mouseout", function() {
//     document.getElementByClass("f-icon").setStyle('color: #ff5500');
// });

/* FAQ JS */ 
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


var accordionItems = document.getElementsByClassName('accordion-item'); 

function changeIcons()
{
    document.getElementByTagName("i").className('fa-solid fa-caret-down');
};

for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", changeIcons);
}