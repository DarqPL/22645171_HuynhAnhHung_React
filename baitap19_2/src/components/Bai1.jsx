import React from 'react'
import { useState } from 'react'
import './Bai1.css'

const Bai1 = () => {
    const [name, setName] = useState('')
    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div class='bai1'>
            <h1>Bài 1</h1>
            <input type="text" placeholder='nhập tên' onChange={handleChange} />
            <br />
            <span>Hello {name}</span>
        </div>
    )
}

export default Bai1