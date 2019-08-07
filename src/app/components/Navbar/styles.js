import { makeStyles } from '@material-ui/core/styles';
import {colors} from 'utils/colors.js';

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: colors.pink,
        boxShadow: 'none'
    },
    navbar: {
        [theme.breakpoints.only('xl')]: {
            maxWidth: '1440px',
            margin: '0 auto',
            width: '100%'
        }
    },
    title: {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            padding: theme.spacing(3)
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginLeft: 'auto'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navLink: {
        textTransform: 'uppercase',
        display: 'block',
        textAlign: 'center',
        lineHeight: 2.2,
        fontWeight: 500
    },
    navItem: {
        padding: '12px 20px',
        '&:hover': {
            backgroundColor: 'inherit',
            color: colors.yellow
        }
    },
    catMenu: {
        backgroundColor: colors.pink,
        color: 'white',
        borderRadius: '0 0 4px 4px',
        textTransform: 'uppercase',
        boxShadow: 'none',
        '& .MuiList-padding': {
            padding: 0
        },
        '& .MuiMenuItem-gutters': {
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '2px 30px 2px 20px',
            borderBottom: `1px solid ${colors.yellow}`,
            '&:hover': {
                color: colors.yellow,
                backgroundColor: '#b66',
            },
            '&:last-child': {
                borderBottom: 'none',

            }
        }
    },
    mobileMenu: {
        '& .MuiMenu-paper': {
            marginLeft: '16px',
            marginTop: '2.5rem',
            width: '100%',
            maxWidth: '100%',
            backgroundColor: colors.pink,
            color: 'white',        
            borderRadius: '0 0 4px 4px',
            boxShadow: 'none'
        }
    },
    mobileIcon: {
        padding: '0 0.6rem',
        verticalAlign: 'sub'
    }
}))