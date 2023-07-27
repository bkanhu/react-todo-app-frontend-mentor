import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
export default function App() {
  return (
    <div className="container">
      <Header />
      <Todo />
    </div>
  );
}
