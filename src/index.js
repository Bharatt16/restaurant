import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import Logo from './images/odinLogo.png';
import profile from './images/profile.svg';
import cart from './images/cart.svg';

const profileImg = document.createElement('img');
profileImg.src = profile;
profileImg.alt = "profie";
document.querySelector('.svgs').append(profileImg);

const cartImg = document.createElement('img');
cartImg.src = cart;
cartImg.alt = "cart";
document.querySelector('.svgs').append(cartImg);

const logoImg = document.createElement('img');
logoImg.src = Logo;
logoImg.alt = "logo";
logoImg.classList.add('OdinLogo');
document.querySelector('.logo').prepend(logoImg);



function clearContent(){
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('home').addEventListener('click', ()=>{
    clearContent();
    loadHome();
});
document.getElementById('menu').addEventListener('click', ()=>{
    clearContent();
    loadMenu();
});
document.getElementById('contact').addEventListener('click', ()=>{
    clearContent();
    loadContact();
});

loadHome();