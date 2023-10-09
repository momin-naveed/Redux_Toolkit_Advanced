import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Momin Naveed' },
  { id: '1', name: 'Adeel Nasir' },
  { id: '2', name: 'Saim Ahmad' },
];
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
