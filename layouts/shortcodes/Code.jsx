import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const HighlightedCode = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
