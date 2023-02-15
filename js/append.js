// 1. Where to add.
const placesList = document.getElementById(`places-list`);

// 2. What to add.
const li = document.createElement(`li`);
li.innerText = `pahartoli bon`;

// 3. add the child.
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById(`main-container`);

const section = document.createElement(`section`);

// 2. what to add
const h1 = document.createElement(`h1`);
h1.innerText = `My food list`;
section.appendChild(h1);

const ul = document.createElement(`ul`);
section.appendChild(ul);
const li1 = document.createElement(`li`);
li1.innerText = `Biriyani`;
ul.appendChild(li1);

const li2 = document.createElement(`li`);
li2.innerText = `Borhani`;
ul.appendChild(li2);

const li3 = document.createElement(`li`);
li3.innerText = `Salad`;
ul.appendChild(li3);

mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement(`section`);
sectionDress.innerHTML = `
<h1>My Dress List</h1>
<ul>
      <li>Shirt</li>
      <li>Pant</li>
      <li>Shoe</li>
</ul>`;

mainContainer.appendChild(sectionDress);