// store.js
import { configureStore } from '@reduxjs/toolkit';
import counter from './slice/slice';

const store = configureStore({
  reducer: {
    counter: counter,
  },
})
export default store