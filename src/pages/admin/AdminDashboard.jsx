import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import {
  Image as ImageIcon,
  Announcement as AnnouncementIcon,
  Work as WorkIcon,
  Logout as LogoutIcon,
  ArrowBack as ArrowBackIcon,
  Lock as LockIcon,
  Article as ArticleIcon, // ✅ ADD THIS
  VideoLibrary as VideoLibraryIcon,

} from "@mui/icons-material";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // 🔴 FIXED LOGOUT HANDLER
  const handleLogout = () => {
    // ✅ REMOVE THE SAME TOKEN USED IN LOGIN & PROTECTED ROUTES
    localStorage.removeItem("token");

    // ✅ OPTIONAL: extra safety
    localStorage.clear();

    // ✅ FORCE REDIRECT TO LOGIN
    navigate("/admin/login", { replace: true });
  };

  const dashboardItems = [
    {
      title: "Gallery Management",
      description: "Manage gallery images and categories",
      icon: <ImageIcon fontSize="large" />,
      link: "/admin/gallery",
      color: "#1976d2",
    },
    {
      title: "Video Management",
      description: "Add, edit and remove uploaded or linked videos",
      icon: <VideoLibraryIcon fontSize="large" />,
      link: "/admin/videos",
      color: "#00838f",
    },
    {
      title: "Announcements",
      description: "Create and manage announcements",
      icon: <AnnouncementIcon fontSize="large" />,
      link: "/admin/announcement",
      color: "#2e7d32",
    },
    {
      title: "Career Opportunities",
      description: "Manage job postings and applications",
      icon: <WorkIcon fontSize="large" />,
      link: "/admin/career",
      color: "#ed6c02",
    },
    {
      title: "Private Documents",
      description: "Access secured PDFs & confidential files",
      icon: <LockIcon fontSize="large" />,
      link: "/admin/private",
      color: "#6a1b9a",
    },
     {
    title: "Blog Management",
    description: "Create, edit and manage website blogs",
    icon: <ArticleIcon fontSize="large" />,
    link: "/admin/blog",
    color: "#6d4c41",
  },
  ];

  return (
    <Container maxWidth="lg">
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          mb: 3,
        }}
      >
        <IconButton component={Link} to="/" color="primary">
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {dashboardItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    color: item.color,
                  }}
                >
                  {item.icon}
                  <Typography variant="h5" sx={{ ml: 2 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={item.link}
                  sx={{ color: item.color }}
                >
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
