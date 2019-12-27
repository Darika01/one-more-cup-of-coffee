import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'utils/colors.js';

export const useStyles = makeStyles(theme => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 72,
        backgroundColor: colors.darkBlue,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerInfoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 400,
        '& .MuiLink-root': {
            color: colors.pink
        },
        '& .MuiLink-root:hover': {
            textDecoration: 'underline'
        }
    }
}));
