import React from 'react'

const makanans = [
    {
        nama : 'Coklat',
        harga : 17000
    },
    {
        nama : 'Kue',
        harga : 10000
    },
    {
        nama : 'Buah Buahan',
        harga : 30000
    },
    {
        nama : 'Burger',
        harga : 20000
    }
]

// Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>
        <ul>
            {makanans.map((makanan, index) => (
                <li>{index+1}. {makanan.nama} - Harga Rp.{makanan.harga}</li>
            ))}
        </ul>

        <h2>Map Filter harga yang lebih dari sama dengan 17.000</h2>
        <ul>
            {makanans.filter((makanan) => makanan.harga > 17000).map((makanan, index) => (
                <li>{index+1}. {makanan.nama} - Harga Rp.{makanan.harga}</li>
            ))}
        </ul>

        <h3>Total Harga : {total_bayar}</h3>
    </div>
  )
}

export default Map