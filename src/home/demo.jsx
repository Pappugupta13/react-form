import React from 'react'
import './currency.css';
import { useState, useEffect } from 'react';

const Demo = () => {
  return (
    <div calss="app">
    <div class="converter">
      <div class="header">
        <h4>Currency Converter</h4>
      </div>
      <div class="container">
        <div class="left">
          <h4>Amount</h4>
          <input type="text" placeholder='Enter Amount'></input>
        </div>
        <div class="middle">
          <h4>Form</h4>
          <section>
            <option></option>
          </section>
        </div>
        <div class="right">
        <h4>To</h4>
          <section>
            <option></option>
          </section>
        </div>
        <div class="result">
          <h5>{}</h5>
          <button>Convert</button>
        </div>

      </div>
    </div>

    <div class="image">

    </div>
    </div>
  )
}

export default Demo