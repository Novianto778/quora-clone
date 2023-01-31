import PostAction from './PostAction';
import PostContent from './PostContent/PostContent';
import PostHeader from './PostHeader';
type Props = {};

const PostCard = (props: Props) => {
    return (
        <div className="rounded bg-white pt-2 pb-1 shadow">
            <PostHeader />
            <PostContent />
            <PostAction />
        </div>
    );
};

export default PostCard;
