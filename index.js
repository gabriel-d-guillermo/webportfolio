const navBar = document.getElementById('navBar');




// add a background color and border color when navbar is scroll
window.addEventListener('scroll',()=>{
let current=window.pageYOffset;
if(current > 10 ){
navBar.classList.add("bg-primary-color","box-shadow");
}
if(current < 10 ){
navBar.classList.remove("bg-primary-color" ,"box-shadow");
}
});

window.document.getElementById('toggler').addEventListener('click',()=>{	
	navBar.classList.toggle("box-shadow-2");
});

