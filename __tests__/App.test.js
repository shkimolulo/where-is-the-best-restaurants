import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App Test', () => {
  let App;

  beforeEach(() => {
    App = require('../src/App').default;
  });

  it('renders correctly', () => {
    const json = renderer.create(<App />).toJSON();

    expect(json).toMatchSnapshot();
  });
});
