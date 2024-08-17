import { createAppSlice } from "@/lib/createAppSlice";
import { fetchPost } from "./postsAPI";

export interface PostSliceState {
    id: number,
    title: string,
    body: string,
    userId: number
}[]
const initialState: PostSliceState = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
}
const postSlice = createAppSlice({
    name: "post",
    initialState,
    reducers: (create) => ({
        getPosts: create.asyncThunk(
            async () => {
                const response = await fetchPost();
                return response;
            }
        )
    }),
    selectors: {
        selectPost: (state) => state,
    }
})

export const { getPosts } =
  postSlice.actions;

export const { selectPost } = postSlice.selectors;