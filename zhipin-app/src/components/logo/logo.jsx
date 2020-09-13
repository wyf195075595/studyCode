import React from 'react'
import  './logo.less'

import logo from './logo.jpg'

export default function  Logo (){
    return (
        <div className='logowarp'>
            <img  src={logo} alt="boss" className="logo-img"/>
        </div>
    )
}