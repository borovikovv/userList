import React from 'react';
import s from './users.module.css';
import female from '../../image/female.png'
import male from '../../image/male.png'
import active from '../../image/active.png'
import noActive from '../../image/dont-active.png'
import { Link } from "react-router-dom";

const UsersList = ({users, onDeleted}) => {
    return <ul className={`${s.users} container`}>
        {
            users.map(user => <li key={user.id} className={s.user}>
                <div className={s.userHeader}>
                    {
                        user.is_active ? <img className={s.active} src={active} alt='online' />
                            : <img className={s.active} src={noActive} alt='offline' />
                    }
                    <button onClick={() => onDeleted(user.id)} className={s.btn}>
                        <i className='fa fa-times btn'></i>
                    </button>
                </div>
                {
                    !user.gender.includes('female') ? <img className={s.male} src={male} alt='male' />
                    : <img className={s.female} src={female} alt='female' />
                }
                <Link className={s.name} to={`user/${user.id}`}>
                    <h3 className={s.name}>{user.first_name} {user.last_name}</h3>
                </Link>
                <span className={s.job}>Job: {user.job}</span>
                <span>Birth date: {user.birth_date}</span>
                <span>Biography: {user.biography}</span>


            </li>)
        }
    </ul>
};

export default UsersList;