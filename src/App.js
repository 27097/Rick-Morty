import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import {useState, useEffect} from 'react'
import { Routes, Route,useLocation,useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'
//para el formulario, hook useLocation





function App () {

 const [characters, setCharacters] = useState([])
 
 const navigate = useNavigate();
 const [access, setAccess]=useState(false)

 
 
 let username = 'code@gmail.com';
 
 let password= 'henry';
 
 
 
 const login =(userData)=>{
    if(userData.username===username &&  userData.password===password){
       setAccess(true)
       navigate('/home')
      }
   }
   useEffect(() => {
     !access && navigate('/');
  }, [access]);
   
   const location = useLocation();



 const onSearch = (characters)=>{
         fetch(`https://rickandmortyapi.com/api/character/${characters}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}    
 
const onClose = (id)=>{
   setCharacters(
    
    characters.filter( characters => characters.id !== id )
   )

}
  



  return (
    
     <div  className="p-3 mb-2 bg-body-tertiary">
       <h1 className="text-center display-1 py-4">Rick and Morty</h1>
     {location.pathname === '/'? <Form login={login} />: <Nav onSearch={onSearch} />}
    
    <Routes>

        
      
        <Route path='/home' element={<Cards onClose ={onClose} characters={characters} />}  />
      
        <Route path ='/about' element={<About/>} />

        <Route path ='/detail/:detailId' element={ <Detail /> } />

        
           
      
    </Routes>
      
      
      


    </div>


  )
}

export default App
