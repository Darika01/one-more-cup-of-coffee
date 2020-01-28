//@flow
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { useStyles } from './styles';

type Props = {
    options: Array<Object>,
    value: any,
    name: string
};
export default function MainSelect(props: Props) {
    const classes = useStyles(useStyles);
    return (
        // <FormControl className={classes.formControl}>
        <Select
            variant="filled"
            value={props.value}
            id={props.name}
            name={props.name}
            className={classes.select}
            IconComponent={KeyboardArrowDownIcon}
            // onChange={props.handleChange}
            // input={<Input name="age" id="age-helper" />}
        >
            {props.options.map(option => {
                return (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                );
            })}
        </Select>
        // </FormControl>
    );
}
