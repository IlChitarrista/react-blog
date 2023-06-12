import Title from "./Title";
import Link from "./Link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";

const Post = ({ post, setSelectedPost }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/Markdown/${post.md}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [post.md]);
  return (
    <div className="post">
      <div className="preTitle">
        <button onClick={() => setSelectedPost(undefined)}>Home</button>
        <div>
          <h2>
            {post.date} | {post.lang}
          </h2>
          <h2>{post.author}</h2>
        </div>
      </div>
      <ReactMarkdown className="markdown" components={{ h1: Title, a: Link }}>
        {markdown}
      </ReactMarkdown>
      <h3 id="signature">{post.author}</h3>
    </div>
  );
};

export default Post;
