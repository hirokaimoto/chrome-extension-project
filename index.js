
let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");


inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
    


})

function renderLeads () {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href = '" + myLeads[i] + "' target = '_blank'</a>" + myLeads[i] + "</li>";
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        
        `;
        console.log(listItems);
    
    }
    ulEl.innerHTML = listItems;
}
