import { Link, useParams } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import pokeApi from "../services/pokeApi.js";
import Card from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

useEffect(()=>{
	pokeApi.getPokemons().then(data=> dispatch({
		type: "capturePokemons",
		payload: {
			data: data.results
		}
	}))
},[])

	return (
		<div className="text-center mt-5">
			<div className="row">

			{store.pokemons?.map((el,i)=><Card key={i} pokeName={el.name} url={el.url} /> )}
			</div>

		</div>
	);
}; 