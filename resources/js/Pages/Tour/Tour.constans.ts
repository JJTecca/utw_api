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
    // aici mai pot adauga
}; 