import { PostSliceState } from "./postsSlice";

// A mock function to mimic making an async request for data
export const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result: { data: PostSliceState[] } = await response.json();
    return result;
  };
  