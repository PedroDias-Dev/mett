import React from 'react'

import './styles.css'

type Props = {}

const Header = (props: Props) => {
  return (
      <div className='header-main'>
          <div className='header-div'>
            <div>
              <h2>Mett</h2>
            </div>

            <div className='login-div'>
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
      </div>
    )
  }
  
  export default Header