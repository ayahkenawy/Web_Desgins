var clients = [{name:"Aya Ahmed" , id:1,balance:2000},{name:"Alaa Ahmed" , id:2,balance:4000}];
function addUser(){
    var newClientId = clients.length +1;
    var client ={name:prompt("Enter Client Name"),id:newClientId, balance:prompt("Enter Client Balance")};
    clients.push(client);
}
addUser();
addUser();
function editClientBalance(){
    var clientIndex= clients.findIndex((client)=>client.id==prompt("Enter Client ID") );
    var newBalance = prompt("Enter New Balance");
    clients[clientIndex].balance=newBalance;
}
editClientBalance();
function deleteUser(){
    var clientIndex= clients.findIndex((client)=>client.id==prompt("Enter Client ID") );
    clients.splice(clientIndex,1)
}
deleteUser();