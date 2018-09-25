/**
 * Get doc generator and count input to create N fake document
 * @param {number | number[]} countInput - Fake doc count or range
 * @param {function} generator - Doc Generator Function
 * @param {object} options - Contains includeCounter that pass index as param to generator function
 */
const fakeIntRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default fakeIntRange;
