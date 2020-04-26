import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default function PaletteMetaForm(props) {
    const [open, setOpen] = React.useState(true);
    const [newPaletteName, setNewPaletteName] = useState("")

    const handleClose = () => {
        setOpen(false);
    };
    function handleSubmit() {
        props.onSubmit(newPaletteName)
    }

    useEffect(() => {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        });
    }, [props.palettes])

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Chosse a Palette name</DialogTitle>
            <ValidatorForm onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your new beautiful palette. Make sure it's unique!
                        </DialogContentText>
                    <TextValidator
                        label="Palette Name"
                        value={newPaletteName}
                        name="newPaletteName"
                        onChange={e => setNewPaletteName(e.target.value)}
                        validators={['required', "isPaletteNameUnique"]}
                        errorMessages={["Enter Palette Name", "Name is already taken"]}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onHideForm} color="primary" >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">Save Palette
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}