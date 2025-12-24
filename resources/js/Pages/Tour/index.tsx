/*************************************************
 * @format Tour Screen 
 * @author Maior Cristian
 * ********************************************* */ 
/****************************************************************************************************
 * 1. Import only necessary modules, in the correct logical order.
 * 2. Import screen components from their correct paths. 
 *    - If there's an error, try saving the file (Ctrl+S) or retyping with autocomplete.
 * 3. Import any react-native or gluestack themed necessarry UI 
 * 4. Define props (if any) using camelCase — similar to C's `typedef struct` style.
 * 5. Declare const variables.
 * 6. Add any extra/helper functions.
 * 7. Export the main component function.
 * 8. EVERY index.tsx FILE MUST HAVE A .ts FILE 
 * 9. Every style that has more than 2 props, put it in the .ts file , otherwise let it be here
 * 10. This shall be the ONLY home screen we have, as we need further improvements
 * 11. This file is #1 prior and needs the most frontend attention
 ****************************************************************************************************/
/****************************************************************************************************
 * 1. Displays the user header information fetched with backend data (not yet implemented)
 * 2. Shows featured destionations for the user to scroll down and get a view, also popular destinations
 * 3. Provides a booking system using his wallet details (not yet implemented)
 ****************************************************************************************************/
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Rating,
} from '@mui/material';
import {
  Flight as FlightIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Explore as ExploreIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';
import { styles } from './Tour.styles';
import GreeceDestination from '../../../../public/Images/Greece.png';
import PragueCastle from '../../../../public/Images/PragueCastle.png';
import PhuketThaiDestination from '../../../../public/Images/PhuketThailandDestination.png';

const featuredDestinations = [
  {
    id: 1,
    title: 'Santorini, Greece',
    subtitle: 'Cyclades Islands',
    description: 'Famous for its dramatic views, stunning sunsets, and white-washed houses with blue domes.',
    image: GreeceDestination,
    rating: 4.9,
    reviews: 1243,
    price: '$2,499',
    isFeatured: true,
    category: 'Island',
  },
  {
    id: 2,
    title: 'Amalfi Coast, Italy',
    subtitle: 'Campania Region',
    description: 'A stunning stretch of coastline with colorful cliffside villages overlooking the Tyrrhenian Sea.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 987,
    price: '$3,199',
    isFeatured: true,
    category: 'Coastal',
  },
  {
    id: 3,
    title: 'Kyoto, Japan',
    subtitle: 'Kansai Region',
    description: 'Ancient temples, traditional tea houses, and beautiful cherry blossoms in this cultural capital.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1892,
    price: '$2,899',
    isFeatured: true,
    category: 'Cultural',
  },
  {
    id: 4,
    title: 'Bali, Indonesia',
    subtitle: 'Lesser Sunda Islands',
    description: 'Spiritual retreats, lush rice terraces, and beautiful beaches in this tropical paradise.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 2789,
    price: '$1,799',
    isFeatured: true,
    category: 'Tropical',
  },
  {
    id: 5,
    title: 'Swiss Alps',
    subtitle: 'Switzerland',
    description: 'Majestic mountains, crystal clear lakes, and charming alpine villages await in this winter wonderland.',
    image: 'https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1456,
    price: '$3,499',
    isFeatured: true,
    category: 'Mountain',
  },
  {
    id: 6,
    title: 'Maldives',
    subtitle: 'Indian Ocean',
    description: 'Overwater bungalows, crystal clear turquoise waters, and pristine white sand beaches.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 2345,
    price: '$4,199',
    isFeatured: true,
    category: 'Luxury',
  },
  {
    id: 7,
    title: 'Paris, France',
    subtitle: 'Île-de-France',
    description: 'The City of Light with iconic landmarks, world-class cuisine, and romantic atmosphere.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 4123,
    price: '$2,199',
    category: 'Urban',
  },
  {
    id: 8,
    title: 'Prague, Czech Republic',
    subtitle: 'Bohemia',
    description: 'Medieval architecture, charming old town, and rich European history.',
    image: PragueCastle,
    rating: 4.8,
    reviews: 2345,
    price: '$1,999',
    category: 'Historical',
  },
];

const popularDestinations = [
  {
    id: 7,
    title: 'Paris, France',
    subtitle: 'Île-de-France',
    description: 'The City of Light with iconic landmarks, world-class cuisine, and romantic atmosphere.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 4123,
    price: '$2,199',
    category: 'Urban',
  },
  {
    id: 8,
    title: 'New York City',
    subtitle: 'New York, USA',
    description: 'The city that never sleeps with iconic skyscrapers, Broadway shows, and diverse culture.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 4567,
    price: '$2,499',
    category: 'Urban',
  },
  {
    id: 9,
    title: 'Sydney, Australia',
    subtitle: 'New South Wales',
    description: 'Iconic Opera House, beautiful harbor, and stunning beaches in this vibrant coastal city.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 2890,
    price: '$3,299',
    category: 'Coastal',
  },
  {
    id: 10,
    title: 'Dubai, UAE',
    subtitle: 'United Arab Emirates',
    description: 'Futuristic skyscrapers, luxury shopping, and desert adventures in this modern metropolis.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 3123,
    price: '$2,899',
    category: 'Luxury',
  },
  {
    id: 11,
    title: 'Rome, Italy',
    subtitle: 'Lazio Region',
    description: 'Ancient history, stunning architecture, and delicious cuisine in the Eternal City.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 3789,
    price: '$2,399',
    category: 'Historical',
  },
  {
    id: 12,
    title: 'Barcelona, Spain',
    subtitle: 'Catalonia',
    description: 'Gaudi architecture, vibrant culture, and beautiful Mediterranean beaches.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 2987,
    price: '$2,199',
    category: 'Cultural',
  },
  {
    id: 13,
    title: 'Tokyo, Japan',
    subtitle: 'Kanto Region',
    description: 'A perfect blend of traditional culture and futuristic innovation in this vibrant metropolis.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 3456,
    price: '$3,099',
    category: 'Urban',
  },
  {
    id: 14,
    title: 'Cape Town, South Africa',
    subtitle: 'Western Cape',
    description: 'Table Mountain, beautiful coastlines, and rich cultural diversity in this stunning city.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 1890,
    price: '$2,599',
    category: 'Adventure',
  },
  {
    id: 15,
    title: 'Rio de Janeiro',
    subtitle: 'Brazil',
    description: 'Christ the Redeemer, Copacabana beach, and vibrant carnival celebrations.',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 2345,
    price: '$2,199',
    category: 'Urban',
  },
  {
    id: 16,
    title: 'London, UK',
    subtitle: 'England',
    description: 'Historic landmarks, world-class museums, and vibrant multicultural atmosphere.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 5123,
    price: '$2,399',
    category: 'Historical',
  },
  {
    id: 17,
    title: 'Iceland',
    subtitle: 'Nordic Island',
    description: 'Northern Lights, geothermal lagoons, waterfalls, and stunning volcanic landscapes.',
    image: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1678,
    price: '$3,599',
    category: 'Adventure',
  },
  {
    id: 18,
    title: 'Phuket, Thailand',
    subtitle: 'Andaman Sea',
    description: 'Beautiful beaches, vibrant nightlife, and rich Thai culture in this tropical paradise.',
    image: PhuketThaiDestination,
    rating: 4.7,
    reviews: 2987,
    price: '$1,699',
    category: 'Tropical',
  },
  {
    id: 19,
    title: 'Venice, Italy',
    subtitle: 'Veneto Region',
    description: 'Romantic canals, historic architecture, and charming gondola rides.',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 2678,
    price: '$2,899',
    category: 'Romantic',
  },
  {
    id: 20,
    title: 'Marrakech, Morocco',
    subtitle: 'Marrakech-Safi',
    description: 'Vibrant souks, stunning palaces, and rich cultural heritage in this exotic destination.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 1890,
    price: '$1,999',
    category: 'Cultural',
  },
  {
    id: 21,
    title: 'Queenstown, New Zealand',
    subtitle: 'South Island',
    description: 'Adventure capital with stunning landscapes, skiing, and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 1456,
    price: '$3,299',
    category: 'Adventure',
  },
  {
    id: 22,
    title: 'Cancún, Mexico',
    subtitle: 'Quintana Roo',
    description: 'Beautiful Caribbean beaches, ancient Mayan ruins, and vibrant nightlife.',
    image: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 2678,
    price: '$1,899',
    category: 'Beach',
  },
  {
    id: 23,
    title: 'Prague, Czech Republic',
    subtitle: 'Bohemia',
    description: 'Medieval architecture, charming old town, and rich European history.',
    image: PragueCastle,
    rating: 4.8,
    reviews: 2345,
    price: '$1,999',
    category: 'Historical',
  },
  {
    id: 24,
    title: 'Singapore',
    subtitle: 'Southeast Asia',
    description: 'Modern metropolis with diverse cultures, amazing food, and stunning gardens.',
    image: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 3123,
    price: '$2,599',
    category: 'Urban',
  },
  {
    id: 25,
    title: 'Edinburgh, Scotland',
    subtitle: 'Scotland',
    description: 'Historic castle, medieval architecture, and rich cultural heritage.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 1789,
    price: '$2,199',
    category: 'Historical',
  },
  {
    id: 26,
    title: 'Hawaii, USA',
    subtitle: 'Pacific Islands',
    description: 'Volcanoes, beautiful beaches, and rich Polynesian culture in this tropical paradise.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 3456,
    price: '$3,199',
    category: 'Tropical',
  },
  {
    id: 27,
    title: 'Budapest, Hungary',
    subtitle: 'Central Europe',
    description: 'Thermal baths, stunning architecture, and vibrant nightlife along the Danube.',
    image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 1678,
    price: '$1,799',
    category: 'Cultural',
  },
  {
    id: 28,
    title: 'Los Angeles, USA',
    subtitle: 'California',
    description: 'Hollywood, beautiful beaches, and vibrant entertainment scene.',
    image: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 3123,
    price: '$2,499',
    category: 'Urban',
  },
  {
    id: 29,
    title: 'Maui, Hawaii',
    subtitle: 'Hawaiian Islands',
    description: 'Stunning beaches, volcanic landscapes, and world-class snorkeling.',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 2345,
    price: '$3,399',
    category: 'Beach',
  },
];

// Stats data
const stats = [
  { number: '50K+', label: 'Happy Travelers', icon: <GroupsIcon /> },
  { number: '150+', label: 'Destinations', icon: <ExploreIcon /> },
  { number: '4.9', label: 'Average Rating', icon: <StarIcon /> },
  { number: '10+', label: 'Awards Won', icon: <TrophyIcon /> },
];

/* TODO : Replace with wallet information from backend */
/* Use Instead of Points the wallet money */
const userData = {
    name: 'John Traveler',
    points: 12500,
    status: 'Gold Member',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
};

export default function TravelHomepage() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const DestinationCard = ({ destination }: { destination: any }) => (
    <Card sx={styles.destinationCardStyles}>
      <Box sx={styles.cardImageStyles}>
        <CardMedia
          component="img"
          height="250"
          image={destination.image}
          alt={destination.title}
          sx={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': { transform: 'scale(1.1)' }
          }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(255, 255, 255, 0.9)',
            '&:hover': { background: 'white' },
          }}
          onClick={() => toggleFavorite(destination.id)}
        >
          {favorites.includes(destination.id) ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Chip
          label={destination.category}
          sx={{
            position: 'absolute',
            bottom: 15,
            left: 15,
            background: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 600,
          }}
        />
      </Box>
      <CardContent sx={styles.cardContentStyles}>
        <Box>
          <Typography sx={styles.cardSubtitleStyles}>
            <LocationIcon fontSize="small" sx={{ marginRight: 0.5 }} />
            {destination.subtitle}
          </Typography>
          <Typography sx={styles.cardTitleStyles}>{destination.title}</Typography>
          <Typography sx={styles.cardDescriptionStyles}>{destination.description}</Typography>
        </Box>
        <Box sx={styles.cardFooterStyles}>
          <Box sx={styles.ratingStyles}>
            <Rating value={destination.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({destination.reviews})
            </Typography>
          </Box>
          <Typography sx={styles.priceStyles}>{destination.price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const FeaturedDestinationCard = ({ destination }: { destination: any }) => (
    <Card sx={styles.featuredCardStyles}>
      <Box sx={{ height: '300px', position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={destination.image}
          alt={destination.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            padding: '2rem',
            color: 'white',
          }}
        >
          <Chip
            label="Featured"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              marginBottom: 1,
            }}
          />
          <Typography variant="h4" fontWeight={700}>
            {destination.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
            {destination.subtitle}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ flex: 1, padding: '2rem' }}>
        <Typography sx={styles.cardDescriptionStyles}>{destination.description}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          <Box sx={styles.ratingStyles}>
            <Rating value={destination.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {destination.rating}/5 ({destination.reviews} reviews)
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={styles.containerStyles}>

      <Box sx={{
      maxWidth: '1400px',
      margin: '0 auto 2rem',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 20,
    }}>
      {/* Glassmorphism Card */}
      <Box sx={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '1.5rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #667eea, #764ba2, #667eea)',
        }
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Side - User Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Avatar with Status Indicator */}
            <Box sx={{ position: 'relative' }}>
              <Box sx={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}>
                <img 
                  src={userData.avatar} 
                  alt={userData.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 20,
                height: 20,
                background: '#10b981',
                borderRadius: '50%',
                border: '3px solid #1e293b',
              }} />
            </Box>
            
            {/* User Details */}
            <Box>
              <Typography sx={{ 
                color: 'white', 
                fontWeight: 700, 
                fontSize: '1.4rem',
                marginBottom: '0.25rem'
              }}>
                Welcome, {userData.name}!
              </Typography>
              <Typography sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.95rem',
                marginBottom: '0.5rem'
              }}>
                Ready for your next adventure
              </Typography>
              
              {/* Level Badge */}
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1))',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                border: '1px solid rgba(251, 191, 36, 0.3)',
              }}>
                <Box sx={{
                  width: 8,
                  height: 8,
                  background: '#fbbf24',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }} />
                <Typography sx={{ 
                  color: '#fbbf24', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}>
                  {userData.status}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Right Side - Stats & Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Points Display */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Box sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #16266fff, #ece8efff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}>
                  💵
                </Box>
                <Typography sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  fontSize: '1.5rem'
                }}>
                  {userData.points.toLocaleString()}
                </Typography>
              </Box>
              <Typography sx={{ 
                color: 'rgba(255,255,255,0.6)', 
                fontSize: '0.8rem',
                marginTop: '0.25rem'
              }}>
                Wallet Money
              </Typography>
            </Box>
        
            
            {/* Quick Stats */}
            <Box sx={{ display: 'flex', gap: '1.5rem' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  {favorites.length}
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.8rem'
                }}>
                  Saved
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  12
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.8rem'
                }}>
                  Trips
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  fontSize: '1.25rem'
                }}>
                  5
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.8rem'
                }}>
                  Countries
                </Typography>
              </Box>
            </Box>
            
            {/* Profile Button */}
            <Button
              variant="contained"
              startIcon={<FlightIcon />}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '16px',
                padding: '0.75rem 1.5rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              View Profile
            </Button>
          </Box>
        </Box>
        
        {/* Progress Bar for Next Level */}
        <Box sx={{ marginTop: '1.5rem' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '0.5rem' 
          }}>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '0.9rem' 
            }}>
              Wallet Spendings
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontWeight: 600,
              fontSize: '0.9rem' 
            }}>
              65%
            </Typography>
          </Box>
          <Box sx={{ 
            height: 6,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <Box sx={{ 
              height: '100%',
              width: '65%',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '3px',
            }} />
          </Box>
        </Box>
      </Box>
    </Box>


      {/* Hero Section */}
      <Box sx={styles.heroStyles}>
        <Typography sx={styles.heroTitleStyles}>
          Discover Your Next Adventure With Our Airlines Company
        </Typography>
        <Typography sx={styles.heroSubtitleStyles}>
          What we recommend for your : great journeys with beautiful places
        </Typography>
        <Button sx={styles.ctaButtonStyles}>
          Start Your Journey
          <ArrowForwardIcon />
        </Button>
      </Box>

      {/* Featured Destinations */}
      <Container maxWidth="lg">
        <Typography sx={styles.sectionTitleStyles}>
          Featured Destinations
        </Typography>
        <Box sx={styles.featuredGridStyles}>
          {featuredDestinations.map(destination => (
            <FeaturedDestinationCard key={destination.id} destination={destination} />
          ))}
        </Box>

        {/* Stats Section */}
        <Box sx={styles.statsSectionStyles}>
          {stats.map((stat, index) => (
            <Box key={index} sx={styles.statItemStyles}>
              <Typography sx={styles.statNumberStyles}>{stat.number}</Typography>
              <Typography sx={styles.statLabelStyles}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Popular Destinations */}
        <Typography sx={styles.sectionTitleStyles}>
          Popular Destinations
        </Typography>
        <Box sx={styles.gridContainerStyles}>
          {popularDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', marginTop: '6rem' }}>
          <Typography variant="h3" fontWeight={700} color="white" gutterBottom>
            Ready for Your Next Adventure?
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.9)" sx={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join thousands of satisfied travelers who have discovered the world with us.
          </Typography>
          <Button
            sx={{
              ...styles.ctaButtonStyles,
              fontSize: '1.2rem',
              padding: '1.2rem 3rem',
            }}
          >
            Explore All Destinations
            <ExploreIcon />
          </Button>
        </Box>

      </Container>
    </Box>
  );
}