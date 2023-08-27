import React from 'react'
import { Link } from 'react-router-dom'
import './backBtn.css'

export default function BackBtn() {
    return (
        <button type="button" className="btn btn-outline-primary"><Link to="/" className="linkContact backBtn">Back to Index</Link></button>
    )
}
