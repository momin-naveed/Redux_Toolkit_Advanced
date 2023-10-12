import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from './postsSlice';
import PostExcerpt from './PostExcerpt';
import { fetchUsers } from '../users/usersSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (postStatus === 'idle') {
      console.log('object');
      dispatch(fetchUsers());
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // const orderedPosts = posts
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  let content;
  if (postStatus === 'loading') {
    content = <p>Loading....</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, i) => (
      <PostExcerpt key={i} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
