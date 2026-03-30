import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import pokeApi from "../services/pokeApi";

const Dynamic = () => {
    const [details, setDetails] = useState({})
    const params = useParams();
    console.log(params)
    console.log(params.id)
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        pokeApi.getDetails(id).then(data => setDetails(data))
    }, [])


    
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${id}.png`} alt="" />
            {/* si es una propiedad del objeto como string, number, boolean, objeto */}
            <p>name: {details.name}</p>
            <p>weight: {details.weight} lbs</p>


            {/* si es un array, mapeamos */}
            {details.stats?.map(el => <div>
                <p>{el.stat.name} : {el.base_stat} </p>
            </div>)}
        </div>
    )
}

export default Dynamic