import React from 'react';
import '../style.css';
//import '../bootstrap.min.css';

class App2 extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, val2: ""};    
  
this.addNew = this.addNew.bind(this);
  }











addNew(event)
{
var i=0;
const mas=[];  

let favv = () =>
{
let c=document.getElementById("fav").checked;
if(c==true)
c="Избранный";
else
c="";
return c;
}


function Contakt(name, tel, mail, fav) {
  this.name = name;//document.getElementById("name").value;
  this.tel = tel;//document.getElementById("tel").value;
  this.mail = mail;//document.getElementById("mail").value;
  this.fav = fav;//favv();
  
}

let cont = new Contakt(document.getElementById("name").value, document.getElementById("tel").value, document.getElementById("mail").value, favv());

this.setState({id: 1});

 i++;

// mas.push(cont);
// if(mas.length>3)
// console.log(mas[1].name);
// else
console.log(this.state.id);


// this.setState({op: "event.target.value"}); 
let parent = document.getElementById("bas");
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

//localStorage.setItem( 'all', JSON.stringify(mas));
}

  render() {

    return (

<div id="bas">

<div className="form">
<table><tbody>
<tr><td>Имя</td>
<td><input type="text" name="im" id="name"/></td></tr>    
<tr><td>Телефон</td>
<td><input type="text" name="tel" id="tel"/></td></tr>
<tr><td>Е-маил</td>
<td><input type="text" name="mail" id="mail"/></td></tr>
<tr><td>Избранное</td>
<td><input type="checkbox" name="fav" id="fav"/></td></tr>
<tr><td colSpan="2">
<center>
<button id="add" onClick={this.addNew}>Добавить</button>
</center>
</td></tr>
<tr><td colSpan="2">
<button id="all" onClick={this.addNew}>Все</button>
<button id="favonly">Только избранные</button>
</td></tr>
</tbody></table>

</div>

</div>  
    )

    }    
  }

export default App2;