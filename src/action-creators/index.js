

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
