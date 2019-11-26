import React, {Component, Fragment} from 'react';
import UsersList from "./users";
import {connect} from "react-redux";
import { usersRequest, deleteUserAC } from "../../actions/actions";
import Spinner from "../spinner/spinner";
import s from './users.module.css';
import {Link} from "react-router-dom";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.usersRequest()
    }

    render() {
        const { users, loading, deleteUserAC } = this.props;
        if(loading) {
            return <Spinner />
        }
        return (
            <Fragment>
                <Link className={s.link} to='/form'>
                    <button className={s.createUsersBtn}>Create User</button>
                </Link>
                <UsersList users={users} onDeleted={deleteUserAC} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        loading: users.loading,
        users: users.users
    }
};

export default connect(mapStateToProps, {usersRequest, deleteUserAC})(UsersContainer);