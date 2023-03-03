import { useState, useEffect } from "react";
import Card2 from "./Card2";



const NavPage = (props)=>{
    return (
      <header className="d-flex justify-content-between align-items-center" >
        <button type="button" class="btn btn-success"  onClick={()=>props.setPage(props.page-1)}>
      {props.page-1}
        </button>
        <button type="button" class="btn btn-success" 
       onClick={()=>props.setPage(props.page+1)} >{props.page + 1}</button>
      </header>
       )
    }
       
  
  



const About = () =>{

  const [characters, setCharacters]=useState([])
  const [page, setPage] = useState(1)

  useEffect( ()=>{
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
    //   setLoading(false)
      setCharacters(data.results);
    }
    fetchData()
 
   },[page] )

    return(
        <div className="">

        <div className="container"  >
              <NavPage page={page} setPage={setPage} />
              <div class="text-center" >
                   <h1 class="text-center display-1 py-1">All Card 🦍</h1>
              </div>
      


       <div className="row" > 
      
                     {characters.map(character =>{
                              return(
                               <div className="col-md-4" key={character.id} >
                              <Card2 key={character.id} character={character} id={character.id} />
                               </div>   
          
                            )
                        }) 
                     }
      </div>
       
        </div>

        </div>
    )
}


export default About;