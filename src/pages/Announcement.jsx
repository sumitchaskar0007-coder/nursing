import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Alert,
  CircularProgress,
  Grid,
  Button,
  Divider,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
  Collapse,
  IconButton
} from "@mui/material";
import {
  Announcement as AnnouncementIcon,
  CalendarToday,
  AccessTime,
  PriorityHigh,
  ExpandMore,
  NewReleases,
  Notifications,
  Warning,
  Info,
  ArrowForward,
  Download,
  Share,
  Bookmark,
  BookmarkBorder,
  KeyboardArrowDown,
  KeyboardArrowUp
} from "@mui/icons-material";
import { announcementAPI } from "../api";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState({});
  const [bookmarked, setBookmarked] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const res = await announcementAPI.getAll();
      setAnnouncements(res.data || []);
    } catch (err) {
      setError("Failed to load announcements");
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high": return <Warning fontSize="small" />;
      case "medium": return <Notifications fontSize="small" />;
      default: return <Info fontSize="small" />;
    }
  };

  const getPriorityColor = (priority) => {
    if (priority === "high") return "#d32f2f";
    if (priority === "medium") return "#ed6c02";
    return "#2e7d32";
  };

  const getPriorityBgColor = (priority) => {
    if (priority === "high") return "#ffebee";
    if (priority === "medium") return "#fff3e0";
    return "#e8f5e9";
  };

  const downloadAnnouncement = (announcement) => {
    // Simulate download functionality
    const content = `${announcement.title}\n\n${announcement.content}\n\nPosted: ${formatDate(announcement.startDate)}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${announcement.title.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareAnnouncement = (announcement) => {
    if (navigator.share) {
      navigator.share({
        title: announcement.title,
        text: announcement.content.substring(0, 100) + "...",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${announcement.title}\n${window.location.href}`);
      alert("Link copied to clipboard!");
    }
  };

  const getStatus = (announcement) => {
    const now = new Date();
    const start = new Date(announcement.startDate);
    const end = announcement.endDate ? new Date(announcement.endDate) : null;
    
    if (end && now > end) return { label: "Expired", color: "#757575", bgColor: "#f5f5f5" };
    if (now < start) return { label: "Upcoming", color: "#1976d2", bgColor: "#e3f2fd" };
    return { label: "Active", color: "#2e7d32", bgColor: "#e8f5e9" };
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <Box sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        bgcolor: "#f8f9fa"
      }}>
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress size={60} thickness={4} sx={{ color: "#01796F", mb: 3 }} />
          <Typography variant="h6" color="text.secondary">
            Loading Announcements...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      pt: { xs: "70px", sm: "80px" }, 
      minHeight: "100vh", 
      bgcolor: "#f8f9fa",
      pb: 6
    }}>
      <Container maxWidth="lg">
        {/* ===== HEADER ===== */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: 3,
              background: "linear-gradient(135deg, #01796F 0%, #025F54 100%)",
              color: "white",
              position: "relative",
              overflow: "hidden",
              '&::before': {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "150px",
                height: "150px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)"
              }
            }}
          >
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2,
              mb: 2
            }}>
              <Box sx={{
                width: { xs: 50, sm: 60 },
                height: { xs: 50, sm: 60 },
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <AnnouncementIcon sx={{ 
                  fontSize: { xs: 30, sm: 40 }, 
                  color: "white" 
                }} />
              </Box>
              <Box>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    lineHeight: 1.2
                  }}
                >
                  Announcements
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    opacity: 0.9,
                    mt: 0.5,
                    fontSize: { xs: "0.875rem", sm: "1rem" }
                  }}
                >
                  Latest updates, notices & important information
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ 
              display: "flex", 
              gap: 2, 
              flexWrap: "wrap",
              mt: 3 
            }}>
              <Chip 
                icon={<NewReleases />} 
                label={`${announcements.length} Active Updates`}
                sx={{ 
                  bgcolor: "rgba(255,255,255,0.2)", 
                  color: "white",
                  fontWeight: 500
                }} 
              />
              <Chip 
                icon={<CalendarToday />} 
                label={new Date().toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                sx={{ 
                  bgcolor: "rgba(255,255,255,0.2)", 
                  color: "white",
                  fontWeight: 500
                }} 
              />
            </Box>
          </Paper>
        </Box>

        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 4,
              borderRadius: 2,
              boxShadow: 1
            }}
          >
            {error}
          </Alert>
        )}

        {announcements.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: "center",
              borderRadius: 3,
              bgcolor: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <AnnouncementIcon sx={{ fontSize: 60, color: "#e0e0e0", mb: 2 }} />
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No Announcements Available
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Check back later for updates and important notices.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {announcements.map((announcement) => {
              const isExpanded = expanded[announcement._id];
              const status = getStatus(announcement);
              const priorityColor = getPriorityColor(announcement.priority);
              const priorityBgColor = getPriorityBgColor(announcement.priority);
              const shouldTruncate = announcement.content.length > 150 && !isExpanded;
              
              return (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  lg={4} 
                  key={announcement._id}
                  sx={{ 
                    display: "flex",
                    height: { xs: "auto", sm: isExpanded ? "auto" : "420px" }
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      border: "1px solid #e0e0e0",
                      '&:hover': {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                      }
                    }}
                  >
                    {/* Priority Badge */}
                    <Box
                      sx={{
                        height: 6,
                        width: "100%",
                        bgcolor: priorityColor,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12
                      }}
                    />
                    
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: "flex", 
                      flexDirection: "column",
                      p: 3
                    }}>
                      {/* Status and Bookmark */}
                      <Box sx={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "flex-start",
                        mb: 2
                      }}>
                        <Chip
                          label={status.label}
                          size="small"
                          sx={{
                            bgcolor: status.bgColor,
                            color: status.color,
                            fontWeight: 600,
                            fontSize: "0.75rem"
                          }}
                        />
                        <Button
                          size="small"
                          onClick={() => toggleBookmark(announcement._id)}
                          sx={{ 
                            minWidth: "auto",
                            p: 0.5,
                            color: bookmarked[announcement._id] ? "#ff9800" : "text.secondary"
                          }}
                        >
                          {bookmarked[announcement._id] ? (
                            <Bookmark fontSize="small" />
                          ) : (
                            <BookmarkBorder fontSize="small" />
                          )}
                        </Button>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: "text.primary",
                          fontSize: "1.125rem",
                          lineHeight: 1.4,
                          flexShrink: 0
                        }}
                      >
                        {announcement.title}
                      </Typography>

                      {/* Date and Time */}
                      <Stack spacing={1} sx={{ mb: 2, flexShrink: 0 }}>
                        <Box sx={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: 1 
                        }}>
                          <CalendarToday sx={{ 
                            fontSize: 16, 
                            color: "text.secondary" 
                          }} />
                          <Typography variant="body2" color="text.secondary">
                            Posted: {formatDate(announcement.startDate)}
                          </Typography>
                          {announcement.endDate && (
                            <>
                              <Typography variant="body2" color="text.secondary">
                                •
                              </Typography>
                              <AccessTime sx={{ 
                                fontSize: 16, 
                                color: "text.secondary" 
                              }} />
                              <Typography variant="body2" color="text.secondary">
                                Valid till: {formatDate(announcement.endDate)}
                              </Typography>
                            </>
                          )}
                        </Box>
                      </Stack>

                      {/* Content Section - FIXED */}
                      <Box sx={{ 
                        flexGrow: 1,
                        overflow: "hidden",
                        mb: 2,
                        position: "relative"
                      }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            whiteSpace: "pre-line",
                            lineHeight: 1.6,
                            wordBreak: "break-word",
                            ...(shouldTruncate && {
                              maxHeight: "96px",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 4
                            })
                          }}
                        >
                          {shouldTruncate ? truncateText(announcement.content, 150) : announcement.content}
                        </Typography>
                        
                        {/* Show gradient overlay for truncated text */}
                        {shouldTruncate && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: "40px",
                              background: "linear-gradient(to bottom, transparent, white)",
                              pointerEvents: "none"
                            }}
                          />
                        )}
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ 
                        mt: "auto",
                        pt: 2,
                        borderTop: "1px solid #f0f0f0"
                      }}>
                        <Box sx={{ 
                          display: "flex", 
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}>
                          <Button
                            size="small"
                            onClick={() => toggleExpand(announcement._id)}
                            endIcon={
                              isExpanded ? 
                              <KeyboardArrowUp fontSize="small" /> : 
                              <KeyboardArrowDown fontSize="small" />
                            }
                            sx={{
                              color: "#01796F",
                              fontWeight: 600,
                              fontSize: "0.875rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px"
                            }}
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </Button>
                          
                          <Box sx={{ display: "flex", gap: 0.5 }}>
                            <IconButton
                              size="small"
                              onClick={() => downloadAnnouncement(announcement)}
                              sx={{ 
                                color: "text.secondary",
                                '&:hover': {
                                  backgroundColor: "rgba(1, 121, 111, 0.08)",
                                  color: "#01796F"
                                }
                              }}
                              title="Download"
                            >
                              <Download fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              onClick={() => shareAnnouncement(announcement)}
                              sx={{ 
                                color: "text.secondary",
                                '&:hover': {
                                  backgroundColor: "rgba(1, 121, 111, 0.08)",
                                  color: "#01796F"
                                }
                              }}
                              title="Share"
                            >
                              <Share fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* Statistics Bar */}
        {announcements.length > 0 && (
          <Paper
            elevation={0}
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 3,
              bgcolor: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" fontWeight={700} color="#01796F">
                    {announcements.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Announcements
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" fontWeight={700} color="#2e7d32">
                    {announcements.filter(a => getStatus(a).label === "Active").length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" fontWeight={700} color="#ed6c02">
                    {announcements.filter(a => a.priority === "high").length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    High Priority
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" fontWeight={700} color="#757575">
                    {announcements.filter(a => getStatus(a).label === "Expired").length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expired
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Additional Info */}
        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 3,
            bgcolor: "#f0f7f6",
            border: "1px solid #d1e7dd"
          }}
        >
          <Typography variant="h6" fontWeight={600} color="#01796F" gutterBottom>
            📢 Important Notes
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            • All announcements are official communications from the institute administration
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            • High priority announcements require immediate attention
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            • Please check this page regularly for updates regarding admissions, exams, and events
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • For any clarification regarding announcements, please contact the administration office
          </Typography>
        </Paper>

        {/* SEO Footer Content */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            <strong>Late Udhavrao Tulshiram Jadhavar Foundation's Institute of Nursing, Pune</strong> - 
            Stay updated with the latest announcements, important notices, and institutional updates.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All announcements are updated regularly. Check back frequently for the latest information.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Announcement;