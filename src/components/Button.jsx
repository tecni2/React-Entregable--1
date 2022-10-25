

const Button = ({action, color}) => {
 
  return (

      <button id="circle" onClick={action}>
        {/* <i className ="fa-sharp fa-solid fa-arrows-to-circle" style={{ color: colors[randomColorIndex]}} ></i> */}
        <i className ="fa-sharp fa-solid fa-arrows-to-circle" style={{color: color}} ></i>
        
       </button> 
  );
};

export default Button;