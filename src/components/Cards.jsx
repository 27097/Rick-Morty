import Card from './Card';

export default function Cards({characters, onClose}) {
   // const { characters } = props;
   // { id, name, species, gender, image }

   
   return(
      <div>
         {
            characters.map( ({ id, name, gender,species,image })=>{
               return <Card
               key={id}
               name={name}
               gender = {gender}
               species = {species}
               image = {image}
               id={id}
               onClose={()=> onClose(id)
               }
               />
            } )
         }
      </div>
      // <div>
      //    {
      //       characters.map( (characters)=>{
      //          return <Card
      //          key={characters.id}
      //          name={characters.name}
      //          gender = {characters.gender}
      //          species = {characters.species}
      //          image = {characters.image}
      //          onClose={() => window.alert('Emulamos que se cierra la card')}
      //          />
      //       } )
      //    }
      // </div>
   ) 

}
   
   
   
   
   
