/**
 * Validates password based on requirements:
 * 1. At least six characters long
 * 2. contains a lowercase letter
 * 3. contains an uppercase letter
 * 4. contains a number
 * @param {string} password
 * @return {boolean} True if Password mathes requirements (look in the test)
 */
export function validate(password) {
    return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}

// console.log(validate('Password123'));
