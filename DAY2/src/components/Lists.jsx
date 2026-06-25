import List from "./List";
import VideoCard from "./VideoCard";

const Lists = () => {
  const datas = [
    { id: 1, name: "P Chandra Swaroop" },
    { id: 2, name: "P Jyothi Swaroop" },
  ];
  const MOCK_VIDEOS = [
    {
      id: 1,
      title:
        "Palindrome Linked List | Fast & Slow Pointer + Reverse Pattern | Java, Python & C++",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxspqL7lpuNUf90R5pEeEsjAeeZqfoGi4CuOu3V7ChA&s=10",
      duration: "13:30",
      channelName: "RisingBrain",
      views: "190",
      uploadedAt: "20 hours ago",
    },
    {
      id: 2,
      title:
        "Reverse a Linked List | Iterative & Recursive Approach | Java, Python & C++",
      thumbnailUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
      duration: "13:05",
      channelName: "RisingBrain",
      views: "236",
      uploadedAt: "1 day ago",
    },
    {
      id: 3,
      title:
        "Palindrome Linked List | Fast & Slow Pointer + Reverse Pattern | Java, Python & C++",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxspqL7lpuNUf90R5pEeEsjAeeZqfoGi4CuOu3V7ChA&s=10",
      duration: "13:30",
      channelName: "RisingBrain",
      views: "190",
      uploadedAt: "20 hours ago",
    },
    {
      id: 4,
      title:
        "Reverse a Linked List | Iterative & Recursive Approach | Java, Python & C++",
      thumbnailUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
      duration: "13:05",
      channelName: "RisingBrain",
      views: "236",
      uploadedAt: "1 day ago",
    },
    {
      id: 6,
      title:
        "Palindrome Linked List | Fast & Slow Pointer + Reverse Pattern | Java, Python & C++",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxspqL7lpuNUf90R5pEeEsjAeeZqfoGi4CuOu3V7ChA&s=10",
      duration: "13:30",
      channelName: "RisingBrain",
      views: "190",
      uploadedAt: "20 hours ago",
    },
    {
      id: 6,
      title:
        "Reverse a Linked List | Iterative & Recursive Approach | Java, Python & C++",
      thumbnailUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
      duration: "13:05",
      channelName: "RisingBrain",
      views: "236",
      uploadedAt: "1 day ago",
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full h-screen">
      <List datas={datas} />
      <VideoCard MOCK_VIDEOS={MOCK_VIDEOS} />
    </div>
  );
};

export default Lists;
