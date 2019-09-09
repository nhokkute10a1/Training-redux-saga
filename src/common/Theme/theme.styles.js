import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#388E3C',
    secondary: '#FFC107',
    error: '#FF5252',
  },
  typography: {
    fontWeight: 'Roboto',
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
