import { useState } from 'react';
import { YoutubeDownloaderError } from './YoutubeDownloaderError';

interface DownloadOptions {
  quality?: 'highest' | 'lowest';
}

interface DownloadResult {
  success: boolean;
  data?: {
    title: string;
    downloadUrl: string;
  };
  error?: string;
}

export const useYoutubeDownloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<YoutubeDownloaderError | null>(null);
  const [url, setUrl] = useState<string>('');

  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be');
    } catch {
      return false;
    }
  };

  const setVideoUrl = (newUrl: string) => {
    setUrl(newUrl);
    setError(null);
  };

  const download = async (options: DownloadOptions): Promise<DownloadResult> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!validateUrl(url)) {
        throw new Error('Invalid YouTube URL');
      }

      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          quality: options.quality || 'highest',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to download video');
      }

      setIsLoading(false);
      return data;
    } catch (error) {
      const youtubeError = new YoutubeDownloaderError(
        error instanceof Error ? error.message : 'Failed to download video',
        error instanceof Error ? error : undefined
      );
      setError(youtubeError);
      setIsLoading(false);
      return {
        success: false,
        error: youtubeError.message,
      };
    }
  };

  return {
    download,
    setVideoUrl,
    isLoading,
    error,
  };
}; 