//Importa React da react per iniziare app React
// import React from 'react'
import React, {useState} from 'react'
//Importa i componenti che vuoi utilizzare
import Post from './FacebookPost'

//JSX

// Utilizzo il componente creato scrivendolo come tag
// Posso riutilizzare il mio componente quante volte voglio solamente richiamandolo 

//Dentro return utlizzo linguaggio JSX che è estensione di JS
// che React legge in HTML (grande potenzialità)



// function App(){
// // CLASS COMPONENT

// // state = {
// // count: 0
// // }

//   // incrementNumber = () => {
//   //   this.setState({
//   //     number: this.state.number + 1
//   //   })
//   // }

// // FUNCTION COMPONENT
// const[count,setCount]=useState(0);

// const incrementNumber = () => {
//   setCount(count + 1)
// }



//   return (
//     <div className='container'>
//       <h3>counter: {count}</h3>
//       <button onClick={incrementNumber}>Aumenta</button>
//     </div>
//   );
// }


function App(){
  const [posts, setPosts] = useState([
    {author: 'Andrea', description:'Sto guardando una lezione React'},
    {author: 'Luca', description:'React lessons'},
    {author: 'Giulia', description:'Props & State'},
    {author: 'Ludovica', description:'Function & Class'},
  ]);


  return (
    <div className='container'>
      {posts.map((post, index) => (
        <Post key={index} author = {post.author} description= {post.description} />
      ))}
    </div>
  );
}




export default App 