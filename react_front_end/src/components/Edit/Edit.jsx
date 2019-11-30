import React, { Component } from 'react';
import axios from 'axios';
import BidForm from '../BidForm/BidForm';
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBidData: ''
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:1623/api/bids/' + this.props.match.params.id)
      .then(response => {
        let bid = {
          bid_id: response.data.BidId,
          bid_date: response.data.BidDate,
          bid_name: response.data.BidNumber,
          organization_name: response.data.OrganizationName,
          user_name: response.data.UserName,
          user_position: response.data.UserPosition,
          e_mail: response.data.Email
        };

        this.setState({
          currentBidData: bid
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <BidForm
        history={this.props.history}
        HeaderText="Изменить заявку"
        bid={this.state.currentBidData}
        ServerActionCallback={data => {
          axios
            .put(this.props.serverUrl + this.props.match.params.id, data)
            .then(res => {
              console.log(res.data);
              this.props.history.push('/index');
            });
        }}
      ></BidForm>
    );
  }
}
