import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useYoutubeDownloader } from '../../hooks/useYoutubeDownloader';

export interface VideoFormat {
  itag: number;
  quality: string;
  url: string;
}

export interface DownloadInfo {
  success: boolean;
  title: string;
  thumbnail: string;
  downloadUrl?: string;
  error?: string;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: #111;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const DownloadContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #111;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const LoadingContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #333;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const YoutubeDownloader: React.FC = () => {
  const [downloadInfo, setDownloadInfo] = useState<DownloadInfo | null>(null);
  const { download, setVideoUrl, isLoading, error: downloadError } = useYoutubeDownloader();
  const [url, setUrl] = useState('');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setVideoUrl(newUrl);
    setDownloadInfo(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await download({
      quality: 'highest'
    });

    if (result.success && result.data) {
      setDownloadInfo({
        success: true,
        title: result.data.title,
        thumbnail: '',
        downloadUrl: result.data.downloadUrl
      });
    } else {
      setDownloadInfo({
        success: false,
        title: '',
        thumbnail: '',
        error: result.error
      });
    }
  };

  return (
    <Container>
      <Title>YouTube Downloader</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Enter YouTube URL"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Downloading...' : 'Download'}
          </Button>
        </InputGroup>
      </form>

      {downloadError && (
        <ErrorMessage>
          {downloadError.message}
        </ErrorMessage>
      )}

      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}

      {downloadInfo?.success && (
        <DownloadContainer>
          <h2>{downloadInfo.title}</h2>
          {downloadInfo.thumbnail && (
            <Image
              src={downloadInfo.thumbnail}
              alt={downloadInfo.title}
              width={320}
              height={180}
            />
          )}
          {downloadInfo.downloadUrl && (
            <DownloadLink href={downloadInfo.downloadUrl} download>
              Download MP3
            </DownloadLink>
          )}
        </DownloadContainer>
      )}
    </Container>
  );
};

export default YoutubeDownloader; 