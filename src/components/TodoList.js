import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TocoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();
  console.log(state)
  return (
    <TocoListBlock>
      <TodoItem text="테스트 1" done />
      <TodoItem text="테스트 2" />
    </TocoListBlock>
  );
}

export default TodoList;