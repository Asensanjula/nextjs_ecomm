export const rules = (values) => {
    return {
        userName: {
            required: { value: true, message: "Name is required!" },
            maxLength: { value: 50, message: "Number of characters exceeded its specified limit" },
            pattern: { value: /^[A-Za-z\s]+$/, message: "Name cannot contain special characters/digits" }
        },
        email: {
            required: { value: true, message: "Email is required!" },
            maxLength: { value: 50, message: "Number of characters exceeded its specified limit" },
            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Invalid Email!" }
        },
        cuPassword: {
            required: { value: true, message: "Password is Required" },
            maxLength: { value: 8, message: "Number of characters exceeded its specified limit" },
            minLength: { value: 6, message: "The length of the password must be between 8 and 15" },
        },
        cf_password: {
            required: { value: true, message: "Confirm Password is Required" },
            validate: {
                sameAs: value => value === values || 'Login password mismatched'
            }
        },
    }
}