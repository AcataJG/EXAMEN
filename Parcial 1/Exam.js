const url = "https://jsonplaceholder.typicode.com/todos"
const readline = require('readline');

// 1. Lista de todos los pendientes (solo IDs)
function listapendientes_id (){
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
                console.log("- ID: " + element.id + "\n")
        });
    })
}

// 2. Lista de todos los pendientes (IDs y Titles)
function listapendientes_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
        response.forEach(element => {
            console.log("- ID: " + element.id + "\n- Title: " + element.title + "\n")
        });
    })
}

// 3.Lista de todos los pendientes sin resolver (ID y Title)
function listasinresolver_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
            if(element.completed == false ){
                console.log("- ID: " + element.id + "\n- Title: " + element.title + "\n")
            }
        });
    })
}

// 4.Lista de todos los pendientes resuletos (ID y Title)
function listaresueltos_id_titles (){
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
            if(element.completed == true ){
                console.log("- ID: " + element.id+ "\n- Title: " + element.title + "\n")
            }
        });
    })

}

// 5.Lista de todos los pendientes (IDs y userID)
function listapendientes_id_user(){
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
                console.log("- ID: " + element.id + "\n- UserID: " + element.userId + "\n")
        });
    })
}

// 6.Lista de todos los pendientes resueltos(ID y userID)
function listaresueltos_id_user(){
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
            if(element.completed == true ){
                console.log("- ID: " + element.id + "\n- UserID: " + element.userId + "\n")
            }
        });
    })
}

// 7.Lista de todos los pendientes sin resolver(ID y userID)
 function listasinresolver_id_user () {
    fetch(url).then(response => response.json())
        .then(response =>{
            response.forEach(element => {
            if(element.completed == false ){
                console.log("- ID: " + element.id + "\n- UserID: " + element.userId + "\n")
            }
        });
    })
}

function getInput() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Por favor, seleccione una opcion y presione Enter: ', (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}

var execution = false
async function main (){

    function menu() {
        console.log("\n\t\t\t*** NFL ***")
        console.log("------------------------------------------------------------------------")
        console.log("1. Lista de todos los pendientes (solo IDs)")
        console.log("------------------------------------------------------------------------")
        console.log("2. Lista de todos los pendientes (IDs y Titles)")
        console.log("------------------------------------------------------------------------")
        console.log("3. Lista de todos los pendientes sin resolver (ID y Title)")
        console.log("------------------------------------------------------------------------")
        console.log("4. Lista de todos los pendientes resuletos (ID y Title)")
        console.log("------------------------------------------------------------------------")
        console.log("5. Lista de todos los pendientes (IDs y userID)")
        console.log("------------------------------------------------------------------------")
        console.log("6. Lista de todos los pendientes resuletos (IDs y userID)")
        console.log("------------------------------------------------------------------------")
        console.log("7. Lista de todos los pendientes sin resolver (IDs y userID)")
        console.log("------------------------------------------------------------------------")
    }

    do{
        menu();

        const resp = parseInt(await getInput());
    
        switch(parseInt(resp)){
    
            case 1:
                listapendientes_id()
                execution = true
                break;
            case 2:
                listapendientes_id_titles()
                execution = true
                break;
            case 3:
                listasinresolver_id_titles()
                execution = true
                break;
            case 4:
                listaresueltos_id_titles()
                execution = true
                break;            
            case 5:
                listapendientes_id_user()
                execution = true
                break;
            case 6:
                listaresueltos_id_user()
                execution = true
                break;
            case 7:
                listasinresolver_id_user()
                execution = true
                break;

            default:
                console.log("\nNo se encuentra esa opcion, elija de nuevo\n");
                execution = true
                break;
        }  

        await new Promise(resolve => setTimeout(resolve, 1000));

    } while(execution)
}
main();