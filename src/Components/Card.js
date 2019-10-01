import React from 'react';
import '../style.css';
//import '../bootstrap.min.css';

class Card extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {id: 0, red: 1, key: 777, f1:1};    
  
//this.addNew = this.addNew.bind(this);     , {this.props.id}
 


  }



  render() {


let className = 'addFavButon';
  if (this.props.fav=="Избранный") {
    className += ' dis';

    //this.setState({ f1: 1 })
  }



    return (


<div className="child">
<div>{this.props.name}</div>
<div>{this.props.tel}</div>
<div>{this.props.mail}</div>
<div>{this.props.fav}</div>
<button className={className} onClick={() => {this.props.doFav(this.props.id)}}>Добавить в избранные</button>
<button id="red" onClick={() => {this.props.redData(this.state.red,this.props.id)}}>Редактировать</button>
<button id="del" onClick={() => {this.props.del(this.props.id)}}>Удалить</button>


</div>  
    )

    }    
  }

export default Card;