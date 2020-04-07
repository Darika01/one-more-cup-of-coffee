import React, { useState } from 'react';
import {
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    OutlinedInput,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        '& .MuiOutlinedInput-input': {
            padding: '18.5px 14px'
        }
    },
    selectEmpty: {
        // marginTop: theme.spacing(2)
    }
}));

export default function Test() {
    const classes = useStyles();
    const options = [
        {
            value: '0',
            label: 'label0'
        },
        {
            value: '1',
            label: 'label1'
        },
        {
            value: '2',
            label: 'label2'
        }
    ];

    const [SelectValues, setSelectValues] = useState({
        values: [],
        values2: []
    });

    const updateSelectValues = e => {
        console.log(e.target);
        setSelectValues({
            ...SelectValues,
            values: e.target.value
        });
    };
    const updateSelectValues2 = e => {
        console.log(e.target);
        setSelectValues({
            ...SelectValues,
            values2: e.target.value
        });
    };

    return (
        <div>
            {/* <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    value={SelectValues.values}
                    input={
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />
                    }
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'age-native-simple',
                    //   }}
                    onChange={updateSelectValues}
                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.length === 1
                                ? options.find(el => el.value == selected).label
                                : //   selected
                                  `Wybrano ${selected.length}`}
                        </div>
                    )}
                    MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center'
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        }
                    }}
                    multiple
                >
                    {options.map(el => {
                        return (
                            <MenuItem key={el.value} value={el.value}>
                                {el.label}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl> */}
            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    classes={{ root: classes.root }}
                    select
                    name="name"
                    id="id"
                    variant="outlined"
                    label="labelka"
                    SelectProps={{
                        multiple: true,
                        value: SelectValues.values2,
                        onChange: updateSelectValues2,
                        renderValue: selected => (
                            <div className={classes.chips}>
                                {selected.length === 1
                                    ? options.find(el => el.value == selected)
                                          .label
                                    : `Wybrano ${selected.length}`}
                            </div>
                        ),
                        MenuProps: {
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'center'
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            }
                        }
                    }}
                >
                    {options.map(el => {
                        return (
                            <MenuItem key={el.value} value={el.value}>
                                {el.label}
                            </MenuItem>
                        );
                    })}
                </TextField>
            </FormControl>
        </div>
    );
}
