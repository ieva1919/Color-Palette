import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from "react-color";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    picker: {
        width: "100% !important",
        marginTop: "2rem",
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem",
    },
    colorInput: {
        width: "100%",
        height: "75%"
    }
}));

function ColorPickerForm(props) {
    const classes = useStyles();
    const [newColorName, setNewColorName] = useState("")
    const [currentColor, setCurrentColor] = useState("teal");

    function addNewColor() {
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        props.onAddColor(newColor)
        setNewColorName("")
    };

    useEffect(() => {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isColorNamesUnique', (value) => {
            return props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return props.colors.every(
                ({ color }) => color !== currentColor)
        });
    }, [props.colors, currentColor])

    return (
        <div>
            <ChromePicker
                color={currentColor}
                onChangeComplete={newColor => setCurrentColor(newColor.hex)}
                className={classes.picker}
            />
            <ValidatorForm onSubmit={addNewColor}>
                <TextValidator
                    value={newColorName}
                    className={classes.colorInput}
                    placeholder="Color Name"
                    variant="filled"
                    margin="normal"
                    name={newColorName}
                    onChange={e => setNewColorName(e.target.value)}
                    validators={['required', 'isColorNamesUnique', "isColorUnique"]}
                    errorMessages={['Enter a color name', 'color name must be unique', "color already used"]}
                />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={props.paletteIsFull}
                    className={classes.addColor}
                    style={{ backgroundColor: props.paletteIsFull ? "grey" : currentColor }}
                >
                    {props.paletteIsFull ? "Palette is full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm;