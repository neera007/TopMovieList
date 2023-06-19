import './App.css'
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json';
function App() {
  //let name="Yahoooooooo..........."
  return (
    // attriburte should be in camel case
    <div className="App">
        <Header/>
        <div className="main">
          {
            movies.map((element)=>{
              return(
                  <Movie  
                  title={element.Title}
                  year={element.Year}
                  image={element.Poster}
                />
              )
            })
          }

            
            
        </div>
    </div>
  );
}

export default App;

