import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    card: {
        // maxWidth: 345,
        '& .MuiCardContent-root': {
            padding: 0
        },
        position: 'relative',
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
        // },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    cardContentBgr: {
        backgroundColor: 'rgb(56, 56, 56);',
        opacity: 1
    },
    cardBgr: {
        minHeight: 169,
        position: 'relative',
        [theme.breakpoints.only('xs')]: {
            height: 140
        },
        backgroundColor: props => props.art.artColors[1],
        textAlign: 'center',
        transition: '0.8s ease'
    },
    cardIconPosition: {
        // -webkit-transform: translate(-50%,-50%),
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    cardIcon: {
        // fontSize: '1.5rem',
        // transition: 'all 0.35s',
        transition: '0.8s ease',
        [theme.breakpoints.only('xs')]: {
            marginTop: '30%'
        },
        color: props => props.art.artColors[0]
    },
    cardHover: {
        // fontSize: '2rem'
        opacity: 0.7
    },
    cardIconHover: {
        // fontSize: '2rem'
        transform: ' scale(1.3)'
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
        content: `''`,
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
