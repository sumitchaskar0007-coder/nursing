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
  FormControlLabel,
  Chip
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { careerAPI } from '../../api';

const CareerAdmin = () => {
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  const [formData, setFormData] = useState({
    position: '',
    department: '',
    description: '',
    requirements: [''],
    location: '',
    employmentType: 'full-time',
    salaryRange: { min: '', max: '' },
    applicationDeadline: '',
    isActive: true
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  // ================= FETCH =================
  const fetchCareers = async () => {
    try {
      const res = await careerAPI.getAllAdmin();
      setCareers(res.data);
    } catch {
      setError('Failed to fetch career opportunities');
    } finally {
      setLoading(false);
    }
  };

  // ================= OPEN DIALOG =================
  const handleOpenDialog = (career = null) => {
    if (career) {
      setEditingCareer(career);
      setFormData({
        position: career.position || '',
        department: career.department || '',
        description: career.description || '',
        requirements: career.requirements?.length ? career.requirements : [''],
        location: career.location || '',
        employmentType: career.employmentType || 'full-time',
        salaryRange: career.salaryRange || { min: '', max: '' },
        applicationDeadline: career.applicationDeadline
          ? new Date(career.applicationDeadline).toISOString().split('T')[0]
          : '',
        isActive: Boolean(career.isActive)
      });
    } else {
      setEditingCareer(null);
      setFormData({
        position: '',
        department: '',
        description: '',
        requirements: [''],
        location: '',
        employmentType: 'full-time',
        salaryRange: { min: '', max: '' },
        applicationDeadline: '',
        isActive: true
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCareer(null);
  };

  // ================= FORM HANDLERS =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('salaryRange.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        salaryRange: { ...prev.salaryRange, [key]: value }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleRequirementChange = (index, value) => {
    const updated = [...formData.requirements];
    updated[index] = value;
    setFormData(prev => ({ ...prev, requirements: updated }));
  };

  const addRequirement = () => {
    setFormData(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }));
  };

  const removeRequirement = (index) => {
    if (formData.requirements.length > 1) {
      setFormData(prev => ({
        ...prev,
        requirements: prev.requirements.filter((_, i) => i !== index)
      }));
    }
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    try {
      const payload = {
        position: formData.position,
        department: formData.department,
        description: formData.description,
        location: formData.location,
        employmentType: formData.employmentType,
        isActive: Boolean(formData.isActive),
        requirements: formData.requirements.filter(r => r.trim() !== ''),
        salaryRange:
          formData.salaryRange.min || formData.salaryRange.max
            ? {
                min: formData.salaryRange.min || undefined,
                max: formData.salaryRange.max || undefined
              }
            : undefined,
        applicationDeadline: formData.applicationDeadline
          ? new Date(formData.applicationDeadline)
          : null
      };

      if (editingCareer) {
        await careerAPI.update(editingCareer._id, payload);
      } else {
        await careerAPI.create(payload);
      }

      fetchCareers();
      handleCloseDialog();
    } catch {
      setError('Failed to save career opportunity');
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this career opportunity?')) return;
    try {
      await careerAPI.delete(id);
      fetchCareers();
    } catch {
      setError('Failed to delete career opportunity');
    }
  };

  const getEmploymentTypeColor = (type) => {
    switch (type) {
      case 'full-time': return 'success';
      case 'part-time': return 'info';
      case 'contract': return 'warning';
      case 'internship': return 'secondary';
      default: return 'default';
    }
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Container>
    );
  }

  // ================= UI =================
  return (
    <Container maxWidth="lg">
      {/* 🔙 BACK TO DASHBOARD */}
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ mt: 3 }}
        onClick={() => navigate('/admin')}
      >
        Back to Dashboard
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4 }}>
        <Typography variant="h4">Career Management</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
          Add Career
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {careers.map(career => (
              <TableRow key={career._id}>
                <TableCell>{career.position}</TableCell>
                <TableCell>{career.department}</TableCell>
                <TableCell>{career.location}</TableCell>
                <TableCell>
                  <Chip
                    label={career.employmentType}
                    color={getEmploymentTypeColor(career.employmentType)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{career.isActive ? 'Active' : 'Inactive'}</TableCell>
                <TableCell>
                  {career.applicationDeadline
                    ? new Date(career.applicationDeadline).toLocaleDateString()
                    : 'N/A'}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(career)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(career._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ================= DIALOG ================= */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingCareer ? 'Edit Career' : 'Add Career'}
        </DialogTitle>

        <DialogContent>
          <TextField fullWidth label="Position" name="position" value={formData.position} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} margin="normal" />
          <TextField fullWidth multiline rows={4} label="Description" name="description" value={formData.description} onChange={handleChange} margin="normal" />

          <Typography sx={{ mt: 2 }}>Requirements</Typography>
          {formData.requirements.map((req, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField fullWidth value={req} onChange={(e) => handleRequirementChange(i, e.target.value)} />
              <Button color="error" onClick={() => removeRequirement(i)} disabled={formData.requirements.length === 1}>
                Remove
              </Button>
            </Box>
          ))}
          <Button onClick={addRequirement}>Add Requirement</Button>

          <FormControl fullWidth margin="normal">
            <InputLabel>Employment Type</InputLabel>
            <Select name="employmentType" value={formData.employmentType} onChange={handleChange} label="Employment Type">
              <MenuItem value="full-time">Full Time</MenuItem>
              <MenuItem value="part-time">Part Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            type="date"
            label="Application Deadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <FormControlLabel
            control={<Switch checked={formData.isActive} onChange={handleChange} name="isActive" />}
            label="Active"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editingCareer ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CareerAdmin;
