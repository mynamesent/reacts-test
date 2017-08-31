import React from 'react';

const Name = props =>{
    const addAge=()=>{
        props.age=props.age+1
    }
    return(
 <div>
            <p>{props.title}{props.age}</p>
                <button onClick={addAge}>add</button>
    </div>)
}

export default Name ;

// class name extends Component {
//     render() {
//         return (
//             <div>
//                 <p>
//                     Drinking WATER.
//                 </p>
//             </div>
//         )
//     }
// 
// 2 สิ่ง state, props แทนคำว่า attribute 