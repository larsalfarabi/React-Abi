// import { legacy_createStore as createStore, combineReducers } from "redux";

//Membuat state --------------------------------

// const initialState = {
//   value: 0,
//   status: "",
// };

//membuat reducer => function untuk merubah value dari state redux --------------------------------

// export const reducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       value: state.value + 1,
//       status: action.status,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       value: state.value - 1,
//       status: action.status,
//     };
//   }

//   return state;
// };

// membuat action --------------------------------

// export const increment = () => {
//   return {
//     type: "INCREMENT",
//     status: "berhasil ditambah",
//   };
// };

// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//     status: "berhasil dikurang",
//   };
// };

//Membuat state --------------------------------

// const colorState = {
//   color: "#f54242",
// };

//membuat reducer => function untuk merubah value dari state redux --------------------------------

// const colorReducer = (state = colorState, action) => {
//   if (action.type === "change") {
//     return {
//       color: action.color,
//     };
//   }
//   if (action.type === "return") {
//     return {
//       color: "#f54242",
//     };
//   }

//   return state;
// };

// export --------------------------------

// const allReducers = combineReducers({
//   count: reducer,
//   color: colorReducer,
// });

// membuat store --------------------------------

// export const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// membuat logika menggunakan Switch Case --------------------------------

// switch (action.type) {
//   case "INCREMENT":
//     console.log(state);
//     return {
//       ...state,
//       value: state.value + 1,
//       status: action.status,
//     };
//   case "DECREMENT":
//     return {
//       ...state,
//       value: state.value - 1,
//       status: action.status,
//     };
//   default:
//     return state;
// }
