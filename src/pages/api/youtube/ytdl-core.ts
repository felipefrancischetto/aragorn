import ytdl from 'ytdl-core';

export interface YoutubeDownloadOptions {
  quality?: 'highest' | 'lowest';
}

export interface YoutubeDownloadResult {
  success: boolean;
  data?: {
    title: string;
    downloadUrl: string;
  };
  error?: string;
}

export const downloadYoutubeVideo = async (
  url: string,
  options: YoutubeDownloadOptions = {}
): Promise<YoutubeDownloadResult> => {
  try {
    if (!url) {
      throw new Error('URL is required');
    }

    if (!ytdl.validateURL(url)) {
      throw new Error('Invalid YouTube URL');
    }

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title;
    
    // Get the format based on quality preference
    let format;
    if (options.quality === 'lowest') {
      format = ytdl.chooseFormat(info.formats, { quality: 'lowest' });
    } else {
      format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    }

    if (!format) {
      throw new Error('No suitable format found');
    }

    return {
      success: true,
      data: {
        title,
        downloadUrl: format.url,
      },
    };
  } catch (error) {
    console.error('Download error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to download video',
    };
  }
};
