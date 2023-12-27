import React, { Component } from "react";

const currentDate = new Date().getFullYear();

export default class Footer extends Component {
  render() {
    return <> Copyright &copy; {currentDate} - André Junior</>;
  }
}
