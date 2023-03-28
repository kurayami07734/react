import { Component } from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    // static funcs can only be called on the class not on the instance
    return { hasError: true }; // ErrorBoundary.getDerivedStateFromError();
  }
  componentDidCatch(err, info) {
    console.error("Error caught in component", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This page had an error.
          <Link to="/">Go back to home.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
