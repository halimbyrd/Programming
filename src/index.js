/* challenge:

Part 1:  Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React


*/


import ReactDom from 'react-dom/client';
import './styles.css'


import Header from './Header.js'
import MainContent from './MainContent';
import Footer from './Footer';






const App = () => {
   return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
  </>
   )
}








const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
<> 

  <App/>

  </>

)



