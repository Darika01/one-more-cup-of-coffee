import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    headerContainer: {
        backgroundColor: props => props.bgrColor,
        minHeight: 600,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 62
    },
    titleContainer: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 8px'
    },
    title: {
        textAlign: 'center',
        color: props => props.color,
        padding: 16
    },
    titleText: {
        marginBottom: 68,
        '& .MuiTypography-h2': {
            fontSize: 50,
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: 38
            }
        }
    },
    titleAuthor: {
        '& .MuiTypography-subtitle1': {
            fontSize: 24,

            [theme.breakpoints.down('sm')]: {
                fontSize: 18
            }
        }
    },
    titleAuthorIcon: {
        fontSize: 44
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
            fontSize: 28,

            [theme.breakpoints.down('sm')]: {
                fontSize: 20
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
