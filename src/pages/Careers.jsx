import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Button,
    Chip,
    Alert,
    CircularProgress,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
    IconButton,
    useTheme,
    useMediaQuery,
    MobileStepper
} from '@mui/material';
import {
    LocationOn as LocationIcon,
    Business as BusinessIcon,
    AccessTime as TimeIcon,
    Work as WorkIcon,
    School as SchoolIcon,
    People as PeopleIcon,
    Description as DescriptionIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    KeyboardArrowLeft,
    KeyboardArrowRight
} from '@mui/icons-material';
import { careerAPI } from '../api';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Careers = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [applicationDialog, setApplicationDialog] = useState(false);
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
    });
    const [activeStep, setActiveStep] = useState(0);
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        try {
            const response = await careerAPI.getAllAdmin();

            setCareers(response.data);
        } catch (err) {
            setError('Failed to load career opportunities. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleApply = (career) => {
        setSelectedCareer(career);
        setApplicationDialog(true);
    };

    const handleCloseDialog = () => {
        setApplicationDialog(false);
        setSelectedCareer(null);
        setApplicationData({
            name: '',
            email: '',
            phone: '',
            coverLetter: ''
        });
    };

    const handleApplicationChange = (e) => {
        const { name, value } = e.target;
        setApplicationData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitApplication = () => {
        console.log('Application submitted for:', selectedCareer.position, applicationData);
        alert('Thank you for your application! We will contact you soon.');
        handleCloseDialog();
    };

    const getEmploymentTypeColor = (type) => {
        const colors = {
            'full-time': 'success',
            'part-time': 'info',
            'contract': 'warning',
            'internship': 'secondary'
        };
        return colors[type] || 'default';
    };

    // Slider content for "Why Join Our Institution?"
    const benefits = [
        {
            icon: <PeopleIcon sx={{ fontSize: isMobile ? 40 : 50, color: '#01796F' }} />,
            title: 'Collaborative Culture',
            description: 'Work with dedicated professionals in a supportive and collaborative environment that fosters growth and innovation.'
        },
        {
            icon: <SchoolIcon sx={{ fontSize: isMobile ? 40 : 50, color: '#01796F' }} />,
            title: 'Professional Growth',
            description: 'Access ongoing training, workshops, and opportunities for career advancement in the education sector.'
        },
        {
            icon: <WorkIcon sx={{ fontSize: isMobile ? 40 : 50, color: '#01796F' }} />,
            title: 'Meaningful Impact',
            description: 'Contribute to shaping the future by educating and inspiring the next generation of leaders and thinkers.'
        },
        {
            icon: '💼',
            title: 'Competitive Benefits',
            description: 'Comprehensive health insurance, retirement plans, paid time off, and tuition assistance programs.'
        },
        {
            icon: '🏫',
            title: 'Modern Facilities',
            description: 'State-of-the-art campus with modern classrooms, research labs, and collaborative workspaces.'
        },
        {
            icon: '🌟',
            title: 'Recognition & Awards',
            description: 'Opportunities for professional recognition, awards, and research grants for outstanding contributions.'
        }
    ];

    // Hiring process steps
    const hiringProcess = [
        { step: '1', title: 'Submit Application', desc: 'Complete our online application form with your details' },
        { step: '2', title: 'Document Review', desc: 'Our HR team reviews your qualifications and documents' },
        { step: '3', title: 'Screening Call', desc: 'Initial phone screening with HR representative' },
        { step: '4', title: 'Technical Interview', desc: 'Interview with department heads and team members' },
        { step: '5', title: 'Final Assessment', desc: 'Final round with senior management' },
        { step: '6', title: 'Offer & Onboarding', desc: 'Welcome to our team with comprehensive onboarding' }
    ];

    const handleNext = () => {
        setActiveStep((prevStep) => (prevStep + 1) % benefits.length);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => (prevStep - 1 + benefits.length) % benefits.length);
    };

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 80px)',
                pt: '80px'
            }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Career Opportunities | Join Our Educational Institution</title>
                <meta 
                    name="description" 
                    content="Explore career opportunities at our educational institution. Join our team of dedicated professionals in teaching, research, and administration roles."
                />
                <meta 
                    name="keywords" 
                    content="careers, jobs, teaching jobs, education careers, faculty positions, academic jobs, school employment, university jobs, education careers"
                />
                <meta property="og:title" content="Career Opportunities | Join Our Team" />
                <meta property="og:description" content="Build your career in education with us. View current openings and apply today." />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Main Content */}
            <Box sx={{
                pt: { xs: '70px', sm: '80px' },
                minHeight: '100vh',
                bgcolor: 'background.default',
                overflowX: 'hidden'
            }}>
                {/* Hero Section - Updated with #01796F background */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #01796F 0%, #025F54 100%)',
                    color: 'white',
                    py: { xs: 6, md: 8 },
                    mb: { xs: 4, md: 6 },
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Optional subtle pattern overlay */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                        zIndex: 0
                    }} />
                    
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography 
                            variant={isMobile ? "h3" : "h2"} 
                            gutterBottom 
                            align="center" 
                            sx={{ 
                                fontWeight: 700,
                                px: { xs: 2, sm: 0 },
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}
                        >
                            Build Your Career in Education
                        </Typography>
                        <Typography 
                            variant={isMobile ? "h6" : "h5"} 
                            align="center" 
                            sx={{ 
                                maxWidth: 800, 
                                mx: 'auto', 
                                mb: 4,
                                px: { xs: 2, sm: 0 },
                                opacity: 0.95
                            }}
                        >
                            Join our team of passionate educators and professionals dedicated to shaping future generations
                        </Typography>
                        <Box sx={{ 
                            textAlign: 'center',
                            animation: 'float 3s ease-in-out infinite'
                        }}>
                            <WorkIcon sx={{ 
                                fontSize: isMobile ? 50 : 60, 
                                mb: 2,
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                            }} />
                        </Box>
                    </Container>
                </Box>

                <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
                    {/* Current Openings Section */}
                    <Box sx={{ mb: { xs: 6, md: 8 } }}>
                        <Typography 
                            variant={isMobile ? "h4" : "h3"} 
                            gutterBottom 
                            align="center" 
                            sx={{ 
                                mb: 2,
                                color: '#01796F',
                                fontWeight: 700
                            }}
                        >
                            Current Openings
                        </Typography>
                        <Typography 
                            variant={isMobile ? "body1" : "h6"} 
                            align="center" 
                            color="text.secondary" 
                            sx={{ 
                                mb: { xs: 4, md: 6 }, 
                                maxWidth: 800, 
                                mx: 'auto' 
                            }}
                        >
                            Discover exciting career opportunities in education, research, and administration
                        </Typography>

                        {error && (
                            <Alert severity="error" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                                {error}
                            </Alert>
                        )}

                        {careers.length === 0 ? (
                            <Box sx={{
                                textAlign: 'center',
                                py: { xs: 6, md: 10 },
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                boxShadow: 1,
                                maxWidth: 600,
                                mx: 'auto',
                                px: 3,
                                border: '2px solid #01796F',
                                borderTop: '6px solid #01796F'
                            }}>
                                <SchoolIcon sx={{ 
                                    fontSize: isMobile ? 50 : 60, 
                                    color: '#01796F', 
                                    mb: 3 
                                }} />
                                <Typography variant={isMobile ? "h6" : "h5"} gutterBottom sx={{ color: '#01796F' }}>
                                    No Current Openings
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, mx: 'auto' }}>
                                    We don't have any positions available right now, but new opportunities arise regularly.
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={fetchCareers}
                                    sx={{ 
                                        mt: 2,
                                        bgcolor: '#01796F',
                                        '&:hover': {
                                            bgcolor: '#025F54'
                                        }
                                    }}
                                >
                                    Check Again
                                </Button>
                            </Box>
                        ) : (
                            <Grid container spacing={3}>
                                {careers.map((career) => (
                                    <Grid item xs={12} key={career._id}>
                                        <Card sx={{
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            borderTop: '4px solid #01796F',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: 6
                                            }
                                        }}>
                                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                                <Grid container spacing={3} alignItems="center">
                                                    <Grid item xs={12} md={8}>
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            flexDirection: isMobile ? 'column' : 'row',
                                                            alignItems: isMobile ? 'flex-start' : 'center',
                                                            mb: 2,
                                                            gap: 2
                                                        }}>
                                                            <Chip
                                                                label={career.employmentType?.toUpperCase() || 'FULL-TIME'}
                                                                color={getEmploymentTypeColor(career.employmentType)}
                                                                size={isMobile ? "small" : "medium"}
                                                            />
                                                            {career.applicationDeadline && (
                                                                <Chip
                                                                    icon={<TimeIcon />}
                                                                    label={`Apply by: ${new Date(career.applicationDeadline).toLocaleDateString()}`}
                                                                    variant="outlined"
                                                                    size={isMobile ? "small" : "medium"}
                                                                    sx={{ borderColor: '#01796F', color: '#01796F' }}
                                                                />
                                                            )}
                                                        </Box>

                                                        <Typography 
                                                            variant={isMobile ? "h5" : "h4"} 
                                                            gutterBottom 
                                                            sx={{ 
                                                                fontWeight: 600,
                                                                color: '#01796F'
                                                            }}
                                                        >
                                                            {career.position}
                                                        </Typography>

                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            flexDirection: isMobile ? 'column' : 'row',
                                                            flexWrap: 'wrap', 
                                                            gap: 2, 
                                                            mb: 3 
                                                        }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <BusinessIcon sx={{ mr: 1, color: '#01796F' }} />
                                                                <Typography variant="body1">
                                                                    {career.department}
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <LocationIcon sx={{ mr: 1, color: '#01796F' }} />
                                                                <Typography variant="body1">
                                                                    {career.location}
                                                                </Typography>
                                                            </Box>
                                                        </Box>

                                                        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                                                            {career.description}
                                                        </Typography>

                                                        {career.salaryRange && (
                                                            <Typography 
                                                                variant={isMobile ? "body1" : "h6"} 
                                                                sx={{
                                                                    color: '#01796F',
                                                                    fontWeight: 600,
                                                                    mb: 2,
                                                                    p: 1.5,
                                                                    bgcolor: 'rgba(1, 121, 111, 0.1)',
                                                                    borderRadius: 1,
                                                                    display: 'inline-block'
                                                                }}
                                                            >
                                                                Salary: ${career.salaryRange.min?.toLocaleString()}
                                                                {career.salaryRange.max && ` - $${career.salaryRange.max.toLocaleString()}`}
                                                            </Typography>
                                                        )}
                                                    </Grid>

                                                    <Grid item xs={12} md={4}>
                                                        <Box sx={{
                                                            background: 'linear-gradient(135deg, #01796F 0%, #025F54 100%)',
                                                            borderRadius: 2,
                                                            p: 3,
                                                            height: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Typography 
                                                                variant={isMobile ? "h6" : "h5"} 
                                                                gutterBottom 
                                                                sx={{ color: 'white', fontWeight: 600 }}
                                                            >
                                                                Quick Apply
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                                                                Ready to join our team? Submit your application now.
                                                            </Typography>
                                                            <Button
                                                                variant="contained"
                                                                size={isMobile ? "medium" : "large"}
                                                                fullWidth
                                                                onClick={() => handleApply(career)}
                                                                sx={{
                                                                    bgcolor: 'white',
                                                                    color: '#01796F',
                                                                    fontWeight: 600,
                                                                    py: 1.5,
                                                                    '&:hover': {
                                                                        bgcolor: '#f5f5f5'
                                                                    }
                                                                }}
                                                            >
                                                                Apply Now
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>

                    {/* Why Join Our Institution? - Swiper Slider */}
                    <Box sx={{ mb: { xs: 6, md: 10 } }}>
                        <Typography 
                            variant={isMobile ? "h4" : "h3"} 
                            gutterBottom 
                            align="center" 
                            sx={{ 
                                mb: 2,
                                color: '#01796F',
                                fontWeight: 700
                            }}
                        >
                            Why Join Our Institution?
                        </Typography>
                        <Typography 
                            variant={isMobile ? "body1" : "h6"} 
                            align="center" 
                            color="text.secondary" 
                            sx={{ 
                                mb: 6, 
                                maxWidth: 800, 
                                mx: 'auto',
                                px: { xs: 2, sm: 0 }
                            }}
                        >
                            Discover what makes us a great place to work and grow professionally
                        </Typography>

                        {/* Swiper Slider for Benefits */}
                        <Box sx={{ position: 'relative', px: { xs: 0, sm: 4 } }}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={isMobile ? 1 : (isTablet ? 2 : 3)}
                                navigation={{
                                    nextEl: '.swiper-button-next-benefits',
                                    prevEl: '.swiper-button-prev-benefits',
                                }}
                                pagination={{ 
                                    clickable: true,
                                    dynamicBullets: true 
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                style={{ padding: '20px 0 40px' }}
                            >
                                {benefits.map((benefit, index) => (
                                    <SwiperSlide key={index}>
                                        <Card sx={{ 
                                            height: '100%', 
                                            minHeight: 300,
                                            display: 'flex', 
                                            flexDirection: 'column',
                                            p: 3,
                                            borderRadius: 3,
                                            boxShadow: 3,
                                            transition: 'transform 0.3s',
                                            borderTop: '4px solid #01796F',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 20px rgba(1, 121, 111, 0.2)'
                                            }
                                        }}>
                                            <Box sx={{ 
                                                display: 'flex', 
                                                justifyContent: 'center', 
                                                mb: 3 
                                            }}>
                                                {benefit.icon}
                                            </Box>
                                            <Typography 
                                                variant={isMobile ? "h6" : "h5"} 
                                                gutterBottom 
                                                align="center"
                                                sx={{ fontWeight: 600, color: '#01796F' }}
                                            >
                                                {benefit.title}
                                            </Typography>
                                            <Typography 
                                                variant="body1" 
                                                align="center" 
                                                color="text.secondary"
                                                sx={{ flexGrow: 1 }}
                                            >
                                                {benefit.description}
                                            </Typography>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <IconButton
                                className="swiper-button-prev-benefits"
                                sx={{
                                    position: 'absolute',
                                    left: { xs: 0, sm: -40 },
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    bgcolor: '#01796F',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: '#025F54'
                                    },
                                    zIndex: 10,
                                    display: { xs: 'none', sm: 'flex' }
                                }}
                            >
                                <KeyboardArrowLeft />
                            </IconButton>
                            <IconButton
                                className="swiper-button-next-benefits"
                                sx={{
                                    position: 'absolute',
                                    right: { xs: 0, sm: -40 },
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    bgcolor: '#01796F',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: '#025F54'
                                    },
                                    zIndex: 10,
                                    display: { xs: 'none', sm: 'flex' }
                                }}
                            >
                                <KeyboardArrowRight />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Our Hiring Process - Swiper Slider */}
                    <Box sx={{ mb: { xs: 6, md: 10 } }}>
                        <Typography 
                            variant={isMobile ? "h4" : "h3"} 
                            gutterBottom 
                            align="center" 
                            sx={{ 
                                mb: 2,
                                color: '#01796F',
                                fontWeight: 700
                            }}
                        >
                            Our Hiring Process
                        </Typography>
                        <Typography 
                            variant={isMobile ? "body1" : "h6"} 
                            align="center" 
                            color="text.secondary" 
                            sx={{ 
                                mb: 6, 
                                maxWidth: 800, 
                                mx: 'auto',
                                px: { xs: 2, sm: 0 }
                            }}
                        >
                            Simple and transparent application journey from start to finish
                        </Typography>

                        {/* Mobile/Tablet View - Stepper */}
                        {isMobile || isTablet ? (
                            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                                <Card sx={{ 
                                    p: 3, 
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    textAlign: 'center',
                                    mb: 3,
                                    borderTop: '4px solid #01796F'
                                }}>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#01796F', fontWeight: 600 }}>
                                        {hiringProcess[activeStep].title}
                                    </Typography>
                                    <Box sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #01796F 0%, #025F54 100%)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 28,
                                        fontWeight: 700,
                                        mx: 'auto',
                                        my: 2
                                    }}>
                                        {hiringProcess[activeStep].step}
                                    </Box>
                                    <Typography variant="body1" color="text.secondary">
                                        {hiringProcess[activeStep].desc}
                                    </Typography>
                                </Card>

                                <MobileStepper
                                    variant="dots"
                                    steps={hiringProcess.length}
                                    position="static"
                                    activeStep={activeStep}
                                    sx={{ 
                                        bgcolor: 'transparent',
                                        justifyContent: 'center',
                                        mt: 2,
                                        '& .MuiMobileStepper-dot': {
                                            backgroundColor: '#ccc'
                                        },
                                        '& .MuiMobileStepper-dotActive': {
                                            backgroundColor: '#01796F'
                                        }
                                    }}
                                    nextButton={
                                        <IconButton
                                            size="small"
                                            onClick={handleNext}
                                            sx={{ color: '#01796F' }}
                                        >
                                            <KeyboardArrowRight />
                                        </IconButton>
                                    }
                                    backButton={
                                        <IconButton
                                            size="small"
                                            onClick={handleBack}
                                            sx={{ color: '#01796F' }}
                                        >
                                            <KeyboardArrowLeft />
                                        </IconButton>
                                    }
                                />
                            </Box>
                        ) : (
                            // Desktop View - Grid
                            <Grid container spacing={3} justifyContent="center">
                                {hiringProcess.map((step) => (
                                    <Grid item xs={12} sm={6} md={4} key={step.step}>
                                        <Card sx={{ 
                                            height: '100%',
                                            p: 3,
                                            borderRadius: 3,
                                            boxShadow: 2,
                                            textAlign: 'center',
                                            transition: 'all 0.3s',
                                            border: '2px solid transparent',
                                            '&:hover': {
                                                borderColor: '#01796F',
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 12px 20px rgba(1, 121, 111, 0.2)'
                                            }
                                        }}>
                                            <Box sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #01796F 0%, #025F54 100%)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: 24,
                                                fontWeight: 700,
                                                mx: 'auto',
                                                mb: 3
                                            }}>
                                                {step.step}
                                            </Box>
                                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#01796F' }}>
                                                {step.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {step.desc}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>

                    {/* Call to Action - Updated with #01796F background */}
                    
                </Container>
            </Box>

            {/* Application Dialog */}
            <Dialog 
                open={applicationDialog} 
                onClose={handleCloseDialog} 
                maxWidth="sm" 
                fullWidth
                PaperProps={{
                    sx: { 
                        borderRadius: 2,
                        m: { xs: 2, sm: 3 }
                    }
                }}
            >
                <DialogTitle sx={{ 
                    background: 'linear-gradient(135deg, #01796F 0%, #025F54 100%)',
                    color: 'white',
                    py: 3
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Apply for {selectedCareer?.position}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {selectedCareer?.department} • {selectedCareer?.location}
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                        Please fill out the application form below. We'll contact you within 5-7 business days.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={applicationData.name}
                                onChange={handleApplicationChange}
                                required
                                variant="outlined"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#01796F',
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <PeopleIcon sx={{ mr: 1, color: '#01796F' }} />
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={applicationData.email}
                                onChange={handleApplicationChange}
                                required
                                variant="outlined"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#01796F',
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <EmailIcon sx={{ mr: 1, color: '#01796F' }} />
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={applicationData.phone}
                                onChange={handleApplicationChange}
                                required
                                variant="outlined"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#01796F',
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <PhoneIcon sx={{ mr: 1, color: '#01796F' }} />
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Cover Letter"
                                name="coverLetter"
                                value={applicationData.coverLetter}
                                onChange={handleApplicationChange}
                                required
                                multiline
                                rows={isMobile ? 3 : 5}
                                variant="outlined"
                                placeholder="Tell us about your experience and why you're interested in this position..."
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#01796F',
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <DescriptionIcon sx={{ 
                                        mr: 1, 
                                        color: '#01796F', 
                                        alignSelf: 'flex-start', 
                                        mt: isMobile ? 1.5 : 2 
                                    }} />
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Alert severity="info" sx={{ mt: 3, borderColor: '#01796F' }}>
                        <Typography variant="body2">
                            After submitting, you'll receive an email to upload your resume and other documents.
                        </Typography>
                    </Alert>
                </DialogContent>
                <DialogActions sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    pt: 0,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 0 }
                }}>
                    <Button 
                        onClick={handleCloseDialog} 
                        variant="outlined" 
                        fullWidth={isMobile}
                        sx={{ 
                            mr: { sm: 2 },
                            mb: { xs: 1, sm: 0 },
                            borderColor: '#01796F',
                            color: '#01796F',
                            '&:hover': {
                                borderColor: '#025F54',
                                bgcolor: 'rgba(1, 121, 111, 0.04)'
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmitApplication}
                        variant="contained"
                        size={isMobile ? "medium" : "large"}
                        disabled={!applicationData.name || !applicationData.email || !applicationData.phone || !applicationData.coverLetter}
                        fullWidth={isMobile}
                        sx={{ 
                            px: { sm: 4 },
                            bgcolor: '#01796F',
                            '&:hover': {
                                bgcolor: '#025F54'
                            }
                        }}
                    >
                        Submit Application
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Careers;