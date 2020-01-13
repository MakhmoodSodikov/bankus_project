import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getLeads} from "../../actions/leads";


export class Leads extends Component {
    render() {
        return (
            <div>
                <h1>Актуальный курс валют различных банков</h1>
                <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Обновить список</a>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ставка в % годовых</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Тинькофф</td>
                        <td>tinkoff@info.ru</td>
                        <td>8%</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Сбербанк</td>
                        <td>sber@sber.ru</td>
                        <td>7.5%</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>ВТБ</td>
                        <td>vtb@vtb.org</td>
                        <td>6.5%</td>
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}


export default Leads
