import { Box, Toolbar } from "@mui/material";
import { button, h6, sub } from "framer-motion/client";

export const styles = {
  footerTitle : {
    color: '#f1f5f9', 
    marginBottom: 3,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  dialogTitle: {
    backgroundColor: 'rgba(14, 165, 233, 0.1)', 
    color: '#0ea5e9',
    fontWeight: 'bold',
    textAlign: 'center',  
  },

  //TODO: Refactor styles for aboutDialog content
  aboutDialog: {
    Paper: {
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      borderRadius: '12px',
      overflow: 'hidden',
      maxHeight: '80vh'
    },

    dialogTitle:
    {
        backgroundColor: '#0f172a', 
        color: '#a7e90e',
        borderBottom: '1px solid #334155',
        fontWeight: 'bold',
        fontSize: '1.5rem',

        Box: {
          display: 'flex', 
          alignItems: 'center', 
          gap: 1 
        }
    },

    content:
    {
        padding: 0,
        box:
        {
            borderBottom: 1, 
            borderColor: '#334155',
            tabs:
            {
                '& .MuiTab-root': {
                  color: '#94a3b8',
                  '&.Mui-selected': {
                    color: '#a7e90e',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#a7e90e',
                }
            },
        },

        selectionBox:
        {
            firstClass:
            {
                padding: 3,
                typography:
                {
                  color: '#a7e90e', 
                  fontWeight: 'bold'
                },
                typography2:
                {
                  color: 'white', 
                  mb: 2
                },
                card:
                {
                  backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                  border: '1px solid #334155',
                  '&:hover': { borderColor: '#a7e90e' },
                  cardContent:
                  {
                    typographySubtitle1:
                    {
                      color: '#a7e90e', 
                      fontWeight: 'bold', 
                      mb: 1
                    },
                    typographyBody2:
                    {
                      color: '#94a3b8'
                    }
                  }
                },
            },
            businessTypography:
            {
              color: 'white', 
              mb: 2
            },

            businessCard:
            {
              backgroundColor: 'rgba(30, 41, 59, 0.7)', 
              border: '1px solid #334155',
              '&:hover': { borderColor: '#a7e90e'},
              subtitle1:
              {
                color: '#a7e90e', 
                fontWeight: 'bold', 
                mb: 1
              },
              body2:
              {
                color: '#94a3b8'
              }
            },

        },

      dialogActions:
      {
          backgroundColor: '#0f172a', 
          borderTop: '1px solid #334155',
          padding: 3,
          button:
          {
            color: '#94a3b8',
            '&:hover': { color: '#a7e90e' }
          }
      }
    },
  },

  drawer:
  {
     box:
     {
        width: 250, 
        backgroundColor: '#0f172a', 
        height: '100%', 
        color: 'white',

        toolbar:
        {
            justifyContent: 'center', 
            py: 3,

            flightTakeoffIcon:
            {
                fontSize: '2rem', 
                marginRight: 8, 
                color: '#a7e90e'
            }
        },

        listItems:
        {
            color: 'white',
            py: 2,
            '&:hover': { backgroundColor: '#1e293b' },

            innerBox:
            {
                mr: 2, 
                color: '#a7e90e'
            }    
        },

     },
  },

  mainPageBox:
  {
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh', 
    backgroundColor: '#0f172a', 
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: 'white',
    appBar:
    {
      backgroundColor: '#0f172a', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderBottom: '1px solid #334155',

      iconButton:
      {
        marginRight: '16px',
        display: { md: 'none' }, 
        color: '#a7e90e'
      },

      flightTakeoffIcon:
      {
        fontSize: '1.8rem', 
        marginRight: 12, 
        color: '#a7e90e'
      },

      title:
      {
        flexGrow: 1, 
        fontWeight: 'bold', 
        color: 'white'
      },

      navBox:
      {
        display: { xs: 'none', md: 'flex' }, 
        gap: 3,
        navButton:
        {
          color: 'white',
          '&:hover': { 
            backgroundColor: 'rgba(167, 233, 14, 0.1)',
            color: '#a7e90e'
          }
        }
      },

      bookingButton:
      {
        ml: 2, 
        backgroundColor: '#a7e90e', 
        color: '#0f172a',
        fontWeight: 'bold',
        '&:hover': { 
          backgroundColor: '#94c11e',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(167, 233, 14, 0.3)'
        }
      },


      highlightButton:
      {
        marginLeft: '16px',
        backgroundColor: '#a7e90e', 
        color: '#0f172a',
        fontWeight: 'bold',
        '&:hover': { 
          backgroundColor: '#94c11e',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(167, 233, 14, 0.3)'
        }
      },

    },

    
    drawer2:
    {
      display: { xs: 'block', md: 'none' },
      '& .MuiDrawer-paper': {
        backgroundColor: '#0f172a',
        borderRight: '1px solid #334155'
      }
    },

    navLink:
    {
      color: '#94a3b8',
      display: 'flex',
      alignItems: 'center',
      '&:hover': { color: '#a7e90e' }
    },


    mainContent:
    {
      py: 4, 
      flex: 1,
      headline:
      {
        color: 'white',
        mb: 2,
        background: 'linear-gradient(45deg, #a7e90e 30%, #94c11e 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },

      secondTitle:
      {
        maxWidth: 800, 
        mx: 'auto', 
        mb: 4, 
        color: '#cbd5e1',
        fontWeight: 300 
      },

      statsBox:
      {
        p: 2, 
        backgroundColor: 'rgba(30, 41, 59, 0.7)', 
        borderRadius: 2,
        border: '1px solid #334155',
        backdropFilter: 'blur(10px)'
      },

      flightClassesGen:
      {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 40px rgba(167, 233, 14, 0.2)',
          transform: 'translateY(-4px)',
          borderColor: '#a7e90e'
        },
        imageCard:
        {
          width: { xs: '100%', md: '40%' },
          height: { xs: 240, md: 'auto' },
          objectFit: 'cover'
        },
        contentCard:
        {
          p: 4, 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          contentBox:
          {
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            mb: 2,
            priceBox:
            {
              backgroundColor: '#a7e90e', 
              color: '#0f172a', 
              px: 2, 
              py: 0.5, 
              borderRadius: 2,
              fontWeight: 'bold'
            }
          },
          featuresBox:
          {
            width: 8, 
            height: 8, 
            backgroundColor: '#a7e90e', 
            borderRadius: '50%',
            mr: 1.5 
          },
          buttonBox:
          {
            mt: 'auto', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            detailsButton:
            {
              backgroundColor: '#a7e90e',
              color: '#0f172a',
              borderRadius: 2,
              px: 4,
              py: 1,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#94c11e',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(167, 233, 14, 0.3)'
              }
            }
          }
        },


      }
    },
    aditionalInfoBox:
    {
      mt: 8, 
      p: 4, 
      backgroundColor: 'rgba(30, 41, 59, 0.7)', 
      borderRadius: 3,
      border: '1px solid #334155',
      backdropFilter: 'blur(10px)',
      infoGrid:
      {
        fontSize: 30, color: '#a7e90e'
      },
      infoCard:
      {
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        border: '1px solid #334155',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(167, 233, 14, 0.2)',
          borderColor: '#a7e90e',
        },
        outerIconBox:
        {
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 3,
          paddingBottom: 2,
          innerIconBox:
          {
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: 'rgba(167, 233, 14, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(167, 233, 14, 0.2)',
          }
        },
        featureCard:
        {
          flexGrow: 1,
          padding: 3,
          paddingTop: 0,
          textAlign: 'center',
          featureTitle:
          {
            fontWeight: 'bold',
            color: '#f1f5f9',
            marginBottom: 1,
            fontSize: '1.1rem',
          },
          featureDescription:
          {
            color: '#94a3b8',
            lineHeight: 1.6,
            fontSize: '0.9rem',
          }
        }
      }
    }

  }
  
};

