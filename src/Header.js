
import ReactDom from 'react-dom/client'
import reactlogo from './images/react-logo.png' ;





const Header = () => {
    return (
       <>
         <header>
              <nav className='navbar'>
                  <img src={reactlogo} alt="" width='100px'/>
                  <ul className='list'>
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
              </nav>
         </header>
      </>
    )
}

export default Header