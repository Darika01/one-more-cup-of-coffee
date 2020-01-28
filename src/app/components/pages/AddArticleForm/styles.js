import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'app/utils/colors.js';

export const useStyles = makeStyles(theme => ({
    headerContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: 600,
        marginBottom: 62,
        backgroundColor: '#1e202f'
    },
    titleText: {
        color: colors.white,
        padding: 10,
        maxWidth: 760,
        textAlign: 'center',
        marginBottom: 42,
        fontSize: 52,
        fontWeight: 500,
        lineHeight: 1.4,
        [theme.breakpoints.down('sm')]: {
            fontSize: 32
        }
    },
    titleImg: {
        width: 60,
        height: 120
    },
    paper: {
        padding: 40,
        backgroundColor: '#f3f1f1'
    },
    mainFormContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    formBtns: {
        display: 'flex',
        flexDirection: 'row',
        '& > button:first-child': {
            marginRight: 16
        },
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
            '& > button:first-child': {
                marginRight: 0,
                marginBottom: 16
            }
        }
    },

    formItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 42,
        '& .MuiTypography-subtitle1': {
            paddingLeft: 8
        }
    },

    addBtn: {
        backgroundColor: colors.pink,
        '&:hover': {
            backgroundColor: colors.darkPink
        },
        '&:active': {
            backgroundColor: colors.lightPink
        }
    },
    cancelBtn: {
        backgroundColor: colors.green,
        '&:hover': {
            backgroundColor: colors.darkGreen
        },
        '&:active': {
            backgroundColor: colors.lightGreen
        }
    }
}));
