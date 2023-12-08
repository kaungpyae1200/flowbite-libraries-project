import Typed from 'typed.js';
import './style.css'

const typeUi = document.querySelector("#typeUi");
const headerUi  = document.querySelector("#headerUi");
// const menu = document.querySelector("#menu");
// const menuUi = document.querySelector("#mobile-menu");

// const mobile = new Mobile = () => {
//     console.log(object);
// }



const header = new Typed(headerUi,{
    strings : ["<span class='text-primary-700'>We invest in the world’s potential</span> ","<span class='text-pink-700'>capital can unlock long-term value and drive economic growth</span> " ],
    typeSpeed : 150,
    backSpeed : 50,
    backDelay : 2000,
    startDelay :1500,
    loop : true,

});



const typed = new Typed(typeUi,{
    strings : ["<span class='text-primary-700'>Organization</span> ", "House", "  <span class='text-primary-700'>Companies</span> ",],
    typeSpeed : 150,
    backSpeed : 50,
    backDelay : 2000,
    startDelay :1500,
    loop : true,



})