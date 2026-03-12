
(async () => {
    
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const parentElement = document.querySelector('#pokemon-image')


    const getRandomPokemon = async url => {
        
        const response = await fetch(url)
        const data = await response.json()
        const { name, sprites } = data
        return { name, sprites }

    }

    const randPokemon = await getRandomPokemon(url)
    console.log(randPokemon)

    const renderPokemon = pokemon =>{
        parentElement.innerHTML = ""

        const img = document.createElement('img')
        img.src = pokemon.sprites.front_default// url of the image from the 'front_default' property
        img.alt = pokemon.name// name of the pokemon
        parentElement.append(img)

    }

    renderPokemon(randPokemon)
})()