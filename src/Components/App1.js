import React from 'react';
import '../style.css'
import '../style1.css'
import '../style2.css'

class App1 extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {val1: 0, val2: 0};
    
this.handleChange1 = this.handleChange1.bind(this);
this.handleChange2 = this.handleChange2.bind(this);

this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  handleChange1(event) {
    this.setState({val1: event.target.value});
   
  }

handleChange2(event) {  
    this.setState({val2: event.target.value});
  }



handleSubmit1(event) {
//return(<p>{this.state.value1 + this.state.value2}</p>);
alert(parseInt(this.state.val1) + parseInt(this.state.val2));

    event.preventDefault();
  }


  render() {


 const users = ['Вася', 'Петя', 'Максим', 'Егор'];
  const items = users.map((user) => <li>{user}</li>);
//  console.log(items);   
    

    return (

<div>

<ul>{items}</ul>

 <h1>Hello {this.props.namee}</h1>
 <h1>Hello {2+2}</h1>
<h1>Hello {this.state.val1 + " + " + this.state.val2 + " = " + (parseInt(this.state.val1) + parseInt(this.state.val2))}</h1>
<h1>Hello {this.state.val1 + " - " + this.state.val2 + " = " + (parseInt(this.state.val1) - parseInt(this.state.val2))}</h1>
<h1>Hello {this.state.val1 + " х " + this.state.val2 + " = " + (parseInt(this.state.val1) * parseInt(this.state.val2))}</h1>
<h1>Hello {this.state.val1 + " / " + this.state.val2 + " = " + (parseInt(this.state.val1) / parseInt(this.state.val2))}</h1>

        <label>
          Num1:
          <input type="text" name="val1" value={this.state.val1}  onChange={this.handleChange1} />
        </label>

		<label>
          Num2:
          <input type="text" name="val2" value={this.state.val2}  onChange={this.handleChange2} />
        </label>

<label name="res"></label>

        <button onClick={this.handleSubmit1}>Result</button>


</div>  
    )

    }    
  }

export default App1;