const Title = ({ children, post }) => {
  return (
    <div>
      {/* <h2>{post.date}</h2> */}
      <h1>{children}</h1>
      {/* <h2>{post.author}</h2> */}
    </div>
  );
};

export default Title;
