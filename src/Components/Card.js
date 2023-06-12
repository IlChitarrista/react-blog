const Card = ({ post, setSelectedPost }) => {
  return (
    <div onClick={() => setSelectedPost(post)} className="card">
      <h3>{post.md}</h3>
      <h4>{post.author}</h4>
      <h4>
        {post.date} | {post.lang}
      </h4>
      <p>{post.description}</p>
    </div>
  );
};

export default Card;
