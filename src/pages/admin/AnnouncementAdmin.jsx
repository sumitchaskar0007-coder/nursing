import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Switch,
  FormControlLabel
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { announcementAPI } from '../../api';

const AnnouncementAdmin = () => {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'medium',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    isActive: true
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await announcementAPI.getAllAdmin();
      setAnnouncements(res.data);
    } catch {
      setError('Failed to fetch announcements');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (announcement = null) => {
    if (announcement) {
      setEditingAnnouncement(announcement);
      setFormData({
        title: announcement.title,
        content: announcement.content,
        priority: announcement.priority,
        startDate: new Date(announcement.startDate).toISOString().split('T')[0],
        endDate: announcement.endDate
          ? new Date(announcement.endDate).toISOString().split('T')[0]
          : '',
        isActive: announcement.isActive
      });
    } else {
      setEditingAnnouncement(null);
      setFormData({
        title: '',
        content: '',
        priority: 'medium',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        isActive: true
      });
    }
    setOpenDialog(true);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        endDate: formData.endDate || null,
        isActive: Boolean(formData.isActive)
      };

      editingAnnouncement
        ? await announcementAPI.update(editingAnnouncement._id, payload)
        : await announcementAPI.create(payload);

      fetchAnnouncements();
      setOpenDialog(false);
    } catch {
      setError('Failed to save announcement');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this announcement?')) return;
    await announcementAPI.delete(id);
    fetchAnnouncements();
  };

  if (loading) {
    return (
      <Container sx={{ mt: 6, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      {/* 🔙 BACK BUTTON */}
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ mt: 3 }}
        onClick={() => navigate('/admin')}
      >
        Back to Dashboard
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}>
        <Typography variant="h4">Announcement Management</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
          Add New
        </Button>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {announcements.map(a => (
              <TableRow key={a._id}>
                <TableCell>{a.title}</TableCell>
                <TableCell>{a.priority}</TableCell>
                <TableCell>{new Date(a.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{a.endDate ? new Date(a.endDate).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell>{a.isActive ? 'Active' : 'Inactive'}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(a)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(a._id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* DIALOG */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingAnnouncement ? 'Edit' : 'Add'} Announcement</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Title" name="title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} margin="normal" />
          <TextField fullWidth label="Content" multiline rows={4} name="content" value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} margin="normal" />
          <FormControl fullWidth margin="normal">
            <InputLabel>Priority</InputLabel>
            <Select value={formData.priority} label="Priority" onChange={e => setFormData({ ...formData, priority: e.target.value })}>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Switch checked={formData.isActive} onChange={e => setFormData({ ...formData, isActive: e.target.checked })} />}
            label="Active"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AnnouncementAdmin;
