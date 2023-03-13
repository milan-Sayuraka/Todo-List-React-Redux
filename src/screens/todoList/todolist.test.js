import renderer from 'react-test-renderer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import Search from '../../components/search/search'
import TodoList from './todolist';

jest.mock('react-redux');
jest.mock('../../components/TodoItem');
jest.mock('../../components/search/search');

const renderTree = tree => renderer.create(tree);
describe('<TodoList>', () => {
  it('should render component', () => {
    expect(renderTree(<TodoList 
    />).toJSON()).toMatchSnapshot();
  });
  
});