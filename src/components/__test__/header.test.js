import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../header/header';

it('<Header /> renders properly as expected', () => {
  const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
