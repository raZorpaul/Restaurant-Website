import './style.css';
import loadMenu from './menu.js';
import loadHome from './home.js'
import loadContact from './contact.js';

let menuAppended = false;
let homeAppend = false;

function addHeader() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  const nav = createNav();
  header.appendChild(nav);
  return header;
}

function createNav() {
  const div = document.createElement("div");
  div.setAttribute("id", "nav");

  const homebtn = navbutton('Home', true);
  const menubtn = navbutton('Menu');
  const contactbtn = navbutton('Contact');

  // Add event listeners to the buttons
  homebtn.addEventListener('click', () => toggleActive(homebtn));
  menubtn.addEventListener('click', () => { toggleActive(menubtn); loadMenu(); });
  contactbtn.addEventListener('click', () => toggleActive(contactbtn));

  div.appendChild(homebtn);
  div.appendChild(menubtn);
  div.appendChild(contactbtn);

  return div;
}

function navbutton(name, isActive = false) {
  const button = document.createElement('button');
  button.textContent = name;
  button.classList.add('nav-button');
  
  // Add 'active' class if isActive is true
  if (isActive) {
    button.classList.add('active');
  }

  return button;
}

function toggleActive(clickedButton) {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  clickedButton.classList.add('active');

  switch (clickedButton.textContent) {
    case 'Home':
      loadHome()
      break;
    case 'Menu':
      loadMenu()
      break;
    case 'Contact':
      // console.log('Contact button clicked');
      loadContact()
      break;
    default:
      break;
  }
}

function mainContent() {
  const main = document.createElement("section");
  main.setAttribute("id", "main-content");

  const h1 = document.createElement('h1');
  h1.setAttribute("id", "owner");
  h1.textContent = "Paul's";

  const h4 = document.createElement("h4");
  h4.textContent = " Delivering the best Steak in the Country!";

  const h5 = document.createElement("h5");
  h5.textContent = "Opens only on Wednesday @22:00pm ONLY!";

  main.appendChild(h1);
  main.appendChild(h4);
  main.appendChild(h5);

  return main;
}

function footer() {
  const footer = document.createElement('footer');

  const h4 = document.createElement('h4');
  h4.textContent = "made  by  ";
  h4.setAttribute("id", "link");
  const a = document.createElement('a');
  a.innerHTML = "Joshua";
  a.href = "https://github.com/raZorpaul";
  a.setAttribute("id", "footer a");
  h4.appendChild(a);

  const h3 = document.createElement('h3')
  const b = new Date().getFullYear()
  h3.innerHTML = 'Copyright &#xa9; ' + b; 
  // h3.setAttribute("id","link")


  footer.setAttribute("id", "footer");
  footer.appendChild(h4);
  footer.appendChild(h3)
  return footer;
}

export default function initializeWebsite() {
  const content = document.getElementById("content");
  const main = document.createElement('div')
  main.classList.add('main')

  content.appendChild(addHeader());
  main.appendChild(mainContent());
  content.appendChild(main)
  content.appendChild(footer());
  return content;
}
