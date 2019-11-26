import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import UserForm from "./form";
import {clearUserAC, createUser, editUser} from "../../actions/actions";
import {Link} from "react-router-dom";
import s from './form.module.css';

class FormContainer extends Component {
    
    submit = (value) => {
        const { user, createUser, editUser } = this.props;
        user ? editUser(JSON.stringify(value)) : createUser(JSON.stringify(value))
        console.log(JSON.stringify(value))
    };

    newId = 1000;

    initialValue = {
        id: this.props.user.id || this.newId++,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        birth_date: this.props.user.birth_date,
        gender: this.props.user.gender,
        job: this.props.user.job,
        biography: this.props.user.biography,
        is_active: this.props.user.is_active
    };

    render() {
        const { clearUserAC } = this.props;
        return (
            <Fragment>
                <Link className={s.link} to='/'>
                    <button className={s.usersListBtn} onClick={ clearUserAC }>Users list</button>
                </Link>
                <UserForm user={this.props.user} initialValues={this.initialValue} onSubmit={this.submit}/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        user: users.user
    }
};



export default connect(mapStateToProps, {clearUserAC, createUser, editUser })(FormContainer);