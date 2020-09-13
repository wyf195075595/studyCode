import React from 'react'

export default function  (props){
    console.log(typeof (props.name+props.title) )
    return <p>{props.name+props.title}</p>
}