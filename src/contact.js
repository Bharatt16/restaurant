import './contact.css';



export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <h2>Contact Us</h2>
      <p>Email: contact@restaurant.com</p>
    `;
    content.appendChild(contactDiv);
  }
  