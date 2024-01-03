type Size = {
  query: string;
  width: number;
};

type ResponseItem = Size | null;

type ValidValue = string | null;

type Response = Size[] | null;

const validateValue = (value: string): ValidValue => {
  if ([0, -1].includes(value.lastIndexOf('px'))) {
    return null;
  }

  if (value.lastIndexOf('px') !== value.length - 2) {
    return null;
  }

  return value.trim();
};

const parseWidth = (value: string): number => {
  return parseInt(value.trim().substring(0, value.length - 2), 10);
};

const parseItem = (item: string): ResponseItem => {
  const validItem = validateValue(item);

  if (validItem === null) {
    return null;
  }

  const parts = validItem.split(')');

  if (parts.length === 1) {
    const width = parseWidth(validItem);

    if (!width) {
      return null;
    }

    return {
      query: '*',
      width,
    };
  }

  if (parts[0].indexOf('(') === -1 || !parts[1]) {
    return null;
  }

  const width = parseWidth(parts[1].trim());

  if (!width) {
    return null;
  }

  return { query: `${parts[0]})`, width };
};

const sizesStringToArray = (sizesString: string): Response => {
  if (!sizesString) {
    return null;
  }

  const trimmed = sizesString.trim();

  const sizes = trimmed.split(',');

  const arr = [];

  for (const value of sizes) {
    const parsedItem = parseItem(value);

    if (!parsedItem) {
      return null;
    }

    arr.push(parsedItem);
  }

  return arr;
};

export default sizesStringToArray;
