import { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg'; 
import MovieCard from './MovieCard';
//1. props
// const Login = (props) => {
//   return (
//     <>
//       <h1>Name : {props.name}</h1>
//       <h1>Last Name : {props.lastName}</h1>
//       <h1>Age : {props.age}</h1>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//         <Login name='John' lastName='Kumar' age={ 3 * 10} />
//         <Login name="Priya" lastName="Dharshini" age={2 * 10}/>
//     </div>
//   );
// }

//2.useEffect & useState
// const App = () => {
//   let [counter, setCounter] = useState(0);

//   useEffect(()=>{
//     alert("Value has been updated : " + counter)
//   }, [counter])

//   return (
//     <div className='App'>
//         <button onClick={ ()=> setCounter( (prevCount) => prevCount - 1 ) }>-</button>
//         <h1>{counter}</h1>
//         <button onClick={ ()=> setCounter( (prevCount) => prevCount + 1 ) }>+</button>
//     </div>
//   ) 
// }

//key 448c9942

const API_URL = "https://www.omdbapi.com?apikey=448c9942";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(``);

  useEffect(()=> {
    searchMovies(`Spiderman`)
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch( `${API_URL}&s=${title}`);
    const data = await response.json();
  
    setMovies(data.Search)
    console.log(data)
  }

  return (
    <div className='app'>
        <h1> MovieLand </h1>

        <div className='search'>
          <input placeholder='Search for movies' value={searchTerm} onChange={ (event) => setSearchTerm(event.target.value)}/>
          <img src={SearchIcon} className='SeachIcon' alt='search' onClick={ ()=> searchMovies(searchTerm) }/>
        </div>
        
            {movies.length > 0 ? (
              <div className='container'>
                {movies.map((movie) => (                 
                    <MovieCard movie={movie} />
                  ))}
              </div>
            ) : (
              <div className='empty'>
                  <h2>No movies found</h2>
              </div>
            )
          }
       
    </div>
   
  )
}
export default App;
