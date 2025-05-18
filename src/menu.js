import './menu.css';
import indian from './images/indian.jpeg';
import italian from './images/italian.jpeg';
import japanese from './images/japanese.jpeg';
import mexican from './images/mexican.jpeg';
import chinese from './images/chinese.jpeg';        
import thai from './images/thai.jpeg';
import spanish from './images/spanish.jpeg';
import french from './images/french.jpeg';
import american from './images/american.jpeg';
import greece from './images/greece.jpeg';





export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <div class="menu-items">
         <div class="top-row">
              <div class="dish" >
                 <div class = "foodContainer" id="dish-1"></div>
                 <h3>Indian</h3>
                 <button class="order-button">Order Now</button>

              </div>
              <div class="dish" >
                 <div class = "foodContainer" id="dish-2"></div>
                 <h3>Italian</h3>
                 <button class="order-button">Order Now</button>

              </div>
             <div class="dish" >
                 <div class = "foodContainer" id="dish-3"></div>
                  <h3>Japanese</h3>
                  <button class="order-button">Order Now</button>

              </div>
             <div class="dish" >
                 <div class = "foodContainer" id="dish-7"></div>
                  <h3>Spanish</h3>
                  <button class="order-button">Order Now</button>

              </div>
             <div class="dish" >
                 <div class = "foodContainer" id="dish-10"></div>
                  <h3>Greece</h3>
                  <button class="order-button">Order Now</button>

              </div>
         </div>
         <div class="last-row">
             
                <div class="dish" >
                  <div class = "foodContainer" id="dish-4"></div>
                   <h3>Mexican</h3>
                   <button class="order-button">Order Now</button>

                </div>
                <div class="dish" >
                  <div class = "foodContainer" id="dish-5"></div>
                   <h3>Chinese</h3>
                   <button class="order-button">Order Now</button>

                </div>
                <div class="dish" >
                  <div class = "foodContainer" id="dish-6"></div>
                   <h3>Thai</h3>
                   <button class="order-button">Order Now</button>

                </div>
                <div class="dish" >
                  <div class = "foodContainer" id="dish-8"></div>
                   <h3>French</h3>
                   <button class="order-button">Order Now</button>

                </div>
                <div class="dish" >
                  <div class = "foodContainer" id="dish-9"></div>
                   <h3>American</h3>
                     <button class="order-button">Order Now</button>

                </div>
             
         </div>
      </div>
    `;
    content.appendChild(menuDiv);






   const dishImages = [
        { id: 'dish-1', src: indian , alt: 'indian'},
        { id: 'dish-2', src: italian , alt: 'italian'},
        { id: 'dish-3', src: japanese , alt: 'japanese'},
        { id: 'dish-4', src: mexican , alt: 'mexican'},
        { id: 'dish-5', src: chinese , alt: 'chinese'},
        { id: 'dish-6', src: thai , alt: 'thai'},
        { id: 'dish-7', src: spanish , alt: 'spanish'},
        { id: 'dish-8', src: french , alt: 'french'},
        { id: 'dish-9', src: american , alt: 'american'},
        { id: 'dish-10', src: greece , alt: 'greece'},
   ];


   dishImages.forEach(dish =>{
      const dishContainer = document.querySelector(`#${dish.id}`);
      const foodImg = document.createElement('img');
      foodImg.src = dish.src;
      foodImg.alt = dish.alt;
      foodImg.classList.add('foodImg');
      dishContainer.appendChild(foodImg);
   })

   //  const IndianImg = document.createElement('img');
   //  IndianImg.src = indian;
   //  IndianImg.alt = "indian";
   //  IndianImg.classList.add('foodImg');
   //  document.querySelector('#dish-1').appendChild(IndianImg);




  }


  