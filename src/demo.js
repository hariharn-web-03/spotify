import React from 'react'


export function Props(props) {
  return (
    <div id="main">
       <div id="main-sub1"></div>
    </div>
  )
}

export function Profile(Profile){
  return (
    <div id="profile">
      <div id="profile-sub1">
        <img id="profile-sub1-img" src={Profile.imag} alt=''></img>
      </div>
    </div>
  )
}

export function Input1(Input1){
  return (
    <div id="input1">
      <div id="input1-sub1">
        {Input1.name}
      </div>
      <div id="input1-sub2">
        {Input1.bio}
      </div>
    </div>
  )
}

export function Input2(Input2){
  return (
    <div id="input2">
      <div id="input2-sub1">
        {Input2.desc}
      </div>
    </div>
  )
}
