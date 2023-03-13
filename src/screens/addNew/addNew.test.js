import renderer from 'react-test-renderer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AddNew from './addNew';

jest.mock('react-redux');
jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<AddNew>', () => {
  it('should render component', () => {
    expect(renderTree(<AddNew 
    />).toJSON()).toMatchSnapshot();
  });
  
});