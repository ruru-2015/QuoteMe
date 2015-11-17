

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

