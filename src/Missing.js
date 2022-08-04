import React from 'react'
import {  Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className="Missing">
        <h2>페이지를 찾을 수 없습니다.</h2> 
        <p>
            <Link to="/"> 홈으로 가기 </Link>
        </p>
    </div>
  )
}

export default Missing