import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  getinfor: {
    name: '',
    day: '',
    month: '',
    year: '',
    numbers: {} as Numbers,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.getinfor = action.payload;
    },
  },
});

export const {setDataUser} = authSlice.actions;
export default authSlice.reducer;
