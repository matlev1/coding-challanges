/**
 * MY SOLUTION
 * Takes a string of chars and returns true or false based on conditions
 * @param {string} pin String containing any character.
 * @return {boolean} True if Inpus contains 4 or 6 positive digits(numbers) only
 */
export function validatePIN(pin) {
    return /^[0-9]+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}

/**
 * BEST SOLUTION
 * Takes a string of chars and returns true or false based on conditions
 * @param {string} pin String containing any character.
 * @return {boolean} True if Inpus contains 4 or 6 positive digits(numbers) only
 */
export function BestvalidatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

// console.log(validatePIN("12.090"));
// console.log(validatePIN("-12345"));
// console.log(validatePIN("12345-"));
// console.log(validatePIN("12.0"));
