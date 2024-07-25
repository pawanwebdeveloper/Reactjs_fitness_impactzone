import { entries, notEqual, values } from './javascript';
import formValidation from './validations';

const showFormErrors = (data, setData, ignore) => {
    let formErrors = {};
    entries(data).forEach(([key, value]) => {
        formErrors = {
            ...formErrors,
            ...formValidation(key, value, data, ignore),
        };
    });
    ignore?.forEach((name) => {
        if (formErrors[name]) {
            formErrors[name] = '';
        }
    });
    setData({ ...data, formErrors });
    return !values(formErrors).some((v) => notEqual(v, ''));
};
export {
    showFormErrors,
};
