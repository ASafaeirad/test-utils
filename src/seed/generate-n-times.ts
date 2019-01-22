import fakeIntRange from './fake-int-range';

type Options = {
  includeCounter?: boolean,
  counterStart?: number
};

const generateNTimes = async (countInput: number | [number, number] = 0, generator: any, { includeCounter, counterStart = 0 }: Options = {}) => {
  let count;

  if (typeof countInput === 'number') {
    count = countInput;
  } else if (countInput.length > 1) {
    count = fakeIntRange(countInput[0], countInput[1]);
  } else {
    throw Error('Count arg sould be number or array type');
  }

  const doc = Array(count).fill(generator);

  if (includeCounter) {
    return Promise.all(doc.map((generate, index) => generate({ counter: index + counterStart })));
  }

  return Promise.all(doc.map(generate => generate()));
};

export default generateNTimes;
