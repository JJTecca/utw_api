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
 * 1. Displays the user header information fetched with backend data
 * 2. Shows featured destionations for the user to scroll down and get a view, also popular destinations
 * 3. Provides a booking system using his wallet details
 ****************************************************************************************************/
import React, { useState , PropsWithChildren } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
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

/**************************************************************************
 *                          INTERFACES
 * 1. User
 * 2. BaseCurrency 
 * 3. Destination
 * 4. TourProps -> used to pass all the data into 1 interface
 **************************************************************************/

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  gender: string;
}

interface BaseCurrency {
  currency: string
}

interface Destination {
  id: number,
  title: string,
  subtitle?: string,
  description: string,
  image: string,
  rating: number,
  reviews: number,
  price: number,
  is_featured: boolean,
  category?: string
}

interface TourProps {
  user : User;
  total_usd : number;
  base_currency : BaseCurrency;
  destinations : Destination[];
}

// Stats data : Hardcoded data
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

export default function TravelHomepage({children, user, total_usd, base_currency, destinations} : PropsWithChildren<TourProps>) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // Filter destinations for featured and popular sections
  const featuredDestinations = destinations.filter(dest => dest.is_featured);
  
  // For popular destinations, you can use a different logic (e.g., based on rating, reviews, or other backend field)
  // For now, let's assume popular destinations are those with rating >= 4.7 and reviews > 1000
  // You might want to adjust this logic based on your actual backend data structure
  const popularDestinations = destinations.filter(dest => 
    dest.rating >= 4.7 && dest.reviews > 1000
  ).slice(0, 10); // Limit to 10 popular destinations

  const DestinationCard = ({ destination }: { destination: Destination }) => (
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
          label={destination.category || 'Destination'}
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
            {destination.subtitle || 'Beautiful Destination'}
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
          <Typography sx={styles.priceStyles}>${destination.price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const FeaturedDestinationCard = ({ destination }: { destination: Destination }) => (
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
            {destination.subtitle || 'Exclusive Destination'}
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
                    alt={user.lastName}
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
                    Welcome, {user.lastName}!
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
                    {total_usd.toLocaleString()}
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
                  href={route('profile')}
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
            </Box>
            
            
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

      {/* Featured Destinations */}
      <Container maxWidth="lg">
        <Typography sx={styles.sectionTitleStyles}>
          Featured Destinations
        </Typography>
        {featuredDestinations.length > 0 ? (
          <Box sx={styles.featuredGridStyles}>
            {featuredDestinations.map(destination => (
              <FeaturedDestinationCard key={destination.id} destination={destination} />
            ))}
          </Box>
        ) : (
          <Typography sx={{ color: 'white', textAlign: 'center', py: 4 }}>
            No featured destinations available at the moment.
          </Typography>
        )}

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
        {popularDestinations.length > 0 ? (
          <Box sx={styles.gridContainerStyles}>
            {popularDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </Box>
        ) : (
          <Typography sx={{ color: 'white', textAlign: 'center', py: 4 }}>
            No popular destinations available at the moment.
          </Typography>
        )}

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