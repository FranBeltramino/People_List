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
        texto += `<li> ${persona.gname} ${persona.glastname} </li>`;

} 

document.getElementById('personaW').innerHTML = texto;
    
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
}