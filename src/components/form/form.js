import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './form.module.css';
import {date, maxLength, required} from "../../utils/validators";
import {Input, Select, Textarea} from "../../utils/form-controls";
import ErrorIndicator from "../error-indicator/error-indicator";

const maxLength256 = maxLength(256);
const maxLength1024 = maxLength(1024);

let UserForm = (props) => {
    const { handleSubmit, user, hasError } = props;

    if(hasError) {
        return <ErrorIndicator />
    }
    return(
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.fieldContainer}>
                <label className={s.label}>First Name</label>
                <Field className={s.field} validate={[required, maxLength256]} name="first_name" component={Input} type="text" />
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Last Name</label>
                <Field className={s.field} validate={[required, maxLength256]} name="last_name" component={Input} type="text" />
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Birth day</label>
                <Field className={s.field} validate={[required, date]} name="birth_date" component={Input} type="text" />
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Gender</label>
                <Field className={s.field} validate={[required]} name="gender" component={Select}>
                    <option></option>
                    <option>male</option>
                    <option>female</option>
                </Field>
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Profession</label>
                <Field className={s.field} validate={[required, maxLength256]} name="job" component={Input} type="text" />
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Biography</label>
                <Field className={s.textArea} validate={[required, maxLength1024]} name="biography" component={Textarea} type="text" />
            </div>
            <div className={s.fieldContainer}>
                <label className={s.label}>Is active</label>
                <Field className={s.field} name="is_active" component="input" type="checkbox" />
            </div>
                {
                    !user ? <button className={s.btn} type="submit">Create user</button>
                          : <button className={s.btn} type="submit">Change user</button>
                }
        </form>
    )
}

UserForm = reduxForm({
    form: 'form'
})(UserForm);

export default UserForm;