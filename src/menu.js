import './menu.css';



export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h2>Menu</h2>
      <br>
      <div class="menu-items">
        
      </div>
    `;
    content.appendChild(menuDiv);
  }


  