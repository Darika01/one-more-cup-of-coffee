import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'app/utils/colors.js';

export const useStyles = makeStyles(() => ({
    select: {
        '& .MuiSelect-select': {
            padding: 12,
            backgroundColor: colors.white
        },
        '& .MuiSelect-select:focus': {
            backgroundColor: colors.white
        },
        '& .MuiSelect-icon': {
            paddingRight: 8
        },
        '&:hover': {
            '& .MuiSelect-icon': {
                color: 'rgba(0, 0, 0, 0.87)'
            }
        }
        // '& .MuiInput-underline:before': {
        //     border: '1px solid rgba(0, 0, 0, 0.42)',
        //     height: '100%'
        // },
        // '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        //     border: '2px solid rgba(0, 0, 0, 0.87)'
        // }
    }
}));
