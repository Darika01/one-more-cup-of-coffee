import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    '@global': {
        '.MuiLink-root': {
            color: 'inherit'
        },
        '.MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        }
    }
}));
