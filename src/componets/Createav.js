import React, { useState } from "react";
import './avatar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faXmark} from '@fortawesome/free-solid-svg-icons'


function Createavatar(){
    const[temp,settemp]=useState(0)
    const[flag,setflag]=useState(0)
    const[idflag,setidflag]=useState(0)
    const img=[{
                    image:require('../image/img11.jpg')
               },
               {
                    image:require('../image/img2.jpg')
               },
               {
                    image:require('../image/img3.jpg')
               },
               {
                    image:require('../image/img4.jpg')
               },
               {
                    image:require('../image/img5.jpg')
               },
               {
                    image:require('../image/img6.jpg')
               }
              ]
    function correctimg(temp){
        switch(temp){
            case 0:
                return <img src={require('../image/img11.jpg')} className="img"/>
            case 1:
                return <img src={require('../image/img2.jpg')} className="img"/>
            case 2:
                return <img src={require('../image/img3.jpg')} className="img"/>
            case 3:
                return <img src={require('../image/img4.jpg')} className="img"/>
            case 4:
                return <img src={require('../image/img5.jpg')} className="img"/>
            case 5:
                return <img src={require('../image/img6.jpg')} className="img"/>
        }
    }
    const avatar=[{
                    id:correctimg(temp),
                    uname:'preetam',
                    uage:22
                  },
                  {
                    id:correctimg(temp),
                    uname:'smith',
                    uage:21 
                  }
                 ]
    
    const [list,setlist]=useState(avatar)
    const [username,setusername]=useState('')
    const [age,setage]=useState('')
    const[idlist,setidlist]=useState(1)
    const listview=list.map((list,index)=>
    <div className="display" key={index}>
    <li>
        {list.id}<br/>
        {list.uname}<br/>
        {list.uage}<br/>
        {/* <button onClick={()=>deleteItem(index)} className="remove-button"></button> */}
        <FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>deleteItem(index)} className="remove-button"/>
    </li>
    </div>
    
    )
    function deleteItem(index){
        const newlist = list.filter((_, i) => i !== index)
        setlist(newlist)
    }
    function add(){
        const listcon=list.concat({id:correctimg(temp),uname:username,uage:age})
        setidlist(avatar.id)
        setlist(listcon)
        console.log(temp)   
    }
    function handelname(event){
        setusername(event.target.value)
    }
    function handelage(event){
        setage(event.target.value)

    }
    function selectimg(index1){
        // temp=index1
        // console.log(index1)
        settemp(index1)
        alert(`you have selected avatar ${index1}`)
        if(flag==0){
            setflag(1)
        }
        else{
            setflag(0)
        }
        
        // console.log(temp)
        
        
    }
    return(
        <div className="container">
            <div className="nav-container">
                <h2>Welcome</h2>
                <p className="p">Choose your Avatar</p>
                <div className="photo-logo">
                {/* <img src={require('../image/img11.jpg')} className="img"/>
                <img src={require('../image/img2.jpg')}  className="img"/>
                <img src={require('../image/img3.jpg')}  className="img"/>
                <img src={require('../image/img4.jpg')}  className="img"/>
                <img src={require('../image/img5.jpg')}  className="img"/>
                <img src={require('../image/img6.jpg')}  className="img"/> */}
                {img.map((listimg,index1)=>
                 <div key={index1}>
                    <img src={listimg.image} onClick={()=>selectimg(index1)} className={`img ${flag === 1 && 'img-select'}`}/>
                 </div>
                )}
                </div>
                <label>Name : </label>
                <input type="text"  onChange={handelname}/> <br/>
                <label className="age-field">Age  :   </label>
                <input type="text"  onChange={handelage} className="age-field"/>  <br/>
                <button onClick={add} className="button-add">add</button>
            </div>
            <div className="list-none list-container">
                {listview}
            </div>    
        </div>
    )
}

export default Createavatar