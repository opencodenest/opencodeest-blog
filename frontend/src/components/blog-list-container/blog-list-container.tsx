import { useState, useEffect } from 'react';
import BlogListCard from "./blog-list-card/blog-list-card";
import './blog-list-container.css';
import { Link } from 'react-router-dom';
import config from '../../config';

interface Blog {
  slug: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
  summary: string;
  imageUrl: string;
  [key: string]: any;
}

function BlogListContainer() {
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/blog-list`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog list');
        }
        const data: Blog[] = await response.json(); // Type assertion
        setBlogList(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return <div>Loading blog list...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pl-4 pr-4 sm:pl-0 sm:pr-0 pt-30 w-200 h-full text-lg">
      <div className="flex flex-col gap-6">
        {blogList.map((blog, index) => (
          <Link key={index} to={`/blog/${blog.slug}`} className="block">
            <BlogListCard {...blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogListContainer;