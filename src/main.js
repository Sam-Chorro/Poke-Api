const listPokemon = document.querySelector("#list-pokemon");
const btnHeaders = document.querySelectorAll(".btn-header");
let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

let pokemones = [];
const div = document.createElement("div");
    div.classList.add("pokemon");

document.addEventListener('DOMContentLoaded', ()=>{

    /* for (let i = 1; i <= 151; i++) {
        fetch(apiUrl+i)
        .then((response) => response.json()) 
         .then((data) => renderPokeCard(data)); 
        } */
        
        loadPoke();
    btnHeaders;
})

 function loadPoke(){

    for (let i = 1; i <= 151; i++) {
        fetch(apiUrl+i)
        .then((response) => response.json()) 
         .then((data) => {
            pokemones = data;
            return renderPokeCard(pokemones)
        }
        ); 
    }  
}


function renderPokeCard(data){

  

    let types = data.types.map((type) => 
        `<p class="${type.type.name}">${type.type.name}</p>`
    );

    let pokeId = data.id.toString(); 
    if(pokeId.length === 1){
        pokeId = "00" + pokeId;
    }else if(pokeId.length === 2){
        pokeId = "0" + pokeId;
    }

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
                    <p class="id-pokemon-back" id="id-pokemon-back">
                        #${pokeId}
                    </p>
                    <div id="img-pokemon" class="container-img-poke">
                        <img class="img-pokemon"
                        src="${data.sprites.other.home.front_default}" 
                        alt="${data.name}">
                    </div>
                    
                    <div class="info-pokemon">
                        
                            <p class="id-poke">#${pokeId}</p>
                            <h4 class="name-poke">${data.name}</h4>
                                   
                    </div>

                    <div class="type-poke">
                        ${types}
                     </div>

                    <div class="stat-poke" 
                    id="stats">
                        <p class="height-poke">Height: ${data.height} M</p>
                        <p class="weight-poke">Weight: ${data.weight} kg</p>
                    </div>

               `;
  listPokemon.append(div);
    
}



/* function showPokemons(data) {

    let types = data.types.map((type) => 
        `<p class="${type.type.name}">${type.type.name}</p>`
    );
    types = types.join('');
   
    let pokeId = data.id.toString(); 
    if(pokeId.length === 1){
        pokeId = "00" + pokeId;
    }else if(pokeId.length === 2){
        pokeId = "0" + pokeId;
    }

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
                    <p class="id-pokemon-back" id="id-pokemon-back">
                        #${pokeId}
                    </p>
                    <div id="img-pokemon" class="container-img-poke">
                        <img class="img-pokemon"
                        src="${data.sprites.other.home.front_default}" 
                        alt="${data.name}">
                    </div>
                    
                    <div class="info-pokemon">
                        
                            <p class="id-poke">#${pokeId}</p>
                            <h4 class="name-poke">${data.name}</h4>
                                   
                    </div>

                    <div class="type-poke">
                        ${types}
                     </div>

                    <div class="stat-poke" 
                    id="stats">
                        <p class="height-poke">Height: ${data.height} M</p>
                        <p class="weight-poke">Weight: ${data.weight} kg</p>
                    </div>

               `;
  listPokemon.append(div);

} */


btnHeaders.forEach(boton => boton.addEventListener("click", (event)=>{
    const botonId = event.currentTarget.id;

    listPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(apiUrl + i)
          .then((response) => response.json())
          .then(data => {

            if(botonId === "todos"){
                renderPokeCard(data);
            }else {

                
                const tipesPoke = data.types.map(type => type.type.name);
                if(tipesPoke.some(tipo => tipo.includes(botonId))){
                    renderPokeCard(data);
                }
            }
          });
      }

}))

