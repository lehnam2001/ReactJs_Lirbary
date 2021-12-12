import { useState } from 'react';
import WaterBoiling from "./WaterBoiling";
import styles from './ConvertTemp.module.css'

function Boiling(){
    const [temp, updateTemp] = useState({ f: 0, c: 0, k:0 })
  
    const updateC = e => updateTemp({
      c: e.target.value,
      f: (+e.target.value * 9 / 5 + 32).toFixed(2),
      k: (+e.target.value + 273.15)
    })
    
    const updateF = e => updateTemp({
        c: ((+e.target.value - 32) * 5 / 9).toFixed(2),
        f: e.target.value,
        k:  ((+e.target.value + 459.67) * 5/9).toFixed(2)
    })

    const updateK = e => updateTemp({
        c: ((+e.target.value) - 273.15).toFixed(2),
        f: ((+e.target.value) * 9/5 - 459.67).toFixed(2),
        k: e.target.value 
      })
      
    return(
      <div className={styles.container}>
        <div className={styles.title}>
            <h1>Temperature Converter</h1>
        </div>
        <div className={styles.formInput}>
            <div id="box1">
                <h2>Celsius</h2>
                <input className={styles.inputTemp}
                    type = "number"
                    value = {temp.c}
                    onChange = {updateC} >
                </input>
            </div>
            <div id="box2">
                <h2>Fahrenheit</h2>
                <input className={styles.inputTemp}
                    type = "number" 
                    value = {temp.f} 
                    onChange = {updateF}>
                </input>
            </div>
            <div id="box3">
                <h2>Kelvin</h2>
                <input className={styles.inputTemp}
                    type = "number" 
                    value = {temp.k} 
                    onChange = {updateK}>
                </input>
            </div>
        </div>
        <div className={styles.footer}>
            <WaterBoiling temp={temp.c} />
        </div>
      </div>
    )
  }

  export default Boiling;