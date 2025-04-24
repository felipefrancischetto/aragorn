export class YoutubeDownloaderError extends Error {
  constructor(message: string, public originalError?: Error) {
    super(message);
    this.name = 'YoutubeDownloaderError';
  }
} 