import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import { createStore  } from 'redux'
import { Provider } from 'react-redux'

// action types

// state
const InitialState = {
  totalCost: 0,
  totalCharge: 0
}

// reducer
function totalCostReducer  (state = InitialState, action) {
  if (action.type === 'TOTAL_COST') {
    return Object.assign({}, state, {
      totalCost: action.payload
    })
  }
else if (action.type === 'TOTAL_CHARGE') {
    return Object.assign({}, state, {
      totalCharge: action.payload
    })
  }
  else {
    return state
  }
}



const store = createStore(totalCostReducer)

ReactDOM.render(
  <Provider store={store} >
    <Layout />
  </Provider>,
  document.getElementById('app')
);
