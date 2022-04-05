export default ({ isAuth, values, errors }) => {

    const rules = {
            email: (value) => {
                if (!value) {
                    errors.email = "Введите E-Mail";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    errors.email = "Неверный E-Mail";
                }
            },
            password: (value) => {
                    if (!value) {
                        errors.passvord = "Введите пароль";
                    } else if (!/(?=.*[a-zA-Z0-9])/i.test(value)) {
                        errors.passvord = isAuth ? "Неверный пароль" : "Слишком лёгкий пароль";
                    }
            },
        }

    Object.keys(values).forEach(
        key => rules[key] && rules[key](errors, values[key]));
};