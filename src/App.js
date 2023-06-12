import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Title = ({ children }) => {
  return <h1 className="text-center">{children}</h1>;
};

const Em = ({ children }) => {
  return <em className="text-red-500">{children}</em>;
};

function App() {
  const markdown = `# Hello There *General Kenoby*`;
  return (
    <div>
      <ReactMarkdown components={{ h1: Title, em: Em }}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
