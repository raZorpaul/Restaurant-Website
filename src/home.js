import './style.css';

let homeAppended = false;


function mainContent() {
    const content = document.getElementById('content')
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


  let center = ''
 
          for(let x  = 1; x < content.childNodes.length ; x++) {
                let childNode = content.childNodes[x]

                if(childNode.classList == 'main')
                {
                    center = childNode
                    console.log(childNode)
                }

          }


          center.appendChild(main)
  return center;
}


export default function loadHome() {
    const content = document.getElementById("content");

   

           for(let x  = 1; x < content.childNodes.length ; x++) {
        let childNode = content.childNodes[x]

        if(childNode.classList == 'main')
        {
            let child  = childNode.childNodes
            // childNode.removeChild(child)
            childNode.innerHtml  = ''
            childNode.textContent = ''
            mainContent()
            console.log("yes")
        }

    }

 
}
