import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './../TableRow/TableRow';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { bids: [] };
  }
  fetchData() {
    axios
      .get('http://localhost:1623/api/bids')
      .then(response => {
        console.log(response.data);
        this.setState({ bids: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    debugger;
    // this.fetchData();
  }
  tabRow() {
    return this.state.bids.map(function(bid, i) {
      bid.BidDate = new Date(bid.BidDate).toLocaleDateString();
      return <TableRow bid={bid} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Список заявок</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Дата заявки</th>
              <th>Номер заявки</th>
              <th>Наименование организации</th>
              <th>ФИО пользователя</th>
              <th>Должность</th>
              <th>E-Mail</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
