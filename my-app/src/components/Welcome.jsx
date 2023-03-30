import React from 'react';
import { Age } from './Age';


export  function Welcome(props) {
  return <div>
    {props.name && <h2>Welcome {props.name}</h2>}
    {!props.name && <h2>Welcome Guest</h2>}
  </div>
}

// export class Welcome extends React.Component {
//   render() {
//     return (

//       <div className='welcome'>
//         {
//           !!this.props.name 
//           ? <p>Welcome {this.props.name}</p> 
//           : <p>Welcome Guest</p>
//         }
//        {this.props.age >= 18 && this.props.age <= 65  && this.props.name === "John" ? <Age age= {this.props.age}></Age> : <Age></Age> }
//       </div>

//       // <div>
//       //   {!!this.props.name && <p>Welcome {this.props.name}</p>}
//       //   {!this.props.name && <p>Welcome Guest</p>}
//       // </div>
    
//     // <p>Welcome {this.props.name}</p>
//     );
//   }
// }
