const App = () => {
    return (
      <>
        <Box size="small" className="small" roundedCorners>Small Box</Box>
        <Box size="medium" className="medium">Medium Box</Box>
        <Box size="large" className="large">Large Box</Box>
      </>
    );
  };
  
  const Box = (props) => {
    const boxClassName = `box ${props.className} ${props.roundedCorners ? 'rounded' : ''}`;
    return <div className={boxClassName}>{props.children}</div>;
  };
  
  ReactDOM.render(<App />, document.getElementById("app"));
  