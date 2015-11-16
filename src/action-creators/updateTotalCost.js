// action creator


export function updateTotalCost (totalCost) {
  console.log('action')
  return {
    type: 'TOTAL_COST',
    payload: totalCost
  }
}

// export function updateTotalCharge (totalCost) {
//   console.log('action')
//   return {
//     type: TOTAL_COST,
//     payload: totalCost
//   }
// }
