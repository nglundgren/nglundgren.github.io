import React from 'react';
import ReactDOM from 'react-dom';

const headerCode = (
<nav>
  <a href=".">Link 1</a>
  <a href=".">Link 2</a>
  <a href=".">Link 3</a>
</nav>
);

const mainCode = (
  <div>
    <p>This is where the content goes!</p>
  </div>
)

const footerCode = (
<div>
  <a href=".">Link 1</a>
  <a href=".">Link 2</a>
  <a href=".">Link 3</a>
</div>
);

ReactDOM.render(headerCode, document.getElementById('headerEl'));
ReactDOM.render(mainCode, document.getElementById('mainEl'));
ReactDOM.render(footerCode, document.getElementById('footerEl'));
