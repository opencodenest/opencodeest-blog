import BlogListCard from "./blog-list-card/blog-list-card";
import './blog-list-container.css'

const blogList = [
    {
      title: "Understanding TypeScript: A Beginner's Guide",
      author: "Harshith VS",
      readTime: "5 min read",
      date: "Feb 25, 2025",
      summary: "TypeScript improves JavaScript by adding static types, making your code more scalable and maintainable.",
      imageUrl: "https://respected-warmth-1fd8bc18e3.media.strapiapp.com/jwt_authentication_go_1f232b5340.png",
    },
    {
      title: "Mastering React Performance Optimization",
      author: "John Doe",
      readTime: "7 min read",
      date: "Feb 20, 2025",
      summary: "Learn how to improve your React app's performance using memoization, lazy loading, and React Profiler.",
      imageUrl: "https://www.investopedia.com/thmb/JKI-_tYZJdizkuXsHm5YOQ4pmRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vertical-integration-7a31b884b9564a139c5ec2f7885ff3f0.jpg",
    },
    {
      title: "10 Must-Know JavaScript Features in 2025",
      author: "Jane Smith",
      readTime: "6 min read",
      date: "Feb 18, 2025",
      summary: "Explore the latest JavaScript features, including optional chaining, nullish coalescing, and top-level await.",
      imageUrl: "https://t4.ftcdn.net/jpg/12/36/08/95/360_F_1236089542_LnX94sqwAI9EwnfLVePBdTAFB4QCcXoQ.jpg",
    },
    {
      title: "AI-Powered Coding: The Future of Software Development",
      author: "Sophia White",
      readTime: "7 min read",
      date: "Feb 5, 2025",
      summary: "Explore how AI tools like GitHub Copilot and ChatGPT are changing the way developers write code.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTMTPcjh2X_7sokRGeA6r0mMaKMnISEj1pngF2zgD8k0xRTosd5wnDsL43bDsQSIi-Hk&usqp=CAU",
    },
    {
      title: "Docker and Kubernetes: A Developer’s Guide",
      author: "Emily Davis",
      readTime: "10 min read",
      date: "Jan 30, 2025",
      summary: "Learn how to containerize your applications using Docker and orchestrate them with Kubernetes.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    },
    {
      title: "The Power of GraphQL: Why It’s Better Than REST",
      author: "Robert Brown",
      readTime: "5 min read",
      date: "Jan 25, 2025",
      summary: "Discover how GraphQL provides more flexibility and efficiency over traditional REST APIs.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Nd14s89WucGEa5XrjIQfbkcNwb6JQ5_lS1gAj2YboD07n1sj-R57I4P5nbRnQ9XGfsA&usqp=CAU",
    },
    {
      title: "Cybersecurity for Developers: Best Practices",
      author: "Olivia Wilson",
      readTime: "8 min read",
      date: "Jan 20, 2025",
      summary: "A must-read for developers to secure applications from common vulnerabilities and threats.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDZoznm3MOYqILHTthFQ18J7l0YpeyYZDJA&s",
    },
  ];
  

function BlogListContainer() {
    return (
      <div className="pl-4 pr-4 sm:pl-0 sm:pr-0 pt-30 w-200 h-full text-lg">
        <div className="flex flex-col gap-6">
          {blogList.map((blog, index) => (
            <BlogListCard key={index} {...blog} />
          ))}
        </div>
      </div>
    );
  }
  

export default BlogListContainer;
