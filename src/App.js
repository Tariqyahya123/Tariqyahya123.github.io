import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';



class Fetch extends React.Component{


  constructor(props) {
    super(props);
  

    this.fetchQuotes= this.fetchQuotes.bind(this);
    this.state = {
      quotes :   [],
      author : ''
   
    }
  }

  componentDidMount() {
   
  fetch('random' ,{
    method: 'GET',
   


  }).then(response =>response.json()).then(data =>  this.setState(

{quotes : [data[0]['q']],
author : [data[0]['a']]
}

  ))
  }



fetchQuotes() {

  console.log(this.state.quotes)
  
 
  fetch('random' ,{
    method: 'GET',
   


  }).then(response =>response.json()).then(data =>  this.setState(

{quotes : [data[0]['q']],
author : [data[0]['a']]
}

  ))
 
}


render() {
 
 
 return(
  
<>
  <div id="text">
     {this.state.quotes[0]}
  </div>

<div id="author">
  
{this.state.author}

</div>

<button onClick={this.fetchQuotes} id="new-quote">New Quote</button>

<a id="tweet-quote">Tweet Quote!</a>
</>


 )
}

}

function App() {
  return (

    <div id="quote-box">
     
      <Fetch />
       
       
      
    </div>
  );
}

export default App;


