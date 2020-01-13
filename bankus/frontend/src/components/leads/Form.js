import React, { Component, Fragment } from 'react';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {getLeads} from "../../actions/leads";

export default class Form extends Component {
    // static propTypes = {
    //     leads: PropTypes.array.isRequired
    // };

    // componentDidMount() {
    //     this.props.getLeads();
    // }

    render() {
        return (

            <Fragment>
                <h2>Ставки в различных банках</h2>
                {/*<table className={'table table-striped'}></table>*/}
                    {/*<thead>*/}
                    {/*<tr>*/}
                        {/*<th>ID</th>*/}
                        {/*<th>Name</th>*/}
                        {/*<th>Email</th>*/}
                        {/*<th>Message</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*{this.props.leads.map(lead => (*/}
                        {/*<tr key = {lead.id}>*/}
                            {/*<td>{lead.id}</td>*/}
                            {/*<td>{lead.name}</td>*/}
                            {/*<td>{lead.email}</td>*/}
                            {/*<td>{lead.message}</td>*/}
                            {/*<td><button className={"btn btn-danger btn-sm"}>Hey</button></td>*/}
                        {/*</tr>*/}
                    {/*))}*/}
                    {/*</tbody>*/}
                    {/*<button type="button" className="btn btn-dark">Посмотреть актуальные котировки банков</button>*/}
            </Fragment>
        )
    }
}

// const mapStateToProps = state => ({
//     leads: state.leads.leads
// });
//
// export default connect(mapStateToProps, {getLeads})(Form);
