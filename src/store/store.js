// import { configureStore } from "@reduxjs/toolkit";
// import { rememberReducer, rememberEnhancer } from 'redux-remember';
// import products from './reducers/products';
//
// const rememberedKeys = ['products'];
//
// const store = configureStore({
//     reducer: rememberReducer({
//         products
//     }),
//     enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
//         rememberEnhancer(
//             window.localStorage,
//             rememberedKeys
//         )
//     )
// });
//
//
// export default store;