import React, { Component } from 'react'

export default class Operan extends Component {
    // gantiNama(nama_baru) {
    //     this.setState({
    //         nama : nama_baru
    //   })
    // }

  render() {
    const { nama, gantiNama } = this.props
    return (
      <div>
        <h2>Operan State yang menjadi Props : {nama}</h2>
        <button onClick={() => gantiNama("Hafsha")}>Ganti Nama</button>
      </div>
    )
  }
}
