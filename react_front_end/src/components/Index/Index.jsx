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
      .get(this.props.serverUrl)
      .then(response => {
        this.setState({ bids: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  delete(id) {
    this.setState(prevState => ({
      bids: this.state.bids.filter(bid => bid.BidId !== id)
    }));
  }
  tabRow(delCallback) {
    return this.state.bids.map((bid, i) => {
      bid.BidDate = new Date(bid.BidDate).toLocaleDateString();
      return (
        <TableRow
          serverUrl={this.props.serverUrl}
          delete={delCallback.bind(this)}
          bid={bid}
          key={i}
        />
      );
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
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>{this.tabRow(this.delete)}</tbody>
        </table>
      </div>
    );
  }
}
