import React from 'react';
import { Typography, Button, Switch, Box, Grow, Card } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExperienceLayout from '@/Layouts/ExperienceLayout';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { mainBoxStyles, secondaryBoxStyles, NextButtonStyles, PreviousButtonStyles } from './Experiences.style';


interface TextBoxInterface {
    text: string,
    title: string,
    activeIndex: number
}

const texts = [
    [
        "Packing Hack: Use Reef-Safe Sunscreen & Portable Water Filters for Remote Islands",
        "Local Insight: How to Bargain at Secret Markets Without Offending Vendors",
        "Flight Trick: Book Midweek for Empty Seats on Jungle-Hopping Propeller Planes",
        "Safety Must: Always Carry Satellite Messengers in Uncharted Safari Zones",
        "Cultural Key: Learn 3 Tribal Greetings to Unlock Hidden Village Experiences",
        "Discover hidden lagoons only locals know about—perfect for snorkeling and avoiding tourist crowds."
    ],
    [
        "Top 5 Beach Destinations for a Laid-Back Getaway",
        "How to Pack Light for a Weekend Trip",
        "Best Coffee Shops to Visit While Traveling",
        "Must-See Hidden Gems in Your Own City",
        "How to Plan a Relaxing Road Trip with Friends",
        "How to book last-minute getaways without breaking the bank or losing quality experiences."
    ],
    [
        "Best Route Planning for a Cross-Country Adventure",
        "How to Save on Gas for Long Road Trips",
        "Must-See Landmarks on Your Next Journey",
        "Traveling with Pets: What You Need to Know",
        "Best Snacks to Keep You Energized on the Road",
        "Create the ultimate playlist to keep your road trip exciting, from classics to modern adventure anthems."
    ],
    [
        "How to Stay Productive While Traveling for Work",
        "Essential Business Trip Packing List",
        "Top Apps for Managing Business Travel Expenses",
        "How to Network Effectively While on a Business Trip",
        "Best Hotels for Business Travelers in Major Cities",
        "Overcome jet lag faster with hydration tips, light exposure tricks, and strategic napping."
    ]
];

const titles = [
    [
        "Eco-Packing Essentials",
        "Market Bargaining Secrets",
        "Smart Flight Booking",
        "Wilderness Safety",
        "Cultural Bridge",
        "Secret Lagoon Escapes"
    ],
    [
        "Relaxing Getaways",
        "Pack Light & Travel Smart",
        "Coffee Lover’s Guide",
        "Explore Local Gems",
        "Ultimate Road Trip",
        "Spontaneous Weekend Plans"
    ],
    [
        "Cross-Country Planning",
        "Fuel-Saving Tips",
        "Iconic Landmarks",
        "Pet-Friendly Travel",
        "Healthy Road Snacks",
        "Best Road Trip Playlists"
    ],
    [
        "Productivity On-the-Go",
        "Packing for Business",
        "Expense Tracking",
        "Networking Tips",
        "Business Hotel Picks",
        "Jet Lag Recovery Hacks"
    ]
];


const logos = [
    "/Images/ExperienceTypes/suitcase-logo.jpg",
    "/Images/ExperienceTypes/casual-logo.jpg",
    "/Images/ExperienceTypes/across-logo.jpg",
    "/Images/ExperienceTypes/business-logo.jpg"
];

const TextBox: React.FC<TextBoxInterface> = ({ text, title, activeIndex }) => (
    <Card sx={{ width: 250, height: 400 }}>
        <CardMedia
            sx={{ height: 190 }}
            image={logos[activeIndex]}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {text}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export default function SimpleGrow() {
    const [checked, setChecked] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0); 

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const handleNext = (step: number) => {
        if (!(activeIndex === 0 && step === -1)) //sa nu se faca prev la prima pagina
            setActiveIndex((prevIndex) => (prevIndex + step) % texts.length); 
    };

    return (
        <ExperienceLayout activeIndex={activeIndex}>
            <Box sx={ mainBoxStyles(activeIndex) }>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Discover More"
                    labelPlacement="start"
                    sx={{
                        color: 'white',
                        '& .MuiTypography-root': {
                            fontSize: '3rem',
                            fontWeight: 'bold',
                        }
                    }}
                />

                <Box sx={ secondaryBoxStyles(activeIndex) }>
                    {texts[activeIndex].map((text, index) => (
                        <Grow
                            key={index}
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: index * 300 } : {})}
                        >
                            <Box sx={{ width: 200, height: 200 }}>
                                <TextBox text={text} title={titles[activeIndex][index]} activeIndex={activeIndex} />
                            </Box>
                        </Grow>
                    ))}
                </Box>
            </Box>

            <Button
                variant="contained"
                onClick={() => handleNext(1)}
                sx={NextButtonStyles(activeIndex)}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Next
                </Typography>
            </Button>

            <Button
                variant="contained"
                onClick={() => handleNext(-1)}
                sx={PreviousButtonStyles(activeIndex)}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Previous
                </Typography>
            </Button>
        </ExperienceLayout>
    );
}
