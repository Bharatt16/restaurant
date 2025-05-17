import './home.css';
import loadMenu from './menu';
import clearContent from './index';
// import Logo from './images/odinLogo.png';


export default function loadHome(){
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv');
   

    homeDiv.innerHTML = `<h1>Where Food is a Story, <br>and Every Bite is an Adventure.</h1>
    <p>The best place to enjoy delicious meals!</p><br>
    
  `;
  content.appendChild(homeDiv);

  const bookTableBtn = document.createElement('button');
  bookTableBtn.id = 'bookTable';
  bookTableBtn.textContent = 'Book a Table';
  homeDiv.appendChild(bookTableBtn);
  bookTableBtn.addEventListener('click', ()=>{
    clearContent();
    loadMenu();
  });
}