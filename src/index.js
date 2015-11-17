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

  jobState: { jobs: [], finalCost: 0, finalCharge: 0 },
  itemState:{items:[], efinalCost: 0, efinalCharge: 0},
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

function jobStateReducer (state = { jobs: [], finalCost: 0, finalCharge:0 }, action) {
    if(action.type === 'ADD_JOB'){
      return {
        jobs: [...state.jobs, action.payload ],
        finalCost: (state.finalCost + action.payload.totalCost),
        finalCharge: (state.finalCharge + action.payload.totalCharge)
      }
    } else {
      return state
    }
}



function itemStateReducer (state = { items: [], efinalCost: 0, efinalCharge:0 }, action) {
  if(action.type === 'ADD_ITEM'){
      return {
        items: [...state.items, action.payload ],
        efinalCost: (state.efinalCost + action.payload.etotalCost),
        efinalCharge: (state.efinalCharge + action.payload.etotalCharge)

      }
    } else {
      return state
    }
}

 function quoteMap(state = InitialState, action) {
  return {
    activeJob: activeJobReducer(state.activeJob, action),
    jobState: jobStateReducer(state.jobState, action),
    itemState: itemStateReducer(state.itemState, action),
  }
}

const store = createStore(quoteMap)

ReactDOM.render(
  <Provider store={store} >
    <Layout />
  </Provider>,
  document.getElementById('app')
);
