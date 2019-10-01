import React from 'react';
import '../style.css';
import '../style1.css';
import '../style2.css';

// import imag from "../Components/img/a.jpg";
// import '../js.js'

class App extends React.Component{
    
constructor(){  
        super();  
        this.state = {  
            message: "my friend (from state)!"  
        };  
        this.updateMessage = this.updateMessage.bind(this);  
    }

    updateMessage() {  
        this.setState({  
            message: "my friend (from changed state)!"  
        });  
    }

    render() {  
         return (  
           <div>  
             <h1>Hello {this.state.message}!</h1>  
             <img src="../src/img/a.jpg" />
             <button onClick={this.updateMessage}>Click me!</button>  
           </div>     
        )  
    }  
}
export default App;