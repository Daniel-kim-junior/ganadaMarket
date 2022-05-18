import { configureStore } from '@reduxjs/toolkit';
import { ShopFilterSlice } from './reducers/ShopNavFilter';
import { ShopDataFilterSlice } from './reducers/ShopDataFilter';
import UserSlice from './reducers/UserSlice';
import { paySlice } from './reducers/PaySlice';

const Store = configureStore({
  reducer: {
    ShopNavFilter: ShopFilterSlice.reducer,
    ShopDataFilter: ShopDataFilterSlice.reducer,
    user: UserSlice.reducer,
    pay: paySlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
