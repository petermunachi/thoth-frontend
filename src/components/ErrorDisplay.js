
function ErrorDisplay(props) {


  return(
    <>

      {props.errors.length ? (

        <div className="errorContainer"> {props.errors.map((error, index)=>(
          <small key={index} className="errorText">{error}</small>
        ))}</div>)

       : null}

      
      
    </>
  )
    
}

export default ErrorDisplay;