import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'app/utils/colors.js';

export const useStyles = makeStyles(() => ({
    mainPaper: {
        margin: '40px 0',
        padding: 40,
        boxShadow: 'none',
        border: '1px solid #efefef'
    },
    content: {
        marginTop: 60
    }
}));
