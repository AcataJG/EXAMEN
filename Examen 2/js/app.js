if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

const url = "https://jsonplaceholder.typicode.com/todos"
const jsonDataElement = document.querySelector('.card-text');

function displayData(dataToShow) {
    jsonDataElement.textContent = dataToShow;
}

// 1. Lista de todos los pendientes (solo IDs)
function listapendientes_id (){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes (solo IDs):\n";
            response.forEach(element => {
                dataToShow += "- ID: " + element.id + "\n";
        });
        displayData(dataToShow);
    })
}

// 2. Lista de todos los pendientes (IDs y Titles)
function listapendientes_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes (IDs y Titles):\n";
        response.forEach(element => {
            dataToShow += "- ID: " + element.id + "\n- Title: " + element.title + "\n";
        });
        displayData(dataToShow);
    })
}

// 3.Lista de todos los pendientes sin resolver (ID y Title)
function listasinresolver_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes sin resolver (ID y Title):\n";
            response.forEach(element => {
            if(element.completed == false ){
                dataToShow += "- ID: " + element.id + "\n- Title: " + element.title + "\n";
            }
        });
        displayData(dataToShow);
    })
}

// 4.Lista de todos los pendientes resuletos (ID y Title)
function listaresueltos_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes resuletos (ID y Title):\n";
            response.forEach(element => {
            if(element.completed == true ){
                dataToShow += "- ID: " + element.id+ "\n- Title: " + element.title + "\n";
            }
        });
        displayData(dataToShow);
    })

}

// 5.Lista de todos los pendientes (IDs y userID)
function listapendientes_id_user(){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes (IDs y userID):\n";
            response.forEach(element => {
                dataToShow += "- ID: " + element.id + "\n- UserID: " + element.userId + "\n";
        });
        displayData(dataToShow);
    })
}

// 6.Lista de todos los pendientes resueltos(ID y userID)
function listaresueltos_id_user(){
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes resueltos(ID y userID):\n";
            response.forEach(element => {
            if(element.completed == true ){
                dataToShow += "- ID: " + element.id + "\n- UserID: " + element.userId + "\n";
            }
        });
        displayData(dataToShow);
    })
}

// 7.Lista de todos los pendientes sin resolver(ID y userID)
 function listasinresolver_id_user () {
    fetch(url).then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes sin resolver(ID y userID):\n";
            response.forEach(element => {
            if(element.completed == false ){
                dataToShow += "- ID: " + element.id + "\n- UserID: " + element.userId + "\n";
            }
        });
        displayData(dataToShow);
    })
}

document.getElementById('1listapendientes_id').addEventListener('click', listapendientes_id);
document.getElementById('2listapendientes_id_titles').addEventListener('click', listapendientes_id_titles);
document.getElementById('3listasinresolver_id_titles').addEventListener('click', listasinresolver_id_titles);
document.getElementById('4listaresueltos_id_titles').addEventListener('click', listaresueltos_id_titles);
document.getElementById('5listapendientes_id_user').addEventListener('click', listapendientes_id_user);
document.getElementById('6listaresueltos_id_user').addEventListener('click', listaresueltos_id_user);
document.getElementById('7listasinresolver_id_user').addEventListener('click', listasinresolver_id_user);