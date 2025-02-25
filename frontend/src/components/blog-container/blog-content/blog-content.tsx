import './blog-content.css';

interface BlogPostProps {
    content: string; 
  }

export default function BlogContent({ content } : BlogPostProps) {
    return <div 
    className="blog-content"
    dangerouslySetInnerHTML={{ __html: content }} />;
  }
  