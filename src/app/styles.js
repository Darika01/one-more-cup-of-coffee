import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'app/utils/colors.js';

export const useStyles = makeStyles(theme => ({
    '@global': {
        '.MuiLink-root': {
            color: 'inherit'
        },
        '.MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        },
        '.MuiContainer-root': {
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
        },
        '.MuiButton-contained': {
            boxShadow: 'none'
        },
        '.MuiOutlinedInput-input, .MuiOutlinedInput-multiline': {
            padding: 12,
            backgroundColor: colors.white
        },

        ' .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.darkBlueBgr
        },

        ' .MuiTypography-subtitle1': {
            fontSize: 18,
            fontWeight: 500
        },
        '.mainBtn': {
            color: colors.white,
            padding: '8px 16px',
            '& .MuiButton-label': {
                fontSize: 15,
                alignItems: 'center'
            }
        },
        '.btnIcon': {
            marginLeft: 8,
            width: 22,
            height: 22
        },

        //select
        '.MuiInput-underline:before': {
            border: '1px solid rgba(0, 0, 0, 0.23)',
            height: 'calc(100% - 1px)',
            borderRadius: 4,
            transition:
                'padding-left 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        '.MuiInput-underline:hover:not(.Mui-disabled):before': {
            border: '1px solid rgba(0, 0, 0, 0.87)'
        },
        '.MuiInput-underline:after': {
            borderBottom: 'none'
        },
        '.MuiMenu-paper': {
            border: '1px solid rgb(30, 32, 47)',
            boxShadow: 'none'
        },
        '.MuiMenu-list': {
            padding: 0,
            borderRadius: 4
        }
    }
}));
