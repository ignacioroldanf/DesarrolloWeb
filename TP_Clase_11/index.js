
const charactersEl = document.getElementById('characters');
const filtroNombre = document.getElementById('filtroNombre');
const filtroEstado = document.getElementById('filtroEstado');

//llamada a la api

async function getCharacters(name, status) {

    let url = 'https://rickandmortyapi.com/api/character/';
    
    if (name || status){
        url += '?';
        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url += `status=${status}`;
        }
    }


    const response = await fetch(url);
    const data = await response.json(); 
    
    console.log(data.results)
    return data.results;

}

getCharacters();



async function displayCharacters(name, status) {

    //obtener personajes filtrados
    const characters = await getCharacters(name, status)

    charactersEl.innerHTML = '';

    //renderias los personajes
    for( let character of characters){
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src="${character.image}" />
            <h2> ${character.name} </h2>
            <p> Status: ${character.status} </p>
            <p> Especie: ${character.species} </p>
        `;

        charactersEl.appendChild(card);

    }

    
    
}

displayCharacters();

filtroNombre.addEventListener('input', () => {
    displayCharacters(filtroNombre.value, filtroEstado.value );
});

filtroEstado.addEventListener('change', () => {
    displayCharacters(filtroNombre.value, filtroEstado.value );
});