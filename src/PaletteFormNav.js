import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        disply: "flex",
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navBtns: {
    }
}));

export default function PaletteFormNav(props) {
    const classes = useStyles();
    const { open } = props;
    const [newPaletteName, setNewPaletteName] = useState("")

    useEffect(() => {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        });
    }, [props.palettes])

    function handleSubmit() {
        props.onSubmit(newPaletteName)
    }
    return (
        <div className="classes.root">
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={classnames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => props.setOpen(true)}
                        edge="start"
                        className={classnames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className="classes.navBtns">
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            label="Palette Name"
                            value={newPaletteName}
                            name="newPaletteName"
                            onChange={e => setNewPaletteName(e.target.value)}
                            validators={['required', "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name is already taken"]}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">Save Palette
                        </Button>
                    </ValidatorForm>
                    <Link to="/">
                        <Button variant="contained" color="secondary">
                            Go Back
                        </Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    )
}
