import './style.css';

let menuAppended = false;

function createMenu() {
    const div = document.createElement("div");
    div.setAttribute("id", "menu");

    const titles = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Paul's";

    const menuTitle = document.createElement("h1");
    menuTitle.setAttribute("id", 'title');
    menuTitle.textContent = "MENU";

    titles.appendChild(h1);
    titles.appendChild(menuTitle);

    div.appendChild(titles);
    div.appendChild(dish())
    div.appendChild(dish())
    div.appendChild(dish())

    let center = ''

    for(let x  = 1; x < content.childNodes.length ; x++) {
        let childNode = content.childNodes[x]

        if(childNode.classList == 'main')
        {
           center = childNode 
        }

    }

    center.appendChild(div)

    return center

}



function dish() {
    const div = document.createElement('div')

    const title = document.createElement('h4')
    title.classList.add("dish", "title")

    title.textContent = 'Filet Mignon'

    const desc = document.createElement('p')

    desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi velit, eleifend a efficitur ut, suscipit eu arcu. Pellentesque faucibus magna'


    const price = document.createElement('h4')
    price.textContent = '20$'
    price.classList.add('dish','price')


    const line = document.createElement('hr')
    line.classList.add("dish",'line')

    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(price)
    div.appendChild(line)
    div.classList.add('dish')

    return div
}

export default function loadMenu() {
    const content  = document.getElementById('content')
    // if(menuAppended != true)
    // {
        for(let x  = 1; x < content.childNodes.length ; x++) {
        let childNode = content.childNodes[x]

        if(childNode.classList == 'main')
        {
            let child  = childNode.childNodes
            // childNode.removeChild(child)
            childNode.innerHtml  = ''
            childNode.textContent = ''
            // loadMenu()
            createMenu()
        }

    }

}   
