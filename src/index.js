import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import { createStore  } from 'redux'
import { Provider } from 'react-redux'

// action types
const TOTAL_COST = 'TOTAL_COST'

// state
const InitialState = {
  totalCost: 0
}

// reducer
function totalCostReducer  (state = InitialState, action) {
  if (action.type === 'ßTOTAL_COST') {
    return Object.assign({}, state, {
      totalCost: action.payload
    })
  } else {
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
