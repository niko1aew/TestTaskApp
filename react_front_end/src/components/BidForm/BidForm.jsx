import React, { Component } from 'react';
export default class BidForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeBidName = this.onChangeBidName.bind(this);
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPosition = this.onChangeUserPosition.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    if (props.bid && props.bid !== '') {
      this.state = {
        bid_id: props.bid.bid_id,
        bid_date: props.bid.bid_date,
        bid_name: props.bid.bid_name,
        organization_name: props.bid.organization_name,
        user_name: props.bid.user_name,
        user_position: props.bid.user_position,
        e_mail: props.bid.e_mail,
        formValid: true
      };
    } else {
      this.state = {
        bid_date: '',
        bid_name: '',
        organization_name: '',
        user_name: '',
        user_position: '',
        e_mail: '',
        formValid: true
      };
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.bid !== newProps.bid) {
      this.setState({
        bid_id: newProps.bid.bid_id,
        bid_date: newProps.bid.bid_date,
        bid_name: newProps.bid.bid_name,
        organization_name: newProps.bid.organization_name,
        user_name: newProps.bid.user_name,
        user_position: newProps.bid.user_position,
        e_mail: newProps.bid.e_mail
      });
    }
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

  validateBid(bid) {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (
      bid.BidNumber.trim() === '' ||
      bid.OrganizationName.trim() === '' ||
      bid.UserName.trim() === '' ||
      bid.UserPosition.trim() === '' ||
      !validEmailRegex.test(bid.Email)
    ) {
      return false;
    } else {
      return true;
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const obj = {
      BidNumber: this.state.bid_name,
      OrganizationName: this.state.organization_name,
      UserName: this.state.user_name,
      UserPosition: this.state.user_position,
      Email: this.state.e_mail
    };
    if (this.props.bid) {
      obj.BidId = this.state.bid_id;
      obj.BidDate = this.state.bid_date;
    }
    if (this.validateBid(obj)) {
      this.props.ServerActionCallback(obj);

      this.setState({
        bid_name: '',
        organization_name: '',
        user_name: '',
        user_position: '',
        e_mail: ''
      });
    } else {
      this.setState({ formValid: false });
    }
  }

  render() {
    let validationMessage;

    if (this.state.formValid) {
      validationMessage = <div></div>;
    } else {
      validationMessage = (
        <div style={{ color: 'red', fontSize: 26 }}>
          E-mail должен быть корретный и поля не должны быть пустыми!
        </div>
      );
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">{this.props.HeaderText}</h3>
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
          {validationMessage}

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
