import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기1',
    done: true,
  },
  {
    id: 2,
    text: '프로젝트 생성하기2',
    done: true,
  },
  {
    id: 3,
    text: '프로젝트 생성하기3',
    done: false,
  },
  {
    id: 4,
    text: '프로젝트 생성하기4',
    done: false,
  },
];

/* 
  CREATE
  TOGGLE
  REMOVE
*/
function todoReducer(state, action) {
  switch (action.type) {
  case 'CREATE':
    return state.concat(action.todo);
  case 'TOGGLE':
    return state.map(
      todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
    )
  case 'REMOVE':
    return state.filter(todo => todo.id !== action.id);
  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.ProVider value={state}>
      <TodoDispatchContext value={dispatch}>
        <TodoNextIdContext value={nextId}>
          {children}
        </TodoNextIdContext>
      </TodoDispatchContext>
    </TodoStateContext.ProVider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoDispatchContext);
}