import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    '@global': {
        '.MuiLink-root': {
            color: 'inherit'
        },
        '.MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        },
        '& .MuiContainer-root': {
            paddingLeft: '15px',
            paddingRight: '15px',
            [theme.breakpoints.only('xs')]: {
                padding: 0
            },
            [theme.breakpoints.only('sm')]: {
                maxWidth: '720px'
            },
            [theme.breakpoints.up('lg')]: {
                maxWidth: '1140px'
            }
        }
    }
}));
