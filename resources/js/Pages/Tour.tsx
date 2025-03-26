import React, { useState } from 'react';
import WorldTourLayout from "@/Layouts/WorldTourLayout";
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag"; 
import RecipeReviewCard from "@/Components/Card";

interface Card { //TODO : SA IL PUN IN ALT FISIER CA STA DEGEABA AICI
    image: string;
    title: string;
    description: string;
}

//aici e un fel de matrice de cards
interface CountryCards {
    [key: string]: Card[];
}

const countryCards: CountryCards = { //un fel de implements din java interface
    "BR": [
        { image: "/Images/Attractions/jesus-brazil.jpg", title: "Jesus Statue Brazil",description: "The Christ the Redeemer statue in Rio de Janeiro, Brazil, is an iconic 98-foot-tall Art Deco statue of Jesus Christ, offering breathtaking panoramic views of the city and recognized as one of the New Seven Wonders of the World." },
        { image: "/Images/Attractions/copacabana.jpg", title: "Copacabana Beach",description: "Copacabana Beach is a lively and iconic destination in Rio de Janeiro, famous for its golden sands, vibrant energy, and bustling promenade lined with shops and cafes." },
        { image: "/Images/Attractions/ipanema.jpg", title: "Ipanema Beach",description: "Ipanema Beach is a chic and scenic spot in Rio, renowned for its stunning sunsets, clear waters, and the backdrop of the Two Brothers Mountain, immortalized in the song <<The Girl of Ipanema>> "},
        { image: "/Images/Attractions/favelas.jpg", title: "The large favelas of Brazil",description: "The favelas of Brazil are vibrant, densely populated urban neighborhoods, often built on hillsides, known for their resilience, strong sense of community, and cultural richness, though they also face challenges related to poverty and infrastructure."}
    ],
    "US": [
        { image: "/Images/Attractions/NY_liberty.jpg", title: "Statue of Liberty",description: "The Statue of Liberty in New York Harbor is a colossal neoclassical sculpture gifted by France, symbolizing freedom and democracy, and serving as an enduring icon of hope and opportunity for immigrants arriving in the United States." },
        { image: "/Images/Attractions/grand-canyon.jpg", title: "Grand Canyon",description: "The Grand Canyon in Arizona is a breathtaking natural wonder, carved by the Colorado River over millions of years, showcasing awe-inspiring layered rock formations and spanning over 277 miles of stunning, rugged landscapes." },
    ],
    // aici mai pot adauga
};

export default function Tour() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const handleCountryClick = (countryCode: string) => {
        setSelectedCountry(countryCode);
    };

    return (
        <WorldTourLayout>
            <Box
                sx={{
                    position: 'absolute',
                    width: '30%',
                    height: '65%',
                    left: '8%',
                    top: '15%',
                    mx: 'auto',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    borderRadius: 2,
                }}
            >
                <Box sx={{ backgroundColor: 'turquoise', padding: '20px', mb: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Pick Your Next Adventure With Us
                    </Typography>
                </Box>

                <Box
                    sx={{
                        height: '75%',
                        backgroundColor: 'white',
                        borderRadius: 2,
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': { 
                            width: '20px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#ccc',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#f0f0f0',
                        },
                    }}
                >
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
                <Box sx={{ 
                    position: 'absolute',
                    top: '5%',
                    left: '52%',
                    width: '40%',
                    height: '90%',
                    backgroundColor: 'white',
                    display: 'flex',     
                    padding: 6,
                    gap: 9,
                    flexWrap: 'wrap', // Wrap to a new line if needed
                    overflowY: 'scroll'
                }}>
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