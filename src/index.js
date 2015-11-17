import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout'
import { createStore  } from 'redux'
import { Provider } from 'react-redux'

// action types

// state
const InitialState = {
  activeJob : {
    name:'',
    totalCost: 0,
    totalCharge: 0,
    etotalCost: 0,
    etotalCharge: 0,
  },
  jobs: [],
  items:[],
}

// reducer

function activeJobReducer (state = {}, action) {
  if (action.type === 'TOTAL_COST') {
    return Object.assign({}, state, {
      totalCost: action.payload,

    })
  }
else if (action.type === 'TOTAL_CHARGE') {
    return Object.assign({}, state, {
      totalCharge: action.payload,

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
   else if (action.type === 'NAME') {
    return Object.assign({}, state, {
      name: action.payload
    })
  }
   else if (action.type === 'ENAME') {
    return Object.assign({}, state, {
      ename: action.payload
    })
  }
  else {
    return state
  }
}

function jobsReducer (state = [], action) {
    if(action.type === 'ADD_JOB'){
      return [
        ...state,
        action.payload
      ]
    } else {
      return state
    }
}

function itemsReducer (state = [], action) {
  if(action.type === 'ADD_ITEM'){
      return[
        ...state,
        action.payload
      ]
    } else {
      return state
    }
}

 function quoteMap(state = InitialState, action) {
  return {
    activeJob: activeJobReducer(state.activeJob, action),
    jobs: jobsReducer(state.jobs, action),
    items: itemsReducer(state.items, action)

  }
}

const store = createStore(quoteMap)

ReactDOM.render(
  <Provider store={store} >
    <Layout />
  </Provider>,
  document.getElementById('app')
);
