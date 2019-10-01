import React from 'react';
import '../style.css';
//import '../bootstrap.min.css';

class CardRed extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, name: "", tel: 0, mail: "", faaa: true, red: 0};    
  
//this.addNew = this.addNew.bind(this);
 
this.handleChange1 = this.handleChange1.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
this.handleChange3 = this.handleChange3.bind(this);
this.handleChange4 = this.handleChange4.bind(this);
  }

handleChange1(event) {
    this.setState({name: event.target.value});
   }

handleChange2(event) {
    this.setState({tel: event.target.value});
   }

handleChange3(event) {
    this.setState({mail: event.target.value});
   }

handleChange4(event) {

    this.setState({faaa: event.target.checked});
    //console.log(this.state.faaa);
   }


  render() {
//this.state.faaa=this.props.fav;

let className = 'addf';
  if (this.props.fav=="Избранный") {
    className += ' dis';
  }

// var cur1 = JSON.parse(localStorage.getItem(d));
// const xx = cur.map(cur => <Card key={cur.id} id={cur.id} name={cur.name} tel={cur.tel} mail={cur.mail} fav={cur.fav} redData={this.redData} getKey={this.getKey}/>);
// onChange={this.handleChange1}

// let n;
// if (this.props.f==1) 
// n="checked"
// if (this.props.f==0)
// n="";

// var opts = {};
// if (this.props.f==1)
// opts['checked'] = 'checked';
// if (this.props.f==0)
// opts['checked'] = '';

// let n={};
// if (this.props.f==true) 
// n="checked"
// if (this.props.f==false)
// n="";
//}


//<button onClick={() => {this.props.saveData(this.state.name, this.state.tel, this.state.mail, this.state.faaa, this.props.idd)}}>SAVE</button>

    return (


<div className="bigcard">
<img src="/src/img/person-male.png" width="41%"/>
<input type="text" placeholder={this.props.name}  name="val1" onChange={this.handleChange1}/>
<input type="text" placeholder={this.props.tel}  name="val2" onChange={this.handleChange2}/>
<input type="text" placeholder={this.props.mail}  name="val3" onChange={this.handleChange3} />
<label>Add to favorite {this.props.idd}</label>
<input type="checkbox" name="check1" checked={this.state.faaa} onChange={this.handleChange4}/>

<button onClick={() => {this.props.saveData(this.state.name, this.state.tel, this.state.mail, this.state.faaa, this.props.idd)}}>SAVE</button>
<button onClick={() => {this.props.back(this.state.red)}}>BACK</button>


</div>  
    )

    }    
  }

export default CardRed;