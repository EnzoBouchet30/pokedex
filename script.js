const search = document.getElementById('search')
const pokemonName = document.getElementById('pokemonName')
const pokemon = document.getElementById('name')
const picture = document.getElementById('picture')
search.addEventListener('click', function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
    .then(response => response.json())
    .then(data=> {
        pokemon.textContent = data.name
        picture.src = data.sprites.front_default
    })
    .catch(error=>{
        pokemon.textContent = "Pokémon introuvable"
        picture.src = ""
    })
})