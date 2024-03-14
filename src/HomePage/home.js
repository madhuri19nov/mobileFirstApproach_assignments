import react , {useEffect} from "react"


export default function Home (){
    const [isLoggedIn, setIsLoggedIn] = useEffect();
    const[jokes, setJokes] = useEffect();
    
    useEffect(() => {
        isLoggedIn(true);
        fetch('<https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10>')
          .then(response => response.json())
          .then(json => {setJokes(json);
            console.log(jokes)                        
          });
      }, []);

      return (
        <div className="App">
          {isLoggedIn ? (
            <>
              <h1>Jokes</h1>
              <table border={1}>
    
                {jokes.map(joke => (
                  <tr key={jokes.joke}> </tr>
                ))}
              </table>
            </>
          ):"Login to access"}
        </div>
      )
     
}






  