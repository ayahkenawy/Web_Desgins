// var clients = [{name:"Aya Ahmed" , id:1,balance:2000},{name:"Alaa Ahmed" , id:2,balance:4000}];
// function addUser(){
//     var newClientId = clients.length +1;
//     var client ={name:prompt("Enter Client Name"),id:newClientId, balance:prompt("Enter Client Balance")};
//     clients.push(client);
// }
// addUser();
// addUser();
// function editClientBalance(){
//     var clientIndex= clients.findIndex((client)=>client.id==prompt("Enter Client ID") );
//     var newBalance = prompt("Enter New Balance");
//     clients[clientIndex].balance=newBalance;
// }
// editClientBalance();
// function deleteUser(){
//     var clientIndex= clients.findIndex((client)=>client.id==prompt("Enter Client ID") );
//     clients.splice(clientIndex,1)
// }
// deleteUser();
var clients =[]
var form = document.getElementById("clientForm")
var tbody = document.getElementById("clientDetails")
form.addEventListener('submit',function(event){
event.preventDefault();
addClient(event.target.elements.clientName.value,event.target.elements.clientBalance.value)
showClients()
})
// Add Clients
function addClient(clientName,balance){
    var newClientId = clients.length +1;
    var client ={name:clientName,id:newClientId, balance:balance};
    clients.push(client);
}
// Show Clients In Table
function showClients(){
    tbody.innerHTML=""
    clients.forEach((client,i) => {
        var tr = document.createElement('tr')
        var tdID = document.createElement('td')
        var tdName = document.createElement('td')
        var tdBalance = document.createElement('td')
        var tdButton = document.createElement('td')
        var deletebutton = document.createElement('button')
        tdID.innerHTML=client.id
        tdName.innerHTML=client.name
        tdBalance.innerHTML=client.balance
        deletebutton.innerHTML="Remove Client"
        deletebutton.classList.add('btn' , 'btn-danger')
        tdButton.appendChild(deletebutton)
        tr.appendChild(tdID)
        tr.appendChild(tdName)
        tr.appendChild(tdBalance)
        tr.appendChild(tdButton)
        tbody.appendChild(tr)
        deletebutton.addEventListener('click',function(){
            deleteClient(i)
        })
    });
}
//Delete Client
function deleteClient(clientIndex){
    clients.splice(clientIndex,1)
    showClients()
}