import { createSlice } from "@reduxjs/toolkit";
const blogPostsSlice = createSlice({
    name: 'blogPosts',
    initialState: {
        posts: [],
        totalPosts: null,
        post: {},
        loading: false
    },
    reducers: {
        updatePosts: (state, action) => {
            state.posts = action.payload.posts;
            state.totalPosts = action.payload.totalPosts;
            state.loading = false;
        },
        getSinglePost: (state, action) => {
           state.post = action.payload.post;
           state.loading = false;
        },
        setLoader: (state, action) => {
            if(action.payload.loading === true) {
                state.loading = action.payload.loading;
            }
            
            if(action.payload.loading === false) {
                state.loading = action.payload.loading;
            }
            
        }
    }
})
export const postsActions = blogPostsSlice.actions;
export const fetchPosts = async (dispatch) => {
    dispatch(postsActions.setLoader({
        loading: true
    }))
    const res = await fetch('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/');
    const posts = await res.json();
    dispatch(postsActions.setLoader({
        loading: false
    }))
    dispatch(
        postsActions.updatePosts({
            posts,
            totalPosts: posts.length,
        })
    )
}
export const fetchPost = (id) => {
    return async (dispatch) => {
        dispatch(postsActions.setLoader({
            loading: true
        }))
        const res = await fetch(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`);
        const post = await res.json();
        dispatch(postsActions.setLoader({
            loading: false
        }))
        dispatch(
            postsActions.getSinglePost({
                post
            })
        )
    }
}

export default blogPostsSlice.reducer;