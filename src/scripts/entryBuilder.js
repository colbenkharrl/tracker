import mock from 'mock-data';

const typeGenerators = {
  TEXT_FIELD: mock.string(10, 30, 'aA'),
  TEXT_AREA: mock.string(20, 100, 'aA'),
  NUMBER: mock.integer(0, 9999),
  RADIO_BUTTON: mock.string(1, 10, 'aA'),
  CHECK_BOXES: mock.string(1, 10, 'aA'),
  COMBO_BOXES: mock.string(1, 10, 'aA'),
  DATE: mock.date(2010, 2018, 'YYYY-MM-DD HH:MM', false),
};

const generateDataRows = (form, rows) => {
  const dataRows = [];

  for (let i = 0; i < rows; i++) {
    const row = {};

    Object.values(form.inputs).forEach(input => {
      row[input.name] = input.options
        ? input.options[getRandomIndex(input.options.length)]
        : typeGenerators[input.type].generate();
    });

    dataRows.push(row);
  }

  return dataRows;
};

const getRandomIndex = length => {
  return Math.floor(Math.random() * Math.floor(length - 1));
};

export default generateDataRows;
