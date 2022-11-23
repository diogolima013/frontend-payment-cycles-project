import React, { Component } from "react";
import { bindActionsCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
        
    }

    render() {
        console.log(this.props.getList)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = {getList}
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)