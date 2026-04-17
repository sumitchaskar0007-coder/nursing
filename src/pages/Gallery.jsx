import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  CircularProgress,
  Alert,
  Button
} from "@mui/material";
import {
  LocalHospital,
  School,
  Groups,
  Event,
  FilterList
} from "@mui/icons-material";
import { galleryAPI } from "../api";

/* FIXED SIZES (Same as before) */
const CARD_WIDTH = 280;
const CARD_HEIGHT = 380;
const IMAGE_HEIGHT = 220;

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await galleryAPI.getAll();
      setItems(res.data);
    } catch (err) {
      setError("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = filter === "all" 
    ? items 
    : items.filter(item => item.category === filter);

  const categories = [
    { key: "all", label: "All", icon: <Event />, count: items.length },
    { key: "events", label: "Events", icon: <Event />, count: items.filter(i => i.category === "events").length },
    { key: "activities", label: "Activities", icon: <Groups />, count: items.filter(i => i.category === "activities").length },
    { key: "general", label: "General", icon: <School />, count: items.filter(i => i.category === "general").length }
  ];

  if (loading) {
    return (
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        minHeight: "80vh"
      }}>
        <CircularProgress size={60} thickness={4} sx={{ color: "#1976d2" }} />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      pt: { xs: "70px", sm: "80px" },
      minHeight: "100vh",
      bgcolor: "#f5f5f5"
    }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography 
            variant="h4" 
            fontWeight={700} 
            sx={{ 
              mb: 1,
              color: "#1976d2"
            }}
          >
            Nursing Institute Gallery
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
          >
            Moments from campus life, events, and activities
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={1} justifyContent="center">
            {categories.map((cat) => (
              <Grid item key={cat.key}>
                <Button
                  variant={filter === cat.key ? "contained" : "outlined"}
                  startIcon={cat.icon}
                  onClick={() => setFilter(cat.key)}
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    ...(filter === cat.key && {
                      bgcolor: "#1976d2"
                    })
                  }}
                >
                  {cat.label}
                  <Chip
                    label={cat.count}
                    size="small"
                    sx={{ ml: 0.5, height: 20, fontSize: "0.7rem" }}
                  />
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 3 }}
            action={
              <Button color="inherit" size="small" onClick={fetchGallery}>
                Retry
              </Button>
            }
          >
            {error}
          </Alert>
        )}

        {/* Gallery Grid */}
        <Grid container spacing={3} justifyContent="center">
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Box
                sx={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  mx: "auto",
                  bgcolor: "white",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: IMAGE_HEIGHT,
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 1,
                      bgcolor: "rgba(0,0,0,0.6)"
                    }}
                  >
                    <Chip
                      label={item.category?.toUpperCase()}
                      size="small"
                      sx={{
                        bgcolor: "#1976d2",
                        color: "white",
                        fontSize: "0.7rem",
                        height: 22
                      }}
                    />
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{
                  height: CARD_HEIGHT - IMAGE_HEIGHT,
                  p: 2,
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      fontSize: "0.85rem",
                      mb: 2
                    }}
                  >
                    {item.description || "Nursing institute moment..."}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => window.open(item.imageUrl, '_blank')}
                    sx={{
                      textTransform: "none",
                      borderRadius: 1,
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      "&:hover": {
                        borderColor: "#1565c0",
                        bgcolor: "rgba(25, 118, 210, 0.04)"
                      }
                    }}
                  >
                    View Full Image
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <Box sx={{ 
            textAlign: "center", 
            py: 6,
            bgcolor: "white",
            borderRadius: 2,
            maxWidth: 400,
            mx: "auto",
            mt: 4
          }}>
            <School sx={{ fontSize: 60, color: "#ccc", mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Images Found
            </Typography>
            {filter !== "all" && (
              <Button
                variant="contained"
                onClick={() => setFilter("all")}
                size="small"
                sx={{
                  bgcolor: "#1976d2",
                  mt: 2
                }}
              >
                View All Images
              </Button>
            )}
          </Box>
        )}

        {/* Stats Section */}
        {items.length > 0 && (
          <Box sx={{ 
            mt: 5, 
            p: 3, 
            bgcolor: "white", 
            borderRadius: 2,
            textAlign: "center"
          }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="h5" fontWeight={700} color="#1976d2">
                  {items.length}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Total
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" fontWeight={700} color="#1976d2">
                  {items.filter(i => i.category === "events").length}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Events
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" fontWeight={700} color="#1976d2">
                  {items.filter(i => i.category === "activities").length}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Activities
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" fontWeight={700} color="#1976d2">
                  {items.filter(i => i.category === "general").length}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  General
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;