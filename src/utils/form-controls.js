import React from 'react';
import s from './form-controle.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? s.error : '')}>
                <input {...props} {...input} />
            </div>
            { hasError &&
            <span className={s.message}>{meta.error}</span> }
        </div>
    );
};

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? s.textAreaError : '')}>
                <textarea {...props} {...input} />
            </div>
            { hasError &&
            <span className={s.message}>{meta.error}</span> }
        </div>
    );
};

export const Select = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? s.error : '')}>
                <select {...props} {...input} />
            </div>
            { hasError &&
            <span className={s.message}>{meta.error}</span> }
        </div>
    );
};