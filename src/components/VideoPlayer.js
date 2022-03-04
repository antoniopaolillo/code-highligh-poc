import VimeoPlayer from "@u-wave/react-vimeo";
import YouTubePlayer from "@u-wave/react-youtube";

export default function VideoPlayer({ provider, video_id }) {
  switch (provider) {
    case "vimeo":
      return <VimeoPlayer video={video_id} />;

    case "youtube":
      return <YouTubePlayer video={video_id} />;

    default:
      return "Não foi possível renderizar o vídeo";
  }
}
