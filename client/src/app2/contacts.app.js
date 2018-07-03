import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Contacts from './Contacts.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Contacts,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById("contacts")
}
