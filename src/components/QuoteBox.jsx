
import { useState } from 'react';
import quotes from '../../quotes.json';
import Button from './Button';


const QuoteBox = () => {

  const random = () => {
    const numberRandom = Math.floor(Math.random() * quotes.length);
    return numberRandom;
  }
  
  const [index, setIndex ] = useState(random());
  
  const buttonRandom = () => {
    setIndex(random());
    document.querySelector("#circle").classList.add("button-circle");
   
    setTimeout(() => {
      document.querySelector("#circle").classList.remove("button-circle");
    }, 1000);
    
  }

  const colors = [
    "rgb(112, 112, 106)",
    "rgb(102, 51, 153)",
    "rgb(250, 148, 3)",
    "#D65DB1",
    "rgb(202, 202, 81)",
    "rgb(75, 19, 255)",
    "#845EC2",
    "rgb(139, 65, 22)",
    "rgb(7, 43, 221)",
    "#FF9671",
    "rgb(175, 48, 33)",
    "rgb(5, 48, 33)",
    "rgb(1, 138, 0)",
    "rgb(225, 0, 255)",
    "#A9F871",
    "rgb(116, 18, 73)",
    "rgb(116, 255, 195)",
    "rgb(73, 58, 66)",
    "rgb(73, 58, 6)",
    "rgb(73, 8, 6)",
    "rgb(7, 58, 66)",
    "rgb(75, 148, 33)",
    "rgb(3, 58, 100)",
    "rgb(3, 8, 49)",
    "rgb(175, 48, 33)",
  ];

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;
  

  return (
      <div className="card-quote">
        <div className="title" style={{ color: colors[randomColorIndex]}} > 
        <div className="icon">
       <i className="fa-solid fa-quote-left"></i>
        </div>
       <h2>
        {quotes[index].quote}
       </h2>
        </div>

       <div className='paragraph-author' style={{ color: colors[randomColorIndex]}} >
        <p className='paragraph'>
        {quotes[index].author}
        </p>
       
        <Button 
        action={buttonRandom}
        color={colors[randomColorIndex]}/>
       </div>
        </div>
  );
};

export default QuoteBox;
