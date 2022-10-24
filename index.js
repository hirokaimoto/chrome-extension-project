
let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabs = [
    {url: "www.google.com"}
];
//Verifica se existem dados salvos no localstorage e apresenta-os
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

//Salvar a URL

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
    
})

//Salva o input no formato de link
function render (leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href = '" + myLeads[i] + "' target = '_blank'</a>" + myLeads[i] + "</li>";
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        
        `;
    
    
    }
    ulEl.innerHTML = listItems;
}

//Permite salvar o input pressionando Enter
inputEl.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        inputBtn.click();
    }
})

//Recebe o evento de duplo clique no botao delete all e limpa o localstorage, array myLeads e o DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);

})

//Recebe o evento de clique do elemento de input, salva ele no array e no localstorage
inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    
})


