import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import User from "./user";
import {compose} from "redux";
import {Link, withRouter} from "react-router-dom";
import {requestUser, deleteUser, clearUserAC} from "../../actions/actions";
import s from './user.module.css';

class UserContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.requestUser(id)
    }

    render() {
        const { user, deleteUser, hasError, clearUserAC } = this.props;
        return (
            <Fragment>
                <div className={s.doubleBtnContainer}>
                    <Link to='/'>
                        <button onClick={ clearUserAC } className={s.btn}>Users List</button>
                    </Link>
                    <Link to='/form'>
                        <button className={s.btn}>Change User</button>
                    </Link>
                </div>
                <User user={user} onDeleted={deleteUser} hasError={hasError}/>
            </Fragment>
        )
    }
};

const mapStateToProps = ({users}) => {
    return {
        hasError: users.hasError,
        user: users.user,
        loading: users.loading
    }
};

export default compose(
    connect(mapStateToProps, {requestUser, deleteUser, clearUserAC}),
    withRouter
    )(UserContainer);
