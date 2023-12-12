document.querySelector('#app').innerHTML = `

<form action="formulario">
<div class="">
  <input class="input_buscar" id="input_buscar" type="text" placeholder="Pokename">
  <input class="input_botton" id="input_botton" type="button" style="height: 20px; width: 50px;" value="Botón">
</div>
</form>

`
const getCharacters = async (nombre) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
  const data = await response.json()
  console.log(data)

}


const input_buscar = document.getElementById('input_buscar')
const input_botton = document.getElementById('input_botton')

input_buscar.addEventListener('change', (event)=> {
  event.preventDefault()
  let nombre_pokemon = input_buscar.value
  console.log(input_buscar.value)
  getCharacters(nombre_pokemon)
})

