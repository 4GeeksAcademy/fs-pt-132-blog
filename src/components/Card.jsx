import { Link } from "react-router-dom"

const Card = ({pokeName, url}) => {
    
    const pokeId = url.split('/')
    const id = pokeId[pokeId.length-2]




    return (
        <div className="col-sm-12 col-md-6 col-lg-4">

        <div className="card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${id}.png`} alt="" />
            <p className="fs-4 lead">{pokeName}</p>
        </div>
        <Link className="btn btn-primary" to={'/dynamic/'+id}>
            leer mas
        </Link>
        <button>
            fav
        </button>
        </div>
    )
}

export default Card