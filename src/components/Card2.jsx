
const Card2 =({character})=>{
    return(
        <div className="text-center p-5">
           <h3>{character.name}</h3>
            <img className="img-fluid " src={character.image} alt={character.name}/>
           <h5>{character.origin.name}</h5>
      </div>
    )
  }
  
  export default Card2