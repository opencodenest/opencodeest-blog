import './blog-content.css';
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";

interface BlogPostProps {
  content: string;
}

export default function BlogContent({ content }: BlogPostProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div
      className="pb-10 blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}