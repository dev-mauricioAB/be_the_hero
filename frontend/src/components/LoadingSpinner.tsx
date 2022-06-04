import React, { Component } from "react";

export class LoadingSpinner extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-5 h-5 border-1 rounded-full text-red-500"
          role="status"
        ></div>
      </div>
    );
  }
}
