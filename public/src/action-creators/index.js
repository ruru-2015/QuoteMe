

export function updateTotalCharge (totalCharge) {
  console.log('action: totalCharge')
  return {
    type: 'TOTAL_CHARGE',
    payload: totalCharge
  }
}

export function updateTotalCost (totalCost) {
  console.log('action: totalCost')
  return {
    type: 'TOTAL_COST',
    payload: totalCost
  }
}
export function updateName (name) {
  console.log('action: name')
  return {
    type: 'NAME',
    payload: name
  }
}
export function updateEName (ename) {
  console.log('action: ename')
  return {
    type: 'ENAME',
    payload: ename
  }
}

export function updateeTotalCost (etotalCost) {
  console.log('action: etotalCost')
  return {
    type: 'ETOTAL_COST',
    payload: etotalCost
  }
}



export function updateeTotalCharge (etotalCharge) {
  console.log('action: etotalCharge')
  return {
    type: 'ETOTAL_CHARGE',
    payload: etotalCharge
  }
}

export function addJob(job) {
  console.log('action: job')
  return {
    type: 'ADD_JOB',
    name:name,
    payload: job
  }
}

export function addItem(item) {
  console.log('action: item')
  return {
    type: 'ADD_ITEM',
      payload: item
  }
}
