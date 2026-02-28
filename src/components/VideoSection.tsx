type Video = {
  url: string;
  title?: string;
};

function getEmbedUrl(url: string): string {
  // youtu.be/ID or youtube.com/watch?v=ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  const longMatch = url.match(/[?&]v=([^&]+)/);
  if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`;

  // vimeo.com/ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return url;
}

export default function VideoSection({ videos }: { videos: Video[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
      <div className="md:col-span-4">
        <h2 className="text-xs tracking-widest text-gray-400 uppercase">
          Film
        </h2>
      </div>
      <div className="md:col-span-8 space-y-8">
        {videos.map((video, index) => (
          <div key={index} className="relative aspect-video overflow-hidden">
            <iframe
              src={getEmbedUrl(video.url)}
              title={video.title ?? `Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
