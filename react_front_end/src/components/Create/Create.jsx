import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeBidName = this.onChangeBidName.bind(this);
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPosition = this.onChangeUserPosition.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bid_name: '',
      organization_name: '',
      user_name: '',
      user_position: '',
      e_mail: ''
    };
  }
  onChangeBidName(e) {
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
  onChangeEmail(e) {
    this.setState({
      e_mail: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Новая заявка</h3>
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
              value="Добавить заявку"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
