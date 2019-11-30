import React, { Component } from 'react';
import axios from 'axios';
import BidForm from '../BidForm/BidForm';
export default class Create extends Component {
  render() {
    return (
      <BidForm
        history={this.props.history}
        HeaderText="Новая заявка"
        ServerActionCallback={data => {
          axios
            .post('http://localhost:1623/api/bids', data)
            .then(res => console.log(res.data));
        }}
      ></BidForm>
    );
  }
}
