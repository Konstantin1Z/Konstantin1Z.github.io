import React from 'react';
// import '../Components/App.scss'
// import '../Components/A.css'
import '../style.css'
import '../style1.css'
import '../style2.css'
// import '../js.js'


class App extends React.Component{
    render(){
    let a=[1,2,3,6,7,8];	
        return(



        	<div>
            <h2>Hello {a[2]}</h2>
<img src="./src/img/a.jpg" alt="imgs"/>
            </div>
        );
    }
}
export default App;