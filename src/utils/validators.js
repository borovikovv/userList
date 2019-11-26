export const required = value => {
    if(value) return  undefined;
    return 'Fields is Required';
};

export const maxLength = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

export const date = value =>
    value && !/\d{4}(-|\/)\d{2}(-|\/)\d{2}/g.test(value)
        ? 'Invalid date, please type YYYY-MM-DD'
        : undefined;