import React, {Component} from "react";
import { connect } from "react-redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Grid from "../common/template/layout/grid";
import Input from "../common/form/Input";

class CreditList extends Component {

    add(index, item ={}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    } 

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'credits', index)
        }
    }

    rendeRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`}component={Input} 
                    placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits[${index}].value`} component={Input} 
                    placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.rendeRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = {arrayInsert, arrayRemove}
export default connect(null, mapDispatchToProps) (CreditList)