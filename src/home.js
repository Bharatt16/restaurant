import './home.css';
// import Logo from './images/odinLogo.png';


export default function loadHome(){
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    const img = document.createElement('img');
    // img.src = Logo;
    // img.alt = "logo";

    homeDiv.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>The best place to enjoy delicious meals!</p>
    <img src="https://via.placeholder.com/300" alt="Delicious food">

  `;
  content.appendChild(homeDiv);
}