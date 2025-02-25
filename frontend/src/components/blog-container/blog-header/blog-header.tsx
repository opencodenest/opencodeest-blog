interface BlogHeaderProps {
    title: string;
    author: string;
    readTime: string;
    date: string;
  }
  
  export default function BlogHeader({ title, author, readTime, date }: BlogHeaderProps) {
    return (
      <div className="blog-header pb-5 border-b border-gray-300">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h1>
        <div className="text-gray-600 text-sm mt-5 flex items-center space-x-4">
            <p>
              <strong className="text-lg">{author}</strong> 
            </p>
            <p>
              {readTime} · {date}
            </p>
        </div>
      </div>
    );
  }
  