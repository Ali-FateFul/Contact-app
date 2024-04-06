export const validate = (data) => {
    const errors = {};
    if(!data.fname.trim()) {
        errors.fname = "Enter the name !!";
    } else {
        delete errors.fname;
    }
    if(!data.lname.trim()) {
        errors.lname = "Enter the Last name";
    } else {
        delete errors.lname;
    }
    if(!data.email) {
        errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Please enter a valid email"
    } else {
        delete errors.email;
    }
    if(!data.number) {
        errors.number = "Please enter a number";
    } else if(!data.number.length == 3) {
        errors.number = "Number is Wrong";
    } else {
        delete errors.number;
    }

    return errors;
}