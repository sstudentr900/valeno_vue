const validate = {
    email(obj) {
        // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regex = /\S+@\S+\.\S+/;
        return regex.test(obj.value);
    },
    required(obj) {
        return obj.value;
    },
    phone(obj) {
        // const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const regex = /\d{8,15}/;
        return regex.test(obj.value);
    },
    max(obj) {
        return obj.value.length < obj.valid.max.number;
    },
    min(obj) {
        return obj.value.length > obj.valid.min.number;
    },
}
export function formIsValid(obj) {
    let valid = obj.valid;
    if (!valid) return; //'' 排除驗證
    // console.log(valid);
    Object.entries(valid).some(([Key, value]) => {
        obj.msg = '';
        //驗證有錯誤
        // console.log(Key, obj, validate[Key](obj));
        if (!validate[Key](obj)) {
            obj.msg = obj.valid[Key].msg;
            return true;
        };
    })
};
export function formIsAllValid(form) {
    Object.entries(form).forEach(([key, value]) => formIsValid(form[key]));
    return Object.entries(form).find(([key, value]) => value.msg != '')
};