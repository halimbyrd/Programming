import ReactDOM from 'react-dom/client';


/* challenge:

Part 1:  Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React


*/




const WhyLearnReact = () => {
  return (
        <ol>
            <li>Its popular</li>
            <li>easier to build web applications</li>
            <li> I CAN GET A JOB (: </li>
        </ol>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <WhyLearnReact/>
)



