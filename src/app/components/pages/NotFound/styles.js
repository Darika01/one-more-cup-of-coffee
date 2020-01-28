import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'app/utils/colors.js';

export const useStyles = makeStyles(() => ({
    mess: {
        backgroundColor: colors.errorBgr,
        width: '100%',
        position: 'absolute',
        left: 0,
        marginBottom: 16,
        borderBottom: `1px solid ${colors.errorBorder}`,
        '& .MuiTypography-subtitle1': {
            padding: '16px 8px',
            textAlign: 'center',
            color: colors.error
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    img: {
        width: '100%',
        height: 'auto',
        maxWidth: 626
    }
}));
