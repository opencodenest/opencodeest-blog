import React, { useState, useEffect } from 'react';
import BlogListCard from "./blog-list-card/blog-list-card";
import './blog-list-container.css';
import { Link } from 'react-router-dom';
import config from '../../config';

function BlogListContainer() {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/blog-list`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog list');
        }
        const data = await response.json();
        setBlogList(data);
      } catch (err) {
        setError(err.message);
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
          <Link to={`/blog/${blog.slug}`} className="block">
          <BlogListCard key={index} {...blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogListContainer;