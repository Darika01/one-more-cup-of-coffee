import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(6, 3),
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(6, 1)
        },
        backgroundColor: '#f3f1f1',
        boxShadow: '0 0 20px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)',
        margin: '3rem 0'
    },
    title: {
        marginBottom: '3rem',
        [theme.breakpoints.only('xs')]: {
            textAlign: 'center'
        }
    },
    categoryTitle: {
        textTransform: 'uppercase',
        paddingLeft: '1rem',
        color: '#a96f44',
        fontWeight: 500,
        '&:hover': {
            color: '#c75253'
        }
    },
    selected: {
        color: '#c75253',
        pointerEvents: 'none'
    },
    divider: {
        height: '2px',
        backgroundColor: '#969696',
        marginTop: '0.5rem',
        [theme.breakpoints.up('md')]: {
            width: '40%'
        }
    },
    seeMoreBtn: {
        textAlign: 'right',
        marginTop: '2rem',
        [theme.breakpoints.only('xs')]: {
            textAlign: 'center'
        }
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > div': {
            margin: 8,
            flex: '0 0 25%',
            maxWidth: 'calc(25% - 16px)',
            [theme.breakpoints.down('sm')]: {
                flex: '0 0 50%',
                maxWidth: 'calc(50% - 16px)'
            }
        }
    }
}));
