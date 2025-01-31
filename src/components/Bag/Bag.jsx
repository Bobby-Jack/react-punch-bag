import React from 'react'
import './Bag.css'
export default function Bag({pv}) {
  return (
    <img className={pv ? "Bag" : "Bag burst"} src={pv ? "./public/bag.png" : "./public/bag-burst.png" } alt="" />
)
}
