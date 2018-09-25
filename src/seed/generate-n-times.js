import fakeIntRage from './fake-int-range';

const generateNTimes = async (countInput = 0, generator, { includeCounter } = {}) => {
  let count;

  if (typeof countInput === 'number') {
    count = countInput;
  } else if (countInput.length > 1) {
    count = fakeIntRage(countInput[0], countInput[1]);
  } else {
    throw Error('Count arg sould be number or array type');
  }

  const doc = new Array(count).fill(generator);

  if (includeCounter) {
    return Promise.all(doc.map((generate, index) => generate(index)));
  }

  return Promise.all(doc.map(generate => generate()));
};

export default generateNTimes;
