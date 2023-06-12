import { useEffect, useState } from "react";
import Card from "./Card";
import Post from "./Post";

const Container = ({ data }) => {
  const [selectedPost, setSelectedPost] = useState(undefined);

  return (
    <div>
      {selectedPost ? (
        <Post post={selectedPost} setSelectedPost={setSelectedPost} />
      ) : (
        <div className="container">
          <h2>Posts</h2>
          {data.map((post, idx) => {
            return (
              <Card post={post} key={idx} setSelectedPost={setSelectedPost} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Container;
