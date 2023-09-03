const Box = (props) => {
  //  Write your code here.
  const { boxClass, boxText } = props;
  return (
    <div className={boxClass}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxClass="box-small" boxText="Small" />
      <Box boxClass="box-medium" boxText="Medium" />
      <Box boxClass="box-large" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
