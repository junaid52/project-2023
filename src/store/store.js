import {configureStore} from '@reduxjs/toolkit';
import blogPostsSlice from './blogPostSlice';
const store = configureStore({
    reducer: {blogPosts: blogPostsSlice}
})
export default store;