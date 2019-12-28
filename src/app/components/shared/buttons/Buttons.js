import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { colors } from 'app/utils/colors.js';

export const SeeMoreButton = withStyles(theme => ({
    root: {
        color: theme.palette.grey[50],
        backgroundColor: colors.pink,
        padding: theme.spacing(0.7, 2),
        marginRight: theme.spacing(1),
        textTransform: 'none',
        '&:hover': {
            backgroundColor: colors.darkPink
        }
    }
}))(Button);
