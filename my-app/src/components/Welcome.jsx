import React from 'react';
import { Age } from './Age';
import { Clock } from './Clock';

export class Welcome extends React.Component {
  render() {
    return (

      <div>
        {
          !!this.props.name 
          ? <p>Welcome {this.props.name}</p> 
          : <p>Welcome Guest</p>
        }
        {this.props.age >= 18 && this.props.age <= 65 ? <Age age= {this.props.age}></Age> : <p>You must between 18 and 65</p>}
      </div>

      // <div>
      //   {!!this.props.name && <p>Welcome {this.props.name}</p>}
      //   {!this.props.name && <p>Welcome Guest</p>}
      // </div>
    
    // <p>Welcome {this.props.name}</p>
    );
  }
}
