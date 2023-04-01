import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Card from '../components/shared/Card'
import Greetings from './Greetings';

function WelcomePage(props) {
    const navigate = useNavigate();

    const navigateToScreen = ()=>{
        navigate('Greetings')
    }
  return (
    
      <div className='about'>
        <h1>Welcome To Feedback</h1>
        
        <button onClick={navigateToScreen} style={{width:"30%", height:50,alignItems:'center', color:'red'}}>Start Feedback</button>
        <Routes>
         
        </Routes>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    
  )
}

export default WelcomePage