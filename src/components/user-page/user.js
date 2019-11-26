import React from 'react';
import s from "./user.module.css";
import male from "../../image/male.png";
import female from "../../image/female.png";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const User = ({user, onDeleted, hasError}) => {
    if(!user) {
        return <Spinner />
    }
    if(hasError){
        return <ErrorIndicator />
    }
    const {id, gender, first_name, job, birth_date, biography, is_active } = user;
    return (
        <div className={s.user}>
            {
                is_active ? <span className={s.online}>Online</span>
                          : <span className={s.offline}>Offline</span>
            }
            {
                !gender.includes('female') ? <img className={s.male} src={male} alt='male' />
                    : <img className={s.female} src={female} alt='female' />
            }
            <h3 className={s.name}>{first_name} {user.last_name}</h3>
            <span className={s.job}>Job: {job}</span>
            <span className={s.birthDate}>Birth date: {birth_date}</span>
            <span className={s.biography}>Biography: {biography}</span>
            <button onClick={() => onDeleted(id)} className={s.delete}>Delete user</button>
        </div>
    )
};

export default User;