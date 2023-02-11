import jobb from '../assets/images/jobb.jpg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='/' className='btn btn-hero'>
            SERIGANO JOB CENTER
          </Link>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>management</span> app
          </h1>
          <p>
          The comprehensive and uttermost job management application to help you organize your 
          hiring process nicely and neatly. 
          Job hunting, job seeking, or job searching is the act of looking for employment, 
          due to unemployment, underemployment, discontent with a current position, or a 
          desire for a better position (from Wiipedia).
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={jobb} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
