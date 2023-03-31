import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function WelcomePage(props) {
  return (
    
      <div className='about'>
        <h1>Welcome To Feedback</h1>
        <p></p>
        <button style={{width:100, height:25, color:'red'}}>Start Feedback</button>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    
  )
}

export default WelcomePage