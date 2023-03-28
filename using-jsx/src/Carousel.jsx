import { Component } from "react";
// Class Based component
// cannot use hooks
// To use hooks create a higher order component
class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["https://pets-v2.dev-apis.com/pets/none.jpg"],
  };
  handleClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero image" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt={"animal thumbnail"}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
