import './style.css'




function createContact() {
    const section = document.createElement("section");
    section.setAttribute("id", "contact");


    const h1 = document.createElement("h1");
    h1.textContent = "Contact us";


    const div = document.createElement('div')

    const no  = document.createElement('p')

    no.textContent = '+1 792 232 423'

    const street = document.createElement('p')

    street.textContent = '22, totally real street, totally real city, totally real country, 78520'

    const email = document.createElement('p')

    email.textContent = 'totallyrealemail@email.com'



    div.appendChild(no)
    div.appendChild(street)
    div.appendChild(email)

    const img = document.createElement('img')
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Beef_fillet_steak_with_mushrooms.jpg/800px-Beef_fillet_steak_with_mushrooms.jpg'



    section.appendChild(h1)
    section.appendChild(div)
    section.appendChild(img)
    let center = ''

    for(let x  = 1; x < content.childNodes.length ; x++) {
        let childNode = content.childNodes[x]

        if(childNode.classList == 'main')
        {
           center = childNode 
        }

    }

    center.appendChild(section)

    return center

}

export default function loadContact() {
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
            createContact()
        }

    }

}   
