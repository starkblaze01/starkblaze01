import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllBlogs, fetchAllRepos, type BlogPost, type Repo } from "../api/github";

type Status = "idle" | "loading" | "success" | "error";

type ContentState = {
  repos: Repo[];
  reposStatus: Status;
  reposError: string | null;
  blogs: BlogPost[];
  blogsStatus: Status;
  blogsError: string | null;
};

const initialState: ContentState = {
  repos: [],
  reposStatus: "idle",
  reposError: null,
  blogs: [],
  blogsStatus: "idle",
  blogsError: null,
};

export const loadRepos = createAsyncThunk("content/loadRepos", fetchAllRepos);
export const loadBlogs = createAsyncThunk("content/loadBlogs", fetchAllBlogs);

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRepos.pending, (s) => {
        s.reposStatus = "loading";
        s.reposError = null;
      })
      .addCase(loadRepos.fulfilled, (s, a) => {
        s.reposStatus = "success";
        s.repos = a.payload;
      })
      .addCase(loadRepos.rejected, (s, a) => {
        s.reposStatus = "error";
        s.reposError = a.error.message ?? "Unknown error";
      })
      .addCase(loadBlogs.pending, (s) => {
        s.blogsStatus = "loading";
        s.blogsError = null;
      })
      .addCase(loadBlogs.fulfilled, (s, a) => {
        s.blogsStatus = "success";
        s.blogs = a.payload;
      })
      .addCase(loadBlogs.rejected, (s, a) => {
        s.blogsStatus = "error";
        s.blogsError = a.error.message ?? "Unknown error";
      });
  },
});

export default contentSlice.reducer;
