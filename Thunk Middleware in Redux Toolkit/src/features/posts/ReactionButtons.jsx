import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsDown: '👎',
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  console.log(post, 'apnnnnnn');
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    // console.log('=======>', name);

    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
