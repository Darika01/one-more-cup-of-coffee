import { makeStyles } from '@material-ui/core/styles';
import {colors} from 'utils/colors.js';

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: colors.mainPink,
    },
    title: {
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            padding: theme.spacing(3)
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
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
        lineHeight: 3
    },
    navItem: {
        padding: '12px 20px',
        '&:hover': {
            backgroundColor: 'inherit',
            color: colors.yellow
        }
    },
    catMenu: {
        '& .MuiMenu-paper': {
            backgroundColor: colors.mainPink,
            color: 'white',
            marginTop: '4rem',
            borderRadius: '0 0 4px 4px',
            /* width: 100%; */
            textTransform: 'uppercase',
            boxShadow: 'none'
        }
    },
    mobileMenu: {
        '& .MuiMenu-paper': {
            marginLeft: '16px',
            marginTop: '2.5rem',
            width: '100%',
            maxWidth: '100%',
            backgroundColor: colors.mainPink,
            color: 'white',        
            borderRadius: '0 0 4px 4px',
            boxShadow: 'none'
        }
    }
}))