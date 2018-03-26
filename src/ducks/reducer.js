
// // initialize state
// let initialState = {
//     num: 0
// }
// //const variables
// //helpful for debugging app and preventing bugs
// const INCREASE = 'INCREASE';

// //reducer function
// export default (state=initialState, action) => {
//     switch (action.type) {
//         case INCREASE:
//          return Object.assign({}, state, {num: state.num + 10})
//         default: 
//             return state;
//     }
// };

// // Action Creator
// //are functions that return actions
// // actions are objects with up to two key vlue pairs--- type (required),
// // and payload (optional)
// export function increaseNum(){
//     return {
//         type: INCREASE
//     }
// }