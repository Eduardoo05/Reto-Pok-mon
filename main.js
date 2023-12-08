document.querySelector('#app').innerHTML = `
<h1> hola </h1>

`
const getCharacters = async () => {
  const response = await fetch('https://pokeapi.co')
  const data = await response.json()
  console.log(datos.results)

  data.results.map((character) => {
    console.log(character.name)
    console.log(character.status)
  })
}

getCharacters()

