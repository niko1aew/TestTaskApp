import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeBidNumber = this.onChangeBidNumber.bind(this);
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPosition = this.onChangeUserPosition.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bid_date: '',
      bid_name: '',
      organization_name: '',
      user_name: '',
      user_position: '',
      e_mail: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:1623/api/bids/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          bid_id: response.data.BidId,
          bid_date: response.data.BidDate,
          bid_name: response.data.BidNumber,
          organization_name: response.data.OrganizationName,
          user_name: response.data.UserName,
          user_position: response.data.UserPosition,
          e_mail: response.data.Email
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeBidNumber(e) {
    this.setState({
      bid_name: e.target.value
    });
  }
  onChangeOrganizationName(e) {
    this.setState({
      organization_name: e.target.value
    });
  }
  onChangeUserName(e) {
    this.setState({
      user_name: e.target.value
    });
  }
  onChangeUserPosition(e) {
    this.setState({
      user_position: e.target.value
    });
  }
  onChangeUserEmail(e) {
    this.setState({
      e_mail: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('http://localhost:1623/api/bids/' + this.props.match.params.id);
    const obj = {
      BidId: this.state.bid_id,
      BidDate: this.state.bid_date,
      BidNumber: this.state.bid_name,
      OrganizationName: this.state.organization_name,
      UserName: this.state.user_name,
      UserPosition: this.state.user_position,
      Email: this.state.e_mail
    };
    console.log(JSON.stringify(obj));
    axios
      .put('http://localhost:1623/api/bids/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Обновить заявку</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Номер заявки:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.bid_name}
              onChange={this.onChangeBidName}
            />
          </div>
          <div className="form-group">
            <label>Наименование организации:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.organization_name}
              onChange={this.onChangeOrganizationName}
            />
          </div>
          <div className="form-group">
            <label>ФИО пользователя:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_name}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Должность:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_position}
              onChange={this.onChangeUserPosition}
            />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.e_mail}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Отправить"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
