import React, { useState } from 'react';
import WorldTourLayout from "@/Layouts/WorldTourLayout";
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";
import RecipeReviewCard from "@/Components/Card";
import { 
  mainBoxStyles,
  headerBoxStyles,
  countryListStyles,
  cardContainerStyles
} from './Tour.styles';

export default function Tour() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const handleCountryClick = (countryCode: string) => {
        setSelectedCountry(countryCode);
    };

    return (
        <WorldTourLayout>
            <Box sx={mainBoxStyles}>
                <Box sx={headerBoxStyles}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Pick Your Next Adventure With Us
                    </Typography>
                </Box>

                <Box sx={countryListStyles}>
                    <List>
                        {countries.map((country) => (
                            <ListItem 
                                key={country.cca2} 
                                onClick={() => handleCountryClick(country.cca2)}
                                sx={{  
                                    borderBottom: '1px solid #e0e0e0', 
                                    '&:last-of-type': {
                                        borderBottom: 'none', 
                                    },
                                    '&:hover': { backgroundColor: 'lightcoral' } 
                                }}
                            >
                                <ReactCountryFlag
                                    countryCode={country.cca2}
                                    svg
                                    style={{
                                        marginRight: '12px',
                                        fontSize: '1.5em',
                                    }}
                                />
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: '1.35rem', textAlign: 'center' }}>
                                            {country.name.common}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>

            {selectedCountry && (
                <Box sx={cardContainerStyles}>
                    {countryCards[selectedCountry]?.map((card, index) => (
                        <Box key={index} sx={{ display: 'flex'}}>
                            <RecipeReviewCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />  
                        </Box>
                    ))}
                </Box>
            )}
        </WorldTourLayout>
    );
}