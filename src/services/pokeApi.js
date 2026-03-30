const pokeApi = {}
const url = 'https://pokeapi.co/api/v2'


pokeApi.getPokemons = async () => {
    try {
        const resp = await fetch(url + '/pokemon?limit=157&offset=0')
        if (!resp.ok) throw new Error('API not responding')
        const data = await resp.json()
        return data
    } catch (error) {
       console.log(error) 
    }
} 

pokeApi.getDetails = async (pokeId) => {
     try {
        const resp = await fetch(url + '/pokemon/'+pokeId)
        if (!resp.ok) throw new Error('API not responding')
        const data = await resp.json()
        return data
    } catch (error) {
       console.log(error) 
    }
}

export default pokeApi