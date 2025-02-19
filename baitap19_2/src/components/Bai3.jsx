import React, { useState } from 'react'
import './Bai3.css'

const Bai3 = () => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState('')
    const [operator, setOperator] = useState('')

    function changeOp(e) {
        setOperator(e.target.value)
    }
    function handelChangeA(e) {
        setA(e.target.value)
    }
    function handelChangeB(e) {
        setB(e.target.value)
    }
    function handelClick() {
        if (operator === '+') {
            setResult(parseInt(a) + parseInt(b))
        } else if (operator === '-') {
            setResult(parseInt(a) - parseInt(b))
        } else if (operator === '*') {
            setResult(parseInt(a) * parseInt(b))
        } else if (operator === '/') {
            setResult(parseInt(a) / parseInt(b))
        }
    }
    return (
        <div class="bai3">
            <h1>Bài 3</h1>
            <input type="text" placeholder='nhap so a' onChange={handelChangeA} />
            <input type="text" placeholder='nhap so b' onChange={handelChangeB} />
            <br />
            <input type="radio" onChange={changeOp} name="tinhToan" value='+' /> +
            <input type="radio" onChange={changeOp} name="tinhToan" value='-' /> -
            <input type="radio" onChange={changeOp} name="tinhToan" value='*' /> *
            <input type="radio" onChange={changeOp} name="tinhToan" value='/' /> /
            <br />
            <button onClick={handelClick}>Tính</button>
            <br />
            <span>Kết quả: {result} </span>
        </div>
    )
}

export default Bai3