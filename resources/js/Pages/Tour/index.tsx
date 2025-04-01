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
    interface Card { 
        image: string;
        title: string;
        description: string;
    }
    
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
        "AR": [
            {image:"/Images/Attractions/buenosAires.jpg", title: "Buenos Aires", description: "Buenos Aires is the vibrant capital city of Argentina, known for its European-style architecture, rich cultural heritage, and lively tango scene, offering a unique blend of history, art, and gastronomy." },
            {image:"/Images/Attractions/cascada-iguazu.jpg", title: "Iguazu Falls", description: "Iguazu Falls is a majestic natural wonder located on the border of Argentina and Brazil, comprising a series of 275 cascading waterfalls, surrounded by lush rainforest, and recognized as one of the New Seven Wonders of Nature." },
            {image:"/Images/Attractions/mendoza.jpg", title: "Mendoza", description: "Mendoza is a picturesque city in Argentina's wine country, renowned for its Malbec wines, stunning Andean landscapes, and outdoor adventures, including hiking, horseback riding, and whitewater rafting." }
        ],
        "PT":[
          {image:"/Images/Attractions/SaoJorge.jpg", title: "Sao Jorge Castle", description: "Sao Jorge Castle is a historic fortress in Lisbon, Portugal, offering panoramic views of the city and the Tagus River, and serving as a symbol of the country's rich history and maritime heritage." },
          {image:"/Images/Attractions/poduldomLuis.jpg", title: "Dom Luis I Bridge", description: "The Dom Luis I Bridge in Porto, Portugal, is an iconic double-deck metal bridge spanning the Douro River, connecting the city's historic Ribeira district with the Vila Nova de Gaia area, famous for its port wine cellars." },
          {image:"/Images/Attractions/Evora_Tours_Portugal_Lisbon-1.jpg", title: "Evora", description: "Evora is a charming medieval town in Portugal's Alentejo region, known for its well-preserved historic center, Roman ruins, and the iconic Chapel of Bones, a macabre chapel adorned with human skulls and bones." }
        ],
        "AU":[
            {image:"/Images/Attractions/BarieraCorali.jpg", title: "Great Barrier Reef", description: "The Great Barrier Reef is the world's largest coral reef system, located off the coast of Queensland, Australia, renowned for its stunning biodiversity, vibrant marine life, and breathtaking underwater landscapes." },
            {image:"/Images/Attractions/Kakadu.jpg", title: "Kakadu National Park", description: "Kakadu National Park is a UNESCO World Heritage site in Australia, known for its stunning landscapes, diverse wildlife, and rich Aboriginal cultural heritage, offering visitors a unique blend of natural beauty and ancient history." },
            {image:"/Images/Attractions/Sydney.jpg", title: "Sydney Opera House", description: "The Sydney Opera House is an iconic architectural masterpiece located on Sydney Harbour, Australia, known for its distinctive sail-like design and serving as a world-renowned performing arts venue." },
            {image:"/Images/Attractions/Kangaroo.jpg", title: "Kangaroo Island", description: "Kangaroo Island is a stunning natural paradise off the coast of South Australia, known for its diverse wildlife, pristine beaches, and rugged landscapes, offering visitors a unique opportunity to experience Australia's unique flora and fauna." }
        ],
        "AT":[
             {image:"/Images/Attractions/Viena.jpg", title: "Vienna", description: "Vienna is the capital city of Austria, known for its imperial palaces, classical music heritage, and vibrant cultural scene, offering a blend of history, art, and modernity." },
             {image:"/Images/Attractions/Lacul Wolfgangsee.jpg", title: "Wolfgangsee Lake", description: "Wolfgangsee Lake is a picturesque alpine lake in Austria, surrounded by stunning mountains and charming villages, offering opportunities for swimming, hiking, and enjoying the breathtaking scenery." },
             {image:"/Images/Attractions/Salzburg.jpg", title: "Salzburg", description: "Salzburg is a charming city in Austria, known for its baroque architecture, stunning alpine scenery, and as the birthplace of Mozart, offering a rich cultural experience and beautiful landscapes." },
            
        ],
        "BE":[
            {image:"/Images/Attractions/Bruxelles.jpg", title: "Brussels", description: "Brussels is the capital city of Belgium and the European Union, known for its stunning architecture, rich history, and vibrant culture, offering a blend of medieval charm and modern cosmopolitanism." },
            {image:"/Images/Attractions/Catedrala Sf. Bavo.jpg", title: "St. Bavo's Cathedral", description: "St. Bavo's Cathedral in Ghent, Belgium, is a stunning Gothic masterpiece known for its intricate architecture, beautiful stained glass windows, and the famous altarpiece, the Ghent Altarpiece." },
            {image:"/Images/Attractions/Parcul Național Eifel.jpg", title: "Eifel National Park", description: "Eifel National Park is a stunning natural reserve in Belgium, known for its lush forests, rolling hills, and diverse wildlife, offering opportunities for hiking, cycling, and enjoying the beauty of nature." },
        ],
       
        // aici mai pot adauga
    }; 

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