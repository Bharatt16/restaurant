import './menu.css';



export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
      </ul>
    `;
    content.appendChild(menuDiv);
  }
  