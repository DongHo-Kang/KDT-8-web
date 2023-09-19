import { Component } from "react";

import PropTypes from "prop-types";

class ClassPropsComponent extends Component {
  render() {
    const { food } = this.props;
    const style = {
      color: "red",
    };

    return (
      <h2>
        저는 <span style={style}>{food}</span>를 좋아합니다.
      </h2>
    );
  }
}

ClassPropsComponent.defaultProps = {
  food: "바나나",
};

ClassPropsComponent.propTypes = {
  food: PropTypes.string,
};
export default ClassPropsComponent;
