/**
 * A function used to get parsed values from localStorage
 * @param {string} key key localStorage key
 * @returns JSON value from localstorage, undefined in case of errors
 */

export const getValue = (key) => {
    try{
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value);
        return parsedValue;
    }
    catch(e) {
        return undefined;
    }
}

/**
 * 
 * @param {string} key key whose values is to be updated in JSON
 * @param {JSON} value value to be stored in localStorage
 */

export const updateValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));

}