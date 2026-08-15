import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Alert, Box, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { OpenInNew, PlayCircleOutline } from '@mui/icons-material';
import { videoAPI } from '../api';

const DEFAULT_THUMBNAIL = '/assets/images/video-thumbnail.svg';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    videoAPI.getAll().then(({ data }) => setVideos(data)).catch(() => setError('Unable to load videos.')).finally(() => setLoading(false));
  }, []);

  return <Box sx={{ minHeight: '100vh', bgcolor: '#f5f8fc', pt: { xs: 12, md: 15 }, pb: 8 }}><Container maxWidth="lg">
    <Typography variant="h3" fontWeight={700} textAlign="center" color="primary">Videos</Typography>
    <Typography color="text.secondary" textAlign="center" sx={{ mt: 1, mb: 5 }}>Watch college events, activities and campus highlights.</Typography>
    {error && <Alert severity="error">{error}</Alert>}
    {loading ? <Box textAlign="center"><CircularProgress /></Box> : <Grid container spacing={3}>{videos.map(video => <Grid item xs={12} sm={6} md={4} key={video._id}>
      <Box sx={{ bgcolor: '#fff', borderRadius: 2, overflow: 'hidden', boxShadow: 2, height: '100%' }}>
        <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: '#111' }}>
          {playingId === video._id ? <ReactPlayer src={video.videoUrl} url={video.videoUrl} controls playing width="100%" height="100%" /> : <Button onClick={() => setPlayingId(video._id)} aria-label={`Play ${video.title}`} sx={{ p: 0, width: '100%', height: '100%', position: 'relative' }}>
            <Box component="img" src={video.thumbnailUrl || DEFAULT_THUMBNAIL} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.currentTarget.src = DEFAULT_THUMBNAIL; }} /><PlayCircleOutline sx={{ position: 'absolute', color: '#fff', fontSize: 68, filter: 'drop-shadow(0 2px 5px #000)' }} />
          </Button>}
        </Box>
        <Box sx={{ p: 2.5 }}><Typography variant="h6" fontWeight={650}>{video.title}</Typography>{video.description && <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{video.description}</Typography>}<Button component="a" href={video.videoUrl} target="_blank" rel="noopener noreferrer" size="small" endIcon={<OpenInNew />} sx={{ mt: 1 }}>Open video</Button></Box>
      </Box>
    </Grid>)}</Grid>}
    {!loading && !error && videos.length === 0 && <Typography textAlign="center" color="text.secondary">No videos have been added yet.</Typography>}
  </Container></Box>;
}
