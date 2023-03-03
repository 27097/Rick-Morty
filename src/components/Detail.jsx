import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail = ()=>{
    const {detailId} = useParams()
   
    
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return(
        <div>
            <button>
         <Link to='/home' > Home </Link>
            </button>

        <h1> {character?.name} </h1>
        <h1> {character?.status} </h1>
        <h1> {character?.specie} </h1>
        <h1> {character?.gender} </h1>
        <h1> {character?.origin?.name} </h1>
        <img src={character.image} alt={character.name} />
        </div>
    )
}


export default Detail;