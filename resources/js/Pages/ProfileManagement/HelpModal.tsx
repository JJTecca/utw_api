import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  HelpOutline,
  Email,
  Phone,
  AccessTime,
  Chat,
  QuestionAnswer,
} from '@mui/icons-material';

interface HelpModalProps {
  open: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ open, onClose }) => {
  const helpItems = [
    {
      icon: <QuestionAnswer />,
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about flights, bookings, and services.',
    },
    {
      icon: <Email />,
      title: 'Email Support',
      description: 'Send us an email at support@aviationapp.com for detailed inquiries.',
    },
    {
      icon: <AccessTime />,
      title: 'Support Hours',
      description: '24/7 support for emergencies, standard support: Mon-Fri 9AM-6PM.',
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          borderRadius: 3,
          border: '1px solid #334155',
          maxHeight: '80vh',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #334155',
        padding: 3
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HelpOutline sx={{ fontSize: 30, color: '#0ea5e9' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#f1f5f9' }}>
            ✈️ Aviation Help Center
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: '#94a3b8' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ padding: 3 }}>
        <Typography variant="body1" sx={{ color: '#cbd5e1', mb: 4 }}>
          We're here to help you with any questions or issues you may have regarding your flights, 
          bookings, or account. Choose from the options below to get the assistance you need.
        </Typography>

        <List disablePadding>
          {helpItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ 
                padding: 2,
                '&:hover': {
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  borderRadius: 2,
                }
              }}>
                <ListItemIcon sx={{ color: '#0ea5e9', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: '#94a3b8', mt: 0.5 }}>
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
              {index < helpItems.length - 1 && <Divider sx={{ borderColor: '#334155' }} />}
            </React.Fragment>
          ))}
        </List>

        {/* Tips Section */}
        <Box sx={{ 
          mt: 3,
          p: 2,
          backgroundColor: 'rgba(20, 184, 166, 0.1)',
          borderRadius: 2,
          border: '1px solid rgba(20, 184, 166, 0.3)'
        }}>
          <Typography variant="subtitle2" sx={{ color: '#14b8a6', mb: 1 }}>
            💡 Quick Tips
          </Typography>
          <List dense disablePadding>
            <ListItem sx={{ padding: 0 }}>
              <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                • Check your flight status before contacting support
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                • Have your booking reference number ready
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                • For faster service, use our online chat during peak hours
              </Typography>
            </ListItem>
          </List>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ 
        padding: 3, 
        borderTop: '1px solid #334155',
        justifyContent: 'space-between'
      }}>
        <Button 
          onClick={onClose}
          sx={{ color: '#94a3b8' }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HelpModal;