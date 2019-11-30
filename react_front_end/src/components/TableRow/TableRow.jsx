import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete('http://localhost:1623/api/bids/' + this.props.bid.BidId)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.bid.BidDate}</td>
        <td>{this.props.bid.BidNumber}</td>
        <td>{this.props.bid.OrganizationName}</td>
        <td>{this.props.bid.UserName}</td>
        <td>{this.props.bid.UserPosition}</td>
        <td>{this.props.bid.Email}</td>
        <td>
          <Link
            to={'/edit/' + this.props.bid.BidId}
            className="btn btn-primary"
          >
            Изменить
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
