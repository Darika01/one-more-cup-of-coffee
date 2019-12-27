import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    headerContainer: {
        backgroundColor: props => props.bgrColor,
        minHeight: 632,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 62
    },
    titleContainer: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        color: props => props.color,
        padding: 16
    },
    titleText: {
        marginBottom: 46,
        '& .MuiTypography-h2': {
            fontSize: 54,
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: 42
            }
        }
    },
    titleAuthor: {
        '& .MuiTypography-subtitle1': {
            fontSize: 28,

            [theme.breakpoints.down('sm')]: {
                fontSize: 22
            }
        }
    },
    titleAuthorIcon: {
        fontSize: 48
    },
    titleInfo: {
        display: 'flex',

        '& > div': {
            display: 'flex',
            alignItems: 'center'
        },
        '& div:first-child': {
            paddingRight: 32
        },
        '& .MuiTypography-subtitle1': {
            fontSize: 32,

            [theme.breakpoints.down('sm')]: {
                fontSize: 24
            },
            color: props => props.color
        }
    },
    titleInfoIcon: {
        fontSize: 32,
        paddingRight: 8,
        color: props => props.color
    }
}));
