import "./contact.css";
import mapIcon from "./images/map.svg";
import callIcon from "./images/call.svg";
import mailIcon from "./images/mail.svg";
import clockIcon from "./images/clock.svg";

export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = `
    
    <br>
    <div class="contact-info">
      <div class="left-side">
         <h1>Get In Touch</h1><br>
         <p class="left-side-p">We'd love to hear from you! Whether you have questions about our menu, want to book a table for a special occasion, or just want to share your experience with us, our team is here to help. At The Odin Restaurant, we believe that great food and warm hospitality go hand in hand — and that includes staying connected with our guests. Reach out anytime, and we'll get back to you as soon as possible!</p> <br>
         <div class="icons">
           <div class="top-icons">
               <div class="mapContainer">
                    <img id="mapIcon" alt="map">
                    <p class="left-side-p">123 Main St,India</p>
              </div>
              <div class="callContainer">
                    <img id="callIcon" alt="call">
                    <p class="left-side-p">123-456-7890</p>
              </div>
           </div>
           <div class="bottom-icons">
             <div class="mailContainer">
                    <img id="mailIcon" alt="mail">
                    <p class="left-side-p">info@example.com</p>
             </div>
             <div class="clockContainer">
                    <img id="clockIcon" alt="clock">
                    <p class="left-side-p">Mon - Fri: 9:00 AM - 5:00 PM</p>
             </div>
           </div>
         </div>
      </div>
      <div class="right-side">
        <h1>Your Details</h1>
        <p class="right-side-p">Let us know how to get back to you</p>
        <form action="">
         <div class="form-group">
          <label for="name">Name</label><br>
          <input type="text" id="name" placeholder="Name" required>
         </div>
         <div class="form-group">
          <label for="email">Email</label><br>
          <input type="email" id="email" placeholder="Email" required>
         </div>
         <div class="form-group">
          <label for="message">Message</label><br>
          <input type="text" id="message" placeholder="Message" required>
         </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  `;

  contactDiv.querySelector("#mapIcon").src = mapIcon;
  contactDiv.querySelector("#callIcon").src = callIcon;
  contactDiv.querySelector("#mailIcon").src = mailIcon;
  contactDiv.querySelector("#clockIcon").src = clockIcon;

  content.appendChild(contactDiv);
}
