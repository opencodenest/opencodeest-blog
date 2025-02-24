import BlogHeader from "../blog-header/blog-header";
import "./blog-container.css";

function BlogContainer() {
  return (
    <>
      <div className="blog-container">
        <h1></h1>

        <BlogHeader
          title="Why TypeScript is Gaining Popularity"
          author="Harshith vs"
          readTime="3 min read"
          date="Sep 28, 2024"
        />
      </div>
    </>
  );
}

export default BlogContainer;
