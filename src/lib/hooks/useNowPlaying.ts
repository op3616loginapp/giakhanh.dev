import useSWR from "swr";
import fetcher from "../fetcher";

type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

const useNowPlaying = () => {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useNowPlaying;
