import React from 'react';
import '../style.css';

class Form extends React.Component {
  
 constructor() {
    super();
    this.state = {id: 0, mas: [], all: 0, fa: 1, val1:"", val2:"", val3:"", but:"true"};    //masf: [], 
  this.addNew = this.addNew.bind(this);
  
this.Change1 = this.Change1.bind(this);
this.Change2 = this.Change2.bind(this);
this.Change3 = this.Change3.bind(this);

  }




Change1(event) {

const re = /^[A-Za-zА-Яа-яЁё]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val1: event.target.value}); 


if(this.state.val1=="")
this.setState({but:"false"});
else
this.setState({but:"true"});


  }

Change2(event) {

const re = /^[0-9\b.+]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val2: event.target.value}); 

  }

Change3(event) {

const re = /^[A-Za-zА-Яа-яЁё@.]+$/;
if (event.target.value === '' || re.test(event.target.value)) 
this.setState({val3: event.target.value}); 

  }




addNew(event)
{

let favv = () =>
{
let c=document.getElementById("fav").checked;
if(c==true)
c="Избранный";
else
c="";
return c;
}

function Contakt(id, name, tel, mail, fav) {
  this.id = id;
  this.name = name;//document.getElementById("name").value;
  this.tel = tel;//document.getElementById("tel").value;
  this.mail = mail;//document.getElementById("mail").value;
  this.fav = fav;//favv();
  
}

let cont = new Contakt(this.state.id, document.getElementById("name").value, document.getElementById("tel").value, document.getElementById("mail").value, favv());

this.setState({ id: this.state.id + 1 });
//this.setState({ mas: this.state.mas.concat([1,2]) });
//this.setState({ mas: this.state.mas.concat([this.state.mas*2]) });
//this.setState({ mas: this.state.mas.concat({"id": this.state.id, "tel": "bbb"}) });
//console.log(this.state.mas);



this.setState({ mas: this.state.mas.concat(cont) });
let z = JSON.stringify(this.state.mas);
localStorage.setItem('alll', z); 


// if (localStorage.getItem("alll") === null || localStorage.getItem("alll").length == 0) 
// {
//  let z = JSON.stringify(this.state.mas);
//  localStorage.setItem('alll', z);  
// }

// if (localStorage.getItem("alll") != null || localStorage.getItem("alll").length != 0)
// {
//  let z1 = JSON.parse(localStorage.getItem('alll'));
//  let z2 = z1.concat(this.state.mas);
//  let z3 = JSON.stringify(z2);
//  localStorage.setItem('alll', z3); 
// }


// if (cont.fav=="Избранный") 
// {
// this.setState({ masf: this.state.masf.concat(cont)});
// let z1 = JSON.stringify(this.state.masf);
// localStorage.setItem('allf', z1);
// }




let parent = document.getElementById("bass");
let a = document.createElement('div');
a.className="child";
let p1 = document.createElement('div');
p1.innerHTML=cont.name;//document.getElementById("name").value;
let p2 = document.createElement('div');
p2.innerHTML=cont.tel;//document.getElementById("tel").value;
let p3 = document.createElement('div');
p3.innerHTML=cont.mail;//document.getElementById("mail").value;
let p4 = document.createElement('div');
p4.innerHTML=favv();//fav;
let b1 = document.createElement('button');
if (favv()=="Избранный") {b1.style.display="none";}
else b1.style.display="block";
b1.innerHTML="Добавить в избранные";
let b2 = document.createElement('button');
b2.style.display="block";
b2.innerHTML="Редактировать";
let b3 = document.createElement('button');
b3.style.display="block";
b3.innerHTML="Удалить";

a.appendChild(p1);
a.appendChild(p2);
a.appendChild(p3);
a.appendChild(p4);

a.appendChild(b1);
a.appendChild(b2);
a.appendChild(b3);

parent.appendChild(a);


}


  render() {



    return (

<div className="form">
<table><tbody>
<tr><td>Имя</td>
<td><input type="text" name="im" id="name" value={this.state.val1} onChange={this.Change1}/></td></tr>    
<tr><td>Телефон</td>
<td><input type="text" name="tel" id="tel" value={this.state.val2} onChange={this.Change2}/></td></tr>
<tr><td>Е-маил</td>
<td><input type="text" name="mail" id="mail" value={this.state.val3} onChange={this.Change3}/></td></tr>
<tr><td>Избранное</td>
<td><input type="checkbox" name="fav" id="fav"/></td></tr>
<tr><td colSpan="2">
<center>
<button id="add" onClick={this.addNew} disabled={!this.state.val1}>Добавить</button>
</center>
</td></tr>
<tr><td colSpan="2">
<button id="all" onClick={() => {this.props.updateData(this.state.all)}}>Все</button>
<button id="favonly" onClick={() => {this.props.updateData(this.state.fa)}}>Только избранные</button>
</td></tr>
</tbody></table>
</div>

  
    )

    }    
  }

export default Form;