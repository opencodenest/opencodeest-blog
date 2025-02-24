interface BlogHeaderProps {
    title: string;
    author: string;
    readTime: string;
    date: string;
  }
  
  export default function BlogHeader({ title, author, readTime, date }: BlogHeaderProps) {
    return (
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="text-gray-600 text-sm mt-2">
          <p>
            <strong>{author}</strong> 
          </p>
          <p>
            {readTime} · {date}
          </p>
        </div>
      </div>
    );
  }
  