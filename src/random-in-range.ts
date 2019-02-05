/**
 * Get a random number between two numbers
 * @param {number} min - range min
 * @param {number} max - range max
 * @returns {number}
 */
const randomInRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export default randomInRange;
