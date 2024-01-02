import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../service/api";

export const fetchUserListAction = createAsyncThunk("fetchUserList", async () => {
  let res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
  return res.data.content;
});

const initialState = {
  users: [],
};

const adminUserSlice = createSlice({
  name: "adminUserSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserListAction.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {} = adminUserSlice.actions;

export default adminUserSlice.reducer;
// rxslice
