import React from 'react';
import '../style.css';
import Form from "./Form";
import Card from "./Card";
import CardRed from "./CardRed";

class App extends React.Component{
    
constructor(){  
        super();  
        this.state = {all: 0, fav: 0, fa: 0, red: 0, key: 777, value_id: 0, name: "", tel: 0, mail: "", faaa: true, id: 0, f1: 0};     
    }

updateData = (value) => {   this.setState({ fa: value })};
redData = (value_red, value_id) => {this.setState({ red: value_red, value_id: value_id})};
getKey = (value3) => {   this.setState({ key: value3 })};
back = (value4) => {this.setState({ red: value4 })};
saveData = (a, b, c, d, e) => {
    this.setState({ name: a, tel: b, mail: c, faaa: d, id: e});
var afa = "";
if (this.state.faaa==true) 
afa = "Избранный";
else
afa = "";

var aa = {"id": e, "name": a, "tel": b, "mail": c, "fav": afa};
//console.log(aa);
var cuc = JSON.parse(localStorage.getItem('alll'));
cuc[e]=aa;
let zz = JSON.stringify(cuc);
localStorage.setItem('alll', zz); 
console.log(afa);
this.setState({ red: 0});
};

doFav=(f1)=>
{

var cuc1 = JSON.parse(localStorage.getItem('alll'));
cuc1[f1].fav="Избранный";
let zz1 = JSON.stringify(cuc1);
localStorage.setItem('alll', zz1);
this.setState({ red: 1});
this.setState({ red: 0});
};



del=(del)=>
{
var cuc2 = JSON.parse(localStorage.getItem('alll'));
cuc2.splice(del, 1);
let zz2 = JSON.stringify(cuc2);
localStorage.setItem('alll', zz2);
this.setState({ red: 1});
this.setState({ red: 0});
};












    render() {  

// console.log(localStorage.getItem('all').length);
// console.log(localStorage.getItem('alll').length);
// console.log(localStorage.getItem('adda').length);
var xxx=0;
if (localStorage.getItem("alll") != null) // || localStorage.getItem("alll").length != 0
 {
 var cur = JSON.parse(localStorage.getItem('alll'));

 var className1 = 'bas';
 var big = "";
 
 if (this.state.red==1) {
    className1 += ' dis';
 let f=false;  
 if(cur[this.state.value_id].fav=="Избранный")
 f=true;
 if(cur[this.state.value_id].fav=="")
 f=false;

 big=<CardRed name={cur[this.state.value_id].name} tel={cur[this.state.value_id].tel} mail={cur[this.state.value_id].mail} fav={f} back={this.back} saveData={this.saveData} idd={this.state.value_id} />;
  
  }

// var xxx=0;

if (this.state.fa==0) 
// var cur = JSON.parse(localStorage.getItem(d));
xxx = cur.map(cur => <Card key={cur.id} id={cur.id} name={cur.name} tel={cur.tel} mail={cur.mail} fav={cur.fav} redData={this.redData} getKey={this.getKey} doFav={this.doFav} del={this.del}/>);

else if (this.state.fa==1)
{
 let fg = cur.filter(item => item.fav == "Избранный");
 xxx = fg.map(cur => <Card key={cur.id} id={cur.id} name={cur.name} tel={cur.tel} mail={cur.mail} fav={cur.fav} redData={this.redData} getKey={this.getKey} del={this.del}/>);   
}


 }

if (localStorage.getItem("alll") === null) // || localStorage.getItem("alll").length === 0
 {
xxx=null;

let sss = [];
let z0 = JSON.stringify(sss);
localStorage.setItem('alll', z0); 





 }


      
         return (  
           

           <div>  
             
 {big}

 <div id="bass" className={className1}>            
<Form updateData={this.updateData}/>


{xxx}

{/*xxcur[0].name<CardRed/>{this.state.fa}
{this.state.red}
{this.state.key}
{this.state.name}
{this.state.tel}
{this.state.mail}
{this.state.faaa}*/}



</div>
           
           </div>     
        )  
    }  
}
export default App;