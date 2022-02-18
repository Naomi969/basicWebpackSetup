require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import   {App}  from './App';
import './styles/images.scss';
import './styles/style.scss';
import './styles/App.scss';

// const appElement = document.getElementById('app');

// ReactDOM.render(<App />, appElement);

ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('app')
  );