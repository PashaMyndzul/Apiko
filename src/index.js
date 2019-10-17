import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

function appendTo(element,  child) {
    if (typeof child === 'object') {
      element.appendChild(child);
    } else {
      element.innerHTML += child;
    }
  }

  function anElement(element, children) {
    if (typeof element === 'function') {
      return element();
    } else {
      const anElement = document.createElement(element);

      if (children) {
        if (Array.isArray(children)) {
          children.forEach((child) => appendTo(anElement, child));
        } else {
          appendTo(anElement, children);
        }
      }

      return anElement;
    }
  }

  function createElement(el, props, children) {
    return anElement(el, children);
  }

  window.React = {
    createElement,
     render: (el, domEl) => {
      domEl.appendChild(el);
    },
  };

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', null, 'Text content' ),
  ],
);

ReactDOM.render(app, document.getElementById('root'));
