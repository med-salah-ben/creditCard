import React, { Component } from "react";

class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      cardNumber: "",
      cardDate: ""
    };
  }

  cardNumber = code => {
    return (
      code.slice(0, 4) +
      " " +
      code.slice(4, 8) +
      " " +
      code.slice(8, 12) +
      " " +
      code.slice(12)
    );
  };

  cardDate = date => {
    return date.slice(0, 2) + "/" + date.slice(2, 4) + "/" + date.slice(4, 8);
  };

  changeHandlerCardNumber = id => {
    let regExp = /^[0-9]*$/;
    if (regExp.test(id.target.value))
      this.setState({
        cardNumber: id.target.value
      });
  };
  inputChange = id => {
    id.preventDefault();
    if (id.target.value.length <= 20) {
      this.setState({
        Firstname: id.target.value
      });
    }
  };
  changeHandlerCardDate = id => {
    let reguExp = /^[0-9]*$/;
    let days = id.target.value.slice(0, 2);
    let day = id.target.value.slice(0, 1);
    let months = id.target.value.slice(2, 4);
    let month = id.target.value.slice(2, 3);
    let years = id.target.value.slice(4, 8);

    if (
      reguExp.test(id.target.value) &&
      days <= 31 &&
      day <= 3 &&
      months <= 12 &&
      month <= 1 &&
      years <= 2020
    )
      this.setState({
        cardDate: id.target.value
      });
  };

  render() {
    let { Firstname } = this.state;
    let { cardNumber } = this.state;
    let { cardDate } = this.state;

    return (
      <form>
        <div className="container">
          <input
            placeholder="Name"
            type="text"
            name="Firstname"
            onChange={this.inputChange}
            value={this.state.Firstname}
          ></input>
          <input
            placeholder="Number card"
            maxLength={16}
            type="text"
            name="cardNumber"
            onChange={this.changeHandlerCardNumber}
            value={this.state.cardNumber}
          ></input>
          <input
            placeholder="Date"
            type="text"
            name="cardDate"
            maxLength={8}
            onChange={this.changeHandlerCardDate}
            value={this.state.cardDate}
          ></input>

          <p className="text">The name is : {Firstname.toUpperCase()}</p>
          <p className="text1">
            The number Card is : {this.cardNumber(cardNumber)}
          </p>
          <p className="text2">
            The creation date (D/M/Y) is : {this.cardDate(cardDate)}
          </p>
        </div>
      </form>
    );
  }
}

export default creditCard;
