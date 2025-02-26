interface BlogListCardProps {
    title: string;
    author: string;
    readTime: string;
    date: string;
    summary: string;
    imageUrl: string; // Add image property
  }
  
  export default function BlogListCard({
    title,
    author,
    readTime,
    date,
    summary,
    imageUrl,
  }: BlogListCardProps) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition flex justify-between items-center">
        <div className="flex-1 pr-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {author} · {readTime} · {date}
          </p>
          <p className="text-gray-700 mt-3">{summary}</p>
        </div>
  
        <div className="w-40 h-25 flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    );
  }
  