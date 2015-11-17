import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import { createStore  } from 'redux'
import { Provider } from 'react-redux'

// action types

// state
const InitialState = {
  name:'',
  ename:'',
  totalCost: 0,
  totalCharge: 0,
  etotalCost: 0,
  etotalCharge: 0,
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
  else if (action.type === 'ETOTAL_COST') {
    return Object.assign({}, state, {
      etotalCost: action.payload
    })
  }
  else if (action.type === 'ETOTAL_CHARGE') {
    return Object.assign({}, state, {
      etotalCharge: action.payload
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
