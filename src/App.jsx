import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import { ThemeProvider } from './context/ThemeContext';
export default function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <Todo />
      </div>
    </ThemeProvider>
  );
}
