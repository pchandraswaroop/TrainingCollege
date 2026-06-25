const VideoCard = ({ MOCK_VIDEOS = [] }) => {
  return (
    <>
      <div className="min-h-screen p-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >
              <div className="relative h-44 w-full">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                {/* 2. Absolute timestamp badge */}
                <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">
                  {video.duration || "10:24"}
                </span>
              </div>

              <div className=" flex gap-3 px-2 py-2 items-center">
                <div className="bg-gray-500 rounded-full w-10 h-10 shrink-0"></div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.channelName}</p>
                  <p className="text-sm text-gray-600">
                    {video.views} views • {video.uploadedAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCard;
