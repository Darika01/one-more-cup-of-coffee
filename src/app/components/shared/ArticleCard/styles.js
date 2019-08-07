import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        '& .MuiCardMedia-root': {
            backgroundColor: 'red'
        }
    },
    media: {
        height: 140,
    },

}))