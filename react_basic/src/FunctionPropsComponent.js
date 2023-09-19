import PropTypes from "prop-types";

function FunctionPropsComponent(props) {
  const { title, author, price, type } = props;
  const style = {
    textAlign: "-webkit-center",
  };
  const divStyle = {
    backgroundColor: "#ffffc2",
    textAlign: "center",
    width: "550px",
  };
  const imgStyle = {
    height: "200px",
  };
  const textStyle = {
    textAlign: "initial",
    marginLeft: "90px",
  };
  return (
    <div style={style}>
      <div style={divStyle}>
        <h2>이번주 베스트셀러</h2>
        <img src="img/book.jpg" alt="book" style={imgStyle}></img>
        <h2>{title}</h2>
        <div style={textStyle}>
          <h4>저자: {author}</h4>
          <h4>판매가: {price}</h4>
          <h4>구분: {type}</h4>
        </div>
      </div>
    </div>
  );
}

FunctionPropsComponent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default FunctionPropsComponent;
