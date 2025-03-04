import React, { useState, useEffect } from 'react';
import BlogContent from "./blog-content/blog-content";
import BlogHeader from "./blog-header/blog-header";
import "./blog-container.css";
import { useParams } from 'react-router-dom';
import config from '../../config';

interface BlogPostDataProps {
  title: string;
  author: string;
  readTime: string;
  date: string;
  content: string;
}

function BlogContainer() {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState<BlogPostDataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/blog/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data: BlogPostDataProps = await response.json();
        setBlogData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  useEffect(() => {
    if (blogData) {
      document.title = `${blogData.title} - OpenCodeNest Blog`;
      document.querySelector('meta[name="description"]')?.setAttribute("content", blogData.content.substring(0, 160));
      document.querySelector('meta[name="keywords"]')?.setAttribute("content", `${blogData.title}, ${blogData.author}, blog`);
      document.querySelector('meta[name="author"]')?.setAttribute("content", blogData.author);
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", blogData.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", blogData.content.substring(0, 160));
      document.querySelector('meta[property="og:image"]')?.setAttribute("content", "URL_TO_YOUR_IMAGE");
      document.querySelector('meta[property="og:url"]')?.setAttribute("content", `http://yourwebsite.com/blog/${slug}`);
    }
  }, [blogData, slug]);

  useEffect(() => {
    if (blogData) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://opencodenest.org/blog/${slug}`;
      document.head.appendChild(link);
    }
  }, [blogData, slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogData) {
    return <div>No blog data found</div>;
  }

  return (
    <div className="pl-4 pr-4 sm:pl-0 sm:pr-0 pt-30 w-200 h-full text-lg">
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blogData.title}",
            "author": {
              "@type": "Person",
              "name": "${blogData.author}"
            },
            "datePublished": "${blogData.date}",
            "dateModified": "${blogData.date}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "http://yourwebsite.com/blog/${slug}"
            },
            "articleBody": "${blogData.content.replace(/"/g, '\\"')}"

          }
        `}
      </script>
      <BlogHeader
        title={blogData.title}
        author={blogData.author}
        readTime={blogData.readTime}
        date={blogData.date}
      />
      <BlogContent content={blogData.content} />
    </div>
  );
}

export default BlogContainer;