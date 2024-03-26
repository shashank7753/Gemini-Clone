import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () =>{
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
return (
  <div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
        <div className="greet">
            <p><span>Hello, Kshitij.</span></p>
            <p>How May I Assist You Today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Guide with some Amazing projects for my resume</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summerize the concept:urban palnning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brain storm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the Reablity of follwing code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt here...'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Altough a Gemini clone has been developed by Kshitij Still it may display incorrect info.
            </p>
        </div>
    </div>
  </div>
 )
}

  export default Main