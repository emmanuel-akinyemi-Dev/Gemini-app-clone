import { assets } from '../../assets/assets'
import './main.css'

 function Main() {
  return (
    <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="user_icon" />
        </div>
        <div className="main_container">
          <div className='greeting'>
          <p ><span>Hello, Dev</span></p>
          <p>how can i assist you today?</p>
          </div>
          <div className="cards">
            <div className="card">
            <p>suggest beautiful places to visit in an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass_icon" />
            </div>

            <div className="card">
            <p>Brainstorm ideas on team bonding</p>
            <img src={assets.message_icon} alt="message_icon" />
            </div>

            <div className="card">
            <p>Sumarize the concept of 3d modeling</p>
            <img src={assets.light_icon} alt="light_icon" />
            </div>

            <div className="card">
            <p>Reimagine this code for more readability</p>
            <img src={assets.code_icon} alt="code_icon" />
            </div>
          </div>
          <div className="main_bottom">
            <div className="search_box">
              <input type="text" placeholder='type your prompt here..' />
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" />
            </div>
            <p className='bottom_info'>Gemini's results may be inaccurate, expecially about people, please always verify results.</p>
          </div>
        </div>
    </div>
  )
}
export default Main