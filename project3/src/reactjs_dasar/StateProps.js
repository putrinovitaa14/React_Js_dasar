import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            nama : 'Putri'
        }
    }

    gantiNama = (nama_baru) => {
        this.setState({
            nama : nama_baru
        })
    }

    render() {
        return (
          <div>
             <h2>{this.state.nama}</h2>
             <button onClick={() => this.gantiNama("Hafsha")}>Ganti Nama</button>
             <Operan nama={this.state.nama} gantiNama={this.gantiNama}/>
          </div>
        )
      }

//   render() {
//     return (
//       <div>
//          <h2>{this.state.nama}</h2>
//          <button onClick={() => this.setState({nama : "Hafsha"})}>Ganti Nama</button>
//       </div>
//     )
//   }
}
