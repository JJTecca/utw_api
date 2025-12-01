// app/Layouts/ProfileManLayout/ProfileManLayout.styles.ts
export const styles = {
  // Container styles
  rootContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },

  mobileAppBar: {
    zIndex: 1201, // theme.zIndex.drawer + 1
    backgroundColor: '#323b1eff',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    borderBottom: '1px solid #334155',
  },

  mobileAppBarContent: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
  },

  drawerPaper: {
    width: 280,
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: 'transparent',
  },

  sidebarContainer: {
    width: 280,
    backgroundColor: '#1e293b',
    height: '100%',
    borderRight: '1px solid #334155',
  },

  sidebarHeader: {
    padding: 3,
    borderBottom: '1px solid #334155',
    backgroundColor: '#1e293b',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  },

  userName: {
    color: '#afe90eff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: 2,
  },

  userChip: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
    color: 'white',
  },

  navList: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2,
  },

  navListItem: {
    padding: 0,
    marginBottom: 1,
  },

  navListItemButton: {
    borderRadius: 8,
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      borderLeft: '3px solid #0ea5e9',
    },
  },

  navListItemIcon: {
    minWidth: 40,
    color: '#38bdf8',
  },

  detailsContainer: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 2,
    paddingBottom: 2,
    borderTop: '1px solid #334155',
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
  },

  detailsTitle: {
    color: '#38bdf8',
    fontWeight: '600',
    fontSize: '0.875rem',
    marginBottom: 1,
  },

  dialogTitle: {
    backgroundColor: 'rgba(14, 165, 233, 0.1)', 
    color: '#0ea5e9',
    fontWeight: 'bold',
    textAlign: 'center',  
  },

  accountId: {
    fontWeight: '500',
    marginTop: 1,
    color: '#38bdf8',
    span: {
      color: '#f1f5f9',
    },
  },

  mainContent: {
    flexGrow: 1,
    padding: 3,
    width: { md: 'calc(100% - 280px)' },
  },

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(44, 44, 44, 0.5)',
    border: '1px solid #334155',
  },

  headerTitle: {
    color: '#9bf79eff',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },

  pilotChip: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    color: '#10b981',
  },

  pilotIcon: {
    color: '#7af14fff',
  },

  card: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: 12,
  },

  cardTitle: {
    color: '#58efecff',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: 2,
  },

  fundCardPrimary: {
    padding: 2,
    background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
    color: 'white',
    borderRadius: 8,
  },

  fundCardSecondary: {
    padding: 2,
    background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    color: 'white',
    borderRadius: 8,
  },

  fundTitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.875rem',
  },

  fundAmount: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  primaryButton: {
    background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
    },
  },

  instagramButton: {
    background: 'linear-gradient(45deg, #405DE6, #833AB4, #E1306C, #F56040)',
    color: 'white',
  },

  tiktokButton: {
    background: 'linear-gradient(90deg, #000000,  #FE2C55, #000000)',
    color: 'white'
  },

  outlinedButton: {
    borderColor: '#475569',
    color: '#f1f5f9',
    '&:hover': {
      borderColor: '#64748b',
      backgroundColor: 'rgba(148, 163, 184, 0.08)',
    },
  },

  listItemButton: {
    borderRadius: 4,
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      borderLeft: '3px solid #0ea5e9',
    },
  },

  contentPaper: {
    padding: 3,
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid #334155',
    borderRadius: 12,
  },

  // Stack spacing
  stackSpacing: {
    gap: 2,
  },

  profileItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 2,
  },

  profileItemIcon: {
    marginRight: 2,
    color: '#0ea5e9',
  },

  profileItemContent: {
    flex: 1,
  },

  textPrimary: {
    color: '#f1f5f9',
  },

  textSecondary: {
    color: '#94a3b8',
  },

  footerTitle : {
    color: '#f1f5f9', 
    marginBottom: 3,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};