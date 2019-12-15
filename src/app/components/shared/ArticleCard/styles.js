import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    card: {
        // maxWidth: 345,
        '& .MuiCardContent-root': {
            padding: 0
        }
        // height: '342px',
        // '& .MuiCardContent-root': {
        //     '&:hover': {
        //         content: '',
        //         position: 'absolute',
        //         right: 0,
        //         bottom: 0,
        //         width: '100%',
        //         height: '25px',
        //         backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',}
        // }
    },
    cardBgr: {
        height: 169,
        position: 'relative',
        [theme.breakpoints.only('xs')]: {
            height: 140
        },
        backgroundColor: props => props.art.artColors[1],
        textAlign: 'center'
    },
    cardIconPosition: {
        // -webkit-transform: translate(-50%,-50%),
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    cardIcon: {
        fontSize: '1.5rem',
        transition: 'all 0.35s',
        [theme.breakpoints.only('xs')]: {
            marginTop: '30%'
        },
        color: props => props.art.artColors[0]
    },
    cardHover: {
        fontSize: '2rem'
    },
    cardContent: {
        padding: '1.25rem',
        height: '5.5rem',
        paddingBottom: '0.2rem',
        // height: '100%',
        '& h6': {
            height: '100%'
        }
    },
    cardContentOpacity: {
        content: '',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        height: '2.2rem',
        backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))'
    },
    cardAuthor: {
        backgroundColor: '#f7f7f7',
        borderTop: '1px solid #00000020',
        textAlign: 'right',
        position: 'relative',
        padding: '0.8rem 0.5rem'
    },
    author: {
        width: '100%',
        paddingRight: '1rem'
    }
}));
