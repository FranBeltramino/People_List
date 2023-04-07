class Persona{

    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get gname() {return this._name;}
    set sname(name) {this._name = name;}

    get glastname() {return this._lastname;}
    set slastname(lastname) {this._lastname = lastname;}
}


const personas = [
    new Persona("Francisco", "Beltramino"),
    new Persona('Carl', 'Johnson'),
];

function mostrarPersonas(){
    console.log('mostrando');

    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li> ${persona.name} ${persona.lastname} </li>`;

} 

document.getElementById('personaW').innerHTML = texto;
    
}

