import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import About from './About'


const Nav = ( {onSearch} )=>{
    return(
        <nav className="d-flex justify-content-between align-items-center">
          <button>
            <Link to='/'  >LogOut</Link>
          </button>
          <button>
          <Link to='/about' > All Card </Link>
          </button>
          <button>
          <Link to='/home' > Search </Link>
            </button> 
          <SearchBar onSearch={onSearch}/>
        </nav>        
    )
}

export default Nav