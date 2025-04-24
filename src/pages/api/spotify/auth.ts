import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  error?: string;
}

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const scopes = 'playlist-modify-public playlist-modify-private';
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  if (!redirectUri || !clientId) {
    return res.status(500).json({
      error: 'Configuração do Spotify não encontrada'
    });
  }

  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`
  );
} 