const contactNav=document.querySelector('#contact-nav');
const windowContact=window.matchMedia("(min-width:767px)");
const head=document.querySelector("#head");
const photographs=document.querySelector("#photographs");
const graphics=document.querySelector("#graphics");
let mani=0;

function settingClass(element,query){
    console.log(query)
    if(query.matches){
        element.classList.add("btn-light");
       head.style.backgroundImage="url('images/desktop/image-header.jpg')";
       photographs.style.backgroundImage="url('images/desktop/image-photography.jpg')";
       graphics.style.backgroundImage="url('/images/desktop/image-graphic-design.jpg')";
        console.log(element)
    }
    else{
        mani+=1
        head.style.backgroundImage="url('images/mobile/image-header.jpg')";
        element.classList.remove("btn-light");
        photographs.style.backgroundImage="url('images/mobile/image-photography.jpg')";
        graphics.style.backgroundImage="url('/images/mobile/image-graphic-design.jpg')";
        console.log(element)
    }
}
function setClass(){
    settingClass(contactNav,windowContact);
}
setClass();
console.log(contactNav,windowContact);
windowContact.addEventListener("change",setClass)