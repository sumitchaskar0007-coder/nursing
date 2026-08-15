import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Add, ArrowBack, Delete, Edit, VideoLibrary } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { videoAPI } from '../../api';

const emptyForm = { title: '', description: '', videoLink: '', video: null };
export default function VideoAdmin() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]), [form, setForm] = useState(emptyForm), [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false), [loading, setLoading] = useState(true), [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0), [error, setError] = useState('');
  const load = async () => { try { setItems((await videoAPI.getAll()).data); } catch { setError('Unable to load videos.'); } finally { setLoading(false); } };
  useEffect(() => { load(); }, []);
  const showDialog = (item = null) => { setEditing(item); setForm(item ? { title: item.title, description: item.description || '', videoLink: item.sourceType === 'link' ? item.videoUrl : '', video: null } : emptyForm); setError(''); setProgress(0); setOpen(true); };
  const save = async () => {
    if (!form.title.trim() || (!editing && !form.video && !form.videoLink.trim())) { setError('Title and either a video file or video link are required.'); return; }
    const data = new FormData(); data.append('title', form.title); data.append('description', form.description);
    if (form.videoLink.trim()) data.append('videoLink', form.videoLink.trim()); if (form.video) data.append('video', form.video);
    setSaving(true); setError('');
    try { const config = { onUploadProgress: e => setProgress(e.total ? Math.round(e.loaded * 100 / e.total) : 0) }; if (editing) await videoAPI.update(editing._id, data, config); else await videoAPI.create(data, config); setOpen(false); await load(); }
    catch (err) { setError(err.response?.data?.message || 'Unable to save video.'); } finally { setSaving(false); }
  };
  const remove = async item => { if (!window.confirm(`Delete “${item.title}”?`)) return; try { await videoAPI.delete(item._id); await load(); } catch { setError('Unable to delete video.'); } };
  if (loading) return <Box textAlign="center" mt={6}><CircularProgress /></Box>;
  return <Container maxWidth="lg" sx={{ py: 3 }}><Button startIcon={<ArrowBack />} onClick={() => navigate('/admin')}>Back to Dashboard</Button>
    <Box display="flex" justifyContent="space-between" alignItems="center" my={3}><Typography variant="h4" fontWeight={600}>Video Management</Typography><Button variant="contained" startIcon={<Add />} onClick={() => showDialog()}>Add Video</Button></Box>
    {error && !open && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
    <TableContainer component={Paper}><Table><TableHead><TableRow><TableCell>Video</TableCell><TableCell>Title</TableCell><TableCell>Source</TableCell><TableCell>Added</TableCell><TableCell align="right">Actions</TableCell></TableRow></TableHead><TableBody>{items.map(item => <TableRow key={item._id}><TableCell><Box component="img" src={item.thumbnailUrl || '/assets/images/video-thumbnail.svg'} alt="" sx={{ width: 110, aspectRatio: '16/9', objectFit: 'cover', borderRadius: 1 }} /></TableCell><TableCell>{item.title}</TableCell><TableCell sx={{ textTransform: 'capitalize' }}>{item.sourceType}</TableCell><TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell><TableCell align="right"><IconButton onClick={() => showDialog(item)}><Edit /></IconButton><IconButton color="error" onClick={() => remove(item)}><Delete /></IconButton></TableCell></TableRow>)}</TableBody></Table></TableContainer>
    {!items.length && <Box textAlign="center" py={7}><VideoLibrary sx={{ fontSize: 60, color: 'text.disabled' }} /><Typography color="text.secondary">No videos added.</Typography></Box>}
    <Dialog open={open} onClose={() => !saving && setOpen(false)} maxWidth="sm" fullWidth><DialogTitle>{editing ? 'Edit Video' : 'Add Video'}</DialogTitle><DialogContent>{error && <Alert severity="error" sx={{ mt: 1 }}>{error}</Alert>}<TextField fullWidth required label="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} margin="normal" /><TextField fullWidth multiline rows={3} label="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} margin="normal" /><TextField fullWidth label="Video link (YouTube, Vimeo, direct URL, etc.)" value={form.videoLink} onChange={e => setForm({ ...form, videoLink: e.target.value })} margin="normal" helperText={editing ? 'Leave blank to keep the current video.' : 'Use a link or choose a file below.'} /><Button component="label" variant="outlined" fullWidth sx={{ mt: 2 }}>Choose Video File<input hidden type="file" accept="video/*" onChange={e => setForm({ ...form, video: e.target.files?.[0] || null })} /></Button>{form.video && <Typography variant="body2" sx={{ mt: 1 }}>{form.video.name} ({(form.video.size / 1024 / 1024).toFixed(1)} MB)</Typography>}{saving && <Box sx={{ mt: 2 }}><LinearProgress variant={progress ? 'determinate' : 'indeterminate'} value={progress} /><Typography variant="caption">{progress ? `${progress}% uploaded` : 'Processing…'}</Typography></Box>}</DialogContent><DialogActions><Button disabled={saving} onClick={() => setOpen(false)}>Cancel</Button><Button disabled={saving} variant="contained" onClick={save}>{editing ? 'Update' : 'Add'}</Button></DialogActions></Dialog>
  </Container>;
}
