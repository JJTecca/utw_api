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
        "BG":[
            {image:"/Images/Attractions/rila.jpg", title: "Rila Monastery", description: "Rila Monastery is a UNESCO World Heritage site in Bulgaria, known for its stunning architecture, vibrant frescoes, and serene mountain setting, making it a significant cultural and spiritual landmark." },
            {image:"/Images/Attractions/sofia.jpg", title: "Sofia", description: "Sofia is the capital city of Bulgaria, known for its rich history, diverse architecture, and vibrant cultural scene, offering a blend of ancient ruins and modern amenities." },
            {image:"/Images/Attractions/bansko.jpg", title: "Bansko", description: "Bansko is a popular ski resort town in Bulgaria, nestled in the Pirin Mountains, known for its stunning alpine scenery, winter sports, and charming old town with traditional architecture." },
        ],
        "BA":[
        {image:"/Images/Attractions/Sarajevo.jpg", title: "Sarajevo", description: "Sarajevo is the capital city of Bosnia and Herzegovina, known for its rich history, diverse culture, and stunning architecture, offering a unique blend of Eastern and Western influences." },
        {image:"/Images/Attractions/Mostar.jpg", title: "Mostar", description: "Mostar is a picturesque city in Bosnia and Herzegovina, famous for its iconic Stari Most (Old Bridge), charming old town, and rich cultural heritage, showcasing a blend of Ottoman and Mediterranean influences." },
        {image:"/Images/Attractions/Kvravica.jpg", title: "Kravica Waterfalls", description: "Kravica Waterfalls is a stunning natural wonder in Bosnia and Herzegovina, featuring a series of cascading waterfalls surrounded by lush greenery, offering a picturesque setting for swimming and relaxation." },
        ],
        "CA":[
            {image:"/Images/Attractions/Niagara.jpg", title: "Niagara Falls", description: "Niagara Falls is a breathtaking natural wonder located on the border of Canada and the United States, known for its powerful waterfalls and stunning views, attracting millions of visitors each year." },
            {image:"/Images/Attractions/Aurora.jpg", title: "Northern Lights", description: "The Northern Lights, or Aurora Borealis, are a stunning natural light display in the polar regions, caused by solar particles colliding with the Earth's atmosphere, creating vibrant colors in the night sky." },
            {image:"/Images/Attractions/Vancouver.jpg", title: "Vancouver", description: "Vancouver is a vibrant coastal city in Canada, known for its stunning natural beauty, diverse culture, and outdoor recreational opportunities, offering a unique blend of urban life and breathtaking landscapes." },
            {image:"/Imgaes/Attractions/IceHotel.jpg", title: "Ice Hotel", description: "The Ice Hotel in Quebec, Canada, is a unique hotel made entirely of ice and snow, featuring stunning ice sculptures, themed suites, and a bar made of ice, offering a magical winter experience." },
        ],
        "CN":[
            {image:"/Images/Attractions/MareleZid.jpg", title: "Great Wall of China", description: "The Great Wall of China is an ancient series of walls and fortifications, stretching over 13,000 miles, built to protect Chinese states from invasions, and is a UNESCO World Heritage site." },
            {image:"/IMages/Attractons/ArmataTeracota.jpg", title: "Terracotta Army", description: "The Terracotta Army is a collection of thousands of life-sized clay soldiers and horses buried with China's first emperor, Qin Shi Huang, in Xi'an, showcasing ancient Chinese artistry and military history." },
            {image:"/Images/Attractions/HongKong.jpg", title: "Hong Kong", description: "Hong Kong is a vibrant metropolis known for its stunning skyline, rich cultural heritage, and bustling markets, offering a unique blend of Eastern and Western influences." },
            {image:"/Images/Attractions/ShaolinTemple.jpg", title: "Shaolin Temple", description: "The Shaolin Temple is a historic Buddhist monastery in China, renowned for its association with martial arts, particularly Shaolin Kung Fu, and its rich cultural and spiritual heritage." },
        ],
        "CO":[
            {image:"/Images/Attractions/Bogota.jpg", title: "Bogota", description: "Bogotá is the capital city of Colombia, known for its rich history, vibrant culture, and stunning Andean backdrop, offering a blend of colonial architecture and modern urban life." },
            {image:"/Images/Attractions/Cartagena.jpg", title: "Cartagena", description: "Cartagena is a historic coastal city in Colombia, known for its well-preserved colonial architecture, vibrant culture, and beautiful Caribbean beaches, making it a popular tourist destination." },
            {image:"/Images/Attractions/NationalTayrona.jpg", title: "Tayrona National Park", description: "Tayrona National Park is a stunning natural reserve on Colombia's Caribbean coast, known for its lush jungles, pristine beaches, and diverse wildlife, offering a unique blend of adventure and relaxation." },
            {image:"/Images/Attractions/Chicamocha.jpg", title: "Chicamocha Canyon", description: "Chicamocha Canyon is a breathtaking natural wonder in Colombia, known for its stunning landscapes, deep gorges, and outdoor activities like hiking and paragliding, offering a unique adventure experience." },
        ],
        "CH":[
            {image:"/Images/Attractions/Zurich.jpg", title: "Zurich", description: "Zurich is the largest city in Switzerland, known for its picturesque lakeside setting, vibrant cultural scene, and as a global financial hub, offering a blend of modernity and natural beauty." },
            {image:"/Images/Attractions/LaculGeneva.jpg", title: "Lake Geneva", description: "Lake Geneva is a stunning crescent-shaped lake located on the border of Switzerland and France, known for its picturesque scenery, charming towns, and recreational activities like sailing and swimming." },
            {image:"/Images/Attractions/Matterhorn.jpg", title: "Matterhorn", description: "The Matterhorn is a iconic pyramid-shaped mountain in the Swiss Alps, known for its stunning beauty and challenging climbing routes, making it one of the most recognizable peaks in the world." },
            {image:"/Images/Attractions/Interlaken.jpg", title: "Interlaken", description: "Interlaken is a picturesque resort town in Switzerland, nestled between Lake Thun and Lake Brienz, known for its stunning alpine scenery, outdoor activities, and as a gateway to the Jungfrau region." },
        ],
        "CL":[
            {image:"/Images/Attractions/Santiago.jpg", title: "Santiago", description: "Santiago is the capital city of Chile, nestled in a valley surrounded by the Andes mountains, known for its vibrant culture, historic architecture, and as a gateway to Chile's stunning natural landscapes." },
            {image:"/Images/Attractions/Atacama.jpg", title: "Atacama Desert", description: "The Atacama Desert in Chile is one of the driest places on Earth, known for its stunning landscapes, unique geological formations, and rich biodiversity, offering a surreal and otherworldly experience." },
            {image:"/Images/Attractions/Valledelaluna.jpg", title: "Valle de la Luna", description: "Valle de la Luna, or Valley of the Moon, is a stunning desert landscape in Chile's Atacama Desert, known for its unique rock formations, lunar-like terrain, and breathtaking sunsets." },
            {image:"/Images/Attractions/Anakena.jpg", title: "Anakena Beach", description: "Anakena Beach is a stunning white sand beach on Easter Island, known for its crystal-clear waters, palm trees, and the iconic moai statues that dot the landscape, offering a unique blend of natural beauty and cultural heritage." },
        ],
        "AW":[
            {image:"/Images/Attractions/ArubaBeach.jpg", title: "Aruba Beach", description: "Aruba Beach is a stunning Caribbean destination known for its powdery white sands, crystal-clear turquoise waters, and vibrant marine life, making it a paradise for beach lovers and water sports enthusiasts." },
            {image:"/Images/Attractions/Arikok.jpg", title: "Arikok National Park", description: "Arikok National Park is a protected area in Aruba, known for its stunning landscapes, unique rock formations, and diverse wildlife, offering hiking trails and opportunities to explore the island's natural beauty." },
            {image:"/Images/Attractions/SanNicolas.jpg", title: "San Nicolas", description: "San Nicolas is a charming town in Aruba, known for its vibrant street art, cultural heritage, and beautiful beaches, offering a unique blend of local culture and stunning coastal scenery." },
        ],
        "AO":[
            {image:"/Images/Attractions/Kissama.jpg", title: "Kissama National Park", description: "Kissama National Park is a stunning wildlife reserve in Angola, known for its diverse ecosystems, including savannahs and wetlands, and home to a variety of wildlife, including elephants, giraffes, and various bird species." },
            {image:"/Images/Attractions/CaboLedo.jpg", title: "Cabo Ledo", description: "Cabo Ledo is a beautiful beach destination in Angola, known for its stunning coastline, clear waters, and vibrant marine life, offering opportunities for relaxation and water sports." },
            {image:"/Images/Attractions/Luanda.jpg", title: "Luanda", description: "Luanda is the capital city of Angola, known for its vibrant culture, stunning coastal views, and rich history, offering a blend of modernity and traditional Angolan heritage." },
        ],
        "AI":[
            {image:"/Images/Attractions/ShoalBay.jpg", title: "Shoal Bay", description: "Shoal Bay is a stunning beach destination in Anguilla, known for its powdery white sands, crystal-clear turquoise waters, and vibrant coral reefs, making it a paradise for beach lovers and snorkelers." },
            {image:"/Images/Attractions/MeadsBay.jpg", title: "Meads Bay", description: "Meads Bay is a picturesque beach in Anguilla, known for its soft white sands, calm waters, and luxurious beachfront resorts, offering a tranquil escape for relaxation and water activities." },

        ],
        "AL":[
            {image:"/Images/Attractions/Ksamil.jpg", title: "Ksamil", description: "Ksamil is a stunning beach destination in Albania, known for its crystal-clear waters, white sandy beaches, and picturesque islands, offering a perfect blend of relaxation and natural beauty." },
            {image:"/Images/Attractions/Butrint.jpg", title: "Butrint National Park", description: "Butrint National Park is a UNESCO World Heritage site in Albania, known for its rich archaeological heritage, stunning landscapes, and diverse ecosystems, offering a glimpse into ancient civilizations." },
            {image:"/Images/Attractions/Rozafa.jpg", title: "Rosa Fa", description: "Rosa Fa is a picturesque beach destination in Albania, known for its stunning landscapes, crystal-clear waters, and vibrant marine life, offering a perfect escape for beach lovers and nature enthusiasts." },
            {image:"/Images/Attractions/Llogara.jpg", title: "Llogara National Park", description: "Llogara National Park is a stunning natural reserve in Albania, known for its breathtaking landscapes, diverse flora and fauna, and panoramic views of the Ionian Sea, offering hiking trails and outdoor adventures." }, 
        ],
        "AE":[
            {image:"/Images/Attractions/BurjKhalifa.jpg", title: "Burj Khalifa", description: "The Burj Khalifa in Dubai, UAE, is the tallest building in the world, standing at 828 meters (2,717 feet), known for its stunning architecture, luxurious amenities, and breathtaking views from its observation decks." },
            {image:"/Images/Attractions/BurjAlArab.jpg", title: "Burj Al Arab", description: "The Burj Al Arab in Dubai, UAE, is a luxurious hotel known for its distinctive sail-shaped silhouette, opulent interiors, and world-class service, often regarded as one of the most luxurious hotels in the world." },
            {image:"/Images/Attractions/DubaiMall.jpg", title: "Dubai Mall", description: "The Dubai Mall is one of the largest shopping malls in the world, located in Dubai, UAE, featuring over 1,200 retail stores, an indoor ice rink, an aquarium, and a wide range of dining and entertainment options." },
            {image:"/Images/Attractions/PalmJumeirah.jpg", title: "Palm Jumeirah", description: "Palm Jumeirah is an artificial archipelago in Dubai, UAE, shaped like a palm tree, known for its luxurious resorts, upscale dining, and stunning waterfront views, making it a popular tourist destination." },
        ],
        "AM":[
            {image:"/Images/Attractions/Yerevan.jpg", title: "Yerevan", description: "Yerevan is the capital city of Armenia, known for its rich history, vibrant culture, and stunning architecture, offering a blend of ancient landmarks and modern amenities." },
            {image:"/Images/Attractions/Geghard.jpg", title: "Geghard Monastery", description: "Geghard Monastery is a UNESCO World Heritage site in Armenia, known for its stunning rock-cut architecture, ancient churches, and beautiful natural surroundings, making it a significant cultural and historical landmark." },
            {image:"/Images/Attractions/LaculSevan.jpg", title: "Lake Sevan", description: "Lake Sevan is a stunning high-altitude lake in Armenia, known for its crystal-clear waters, picturesque landscapes, and rich biodiversity, offering opportunities for swimming, boating, and relaxation." },
        ],
        "AZ":[
            {image:"/Images/Attractions/Baku.jpg", title: "Baku", description: "Baku is the capital city of Azerbaijan, known for its stunning blend of modern architecture and ancient history, vibrant culture, and beautiful waterfront along the Caspian Sea." },
            {image:"/Images/Attractions/Yanar.jpg", title: "Yanar Dag", description: "Yanar Dag, or Burning Mountain, is a natural gas fire that blazes continuously on a hillside near Baku, Azerbaijan, known for its unique geological phenomenon and cultural significance." },
            {image:"/Images/Attractions/Quba.jpg", title: "Quba", description: "Quba is a picturesque town in Azerbaijan, known for its stunning natural landscapes, rich cultural heritage, and as a gateway to the beautiful Quba-Qusar region." },
        ],
        "BI":[
            {image:"/Images/Attractions/Bujumbura.jpg", title: "Bujumbura", description: "Bujumbura is the former capital city of Burundi, known for its stunning lakeside location on Lake Tanganyika, vibrant culture, and rich history, offering a blend of natural beauty and urban life." },
            {image:"/Images/Attractions/Kibira.jpg", title: "Kibira National Park", description: "Kibira National Park is a protected rainforest in Burundi, known for its rich biodiversity, including rare primate species, and offers opportunities for hiking and wildlife observation." },
            {image:"/Images/Attractions/Gitega.jpg", title: "Gitega", description: "Gitega is the political capital of Burundi, known for its rich cultural heritage, historic sites, and beautiful landscapes, offering a glimpse into the country's history and traditions." },
        ],
        "BJ":[
            {image:"/Images/Attractions/Ouidah.jpg", title: "Ouidah", description: "Ouidah is a coastal city in Benin, known for its rich history as a former slave trade port, vibrant culture, and significant landmarks, including the Temple of Pythons and the Door of No Return." },
            {image:"/Images/Attractions/Natitingou.jpg", title: "Natitingou", description: "Natitingou is a picturesque town in northern Benin, known for its stunning landscapes, traditional Tammari villages, and as a gateway to the Atakora Mountains." },
            {image:"/Images/Attractions/Pendjari.jpg", title: "Pendjari National Park", description: "Pendjari National Park is a protected wildlife reserve in Benin, known for its diverse ecosystems, including savannahs and wetlands, and home to a variety of wildlife, including elephants and lions." },
        ],
        "CI":[
            {image:"/Images/Attractions/Yamoussoukro.jpg", title: "Yamoussoukro", description: "Yamoussoukro is the political capital of Ivory Coast, known for its stunning Basilica of Our Lady of Peace, vibrant culture, and beautiful landscapes, offering a blend of history and modernity." },
            {image:"/Images/Attractions/Abidjan.jpg", title: "Abidjan", description: "Abidjan is the economic capital of Ivory Coast, known for its vibrant culture, modern skyline, and beautiful beaches along the Ebrie Lagoon, offering a blend of urban life and natural beauty." },
        ],
        "CM":[
            {image:"/Images/Attractions/Douala.jpg", title: "Douala", description: "Douala is the largest city and economic capital of Cameroon, known for its vibrant culture, bustling markets, and beautiful coastal views along the Wouri River." },
            {image:"/Images/Attractions/MountCameroon.jpg", title: "Mount Cameroon", description: "Mount Cameroon is an active volcano and the highest peak in West Africa, known for its stunning landscapes, diverse ecosystems, and opportunities for hiking and adventure." },
        ],
        "CR":[
            {image:"/Images/Attractions/ArenalVolcano.jpg", title: "Arenal Volcano", description: "Arenal Volcano is an active stratovolcano in Costa Rica, known for its perfect conical shape, lush rainforest surroundings, and geothermal hot springs, making it a popular destination for adventure seekers." },
            {image:"/Images/Attractions/Cahuita.jpg", title: "Cahuita National Park", description: "Cahuita National Park is a stunning coastal reserve in Costa Rica, known for its beautiful beaches, coral reefs, and diverse wildlife, offering opportunities for snorkeling, hiking, and relaxation." },
            {image:"/Images/Attractions/tortuguero.jpg", title: "Tortuguero National Park", description: "Tortuguero National Park is a unique coastal reserve in Costa Rica, known for its lush rainforests, intricate canal systems, and as a nesting site for endangered sea turtles." },
            {image:"/Images/Attractions/Monteverde.jpg", title: "Monteverde Cloud Forest", description: "Monteverde Cloud Forest is a stunning ecological reserve in Costa Rica, known for its lush biodiversity, misty cloud cover, and unique ecosystems, offering opportunities for hiking and wildlife observation." },
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