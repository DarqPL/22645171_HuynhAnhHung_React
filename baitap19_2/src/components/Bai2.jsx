import React from 'react'
import { useState } from 'react'
import './Bai2.css'

const Bai2 = () => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState('')

    function handleChangeA(e) {
        setA(e.target.value)
    }
    function handleChangeB(e) {
        setB(e.target.value)
    }
    function handleClick() {
        setResult(parseInt(a) + parseInt(b))
    }

    return (
        <div class="bai2">
            <h1>Bài 2</h1>
            <input type="text" placeholder='nhap so a' onChange={handleChangeA} />
            <input type="text" placeholder='nhap so b' onChange={handleChangeB} />
            <br />
            <button onClick={handleClick}>Tính tổng</button>
            <br />
            <span>Kết quả: {result} </span>

        </div>
    )
}

export default Bai2