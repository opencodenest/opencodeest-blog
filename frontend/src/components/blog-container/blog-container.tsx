import BlogContent from "./blog-content/blog-content";
import BlogHeader from "./blog-header/blog-header";
import "./blog-container.css";

interface BlogPostDataProps {
    title: string; 
    author: string; 
    readTime: string; 
    date: string; 
    content: string; 
  }

function BlogContainer( blogdata : BlogPostDataProps) {
  return (
      <div className="pl-4 pr-4 sm:pl-0 sm:pr-0 pt-30 w-200 h-full text-lg">
        <BlogHeader
          title={blogdata.title}
          author={blogdata.author}
          readTime={blogdata.readTime}
          date={blogdata.date}
        />
      <BlogContent content={blogdata.content}/>
      </div>
  );
}

export default BlogContainer;
