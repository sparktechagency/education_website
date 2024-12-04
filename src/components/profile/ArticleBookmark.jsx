import ArticleBookmarks from "../articlebookmark/ArticleBookmarks";
import img from "../../../public/home/popular.png";
import { MdArrowBack } from "react-icons/md";

const ArticleBookmark = () => {
  const videos = [
    {
      id: 1,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 2,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 3,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 4,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 5,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 6,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 7,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    // Add more videos as needed
  ];
  return (
    <div>
      <div className="max-w-[1400px] m-auto mb-20">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {videos.map((videose) => (
            <div key={videose.id}>
              <ArticleBookmarks videose={videose}></ArticleBookmarks>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBookmark;
