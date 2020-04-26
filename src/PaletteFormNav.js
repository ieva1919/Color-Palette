import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import PaletteMetaForm from './PaletteMetaForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

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
        alignItems: "center",
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
        marginLeft: 12,
        marginRoght: 20,
    },
    navBtns: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        }
    },
    button: {
        margin: "0 0.5rem",
    }
}));

export default function PaletteFormNav(props) {


    const [open, setOpen] = React.useState(false);
    const [formShowing, setFormShowing] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const classes = useStyles();
    const { palettes } = props;


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
                <div className={classes.navBtns}>
                    <Link to="/">
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Go Back
                        </Button>
                    </Link >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setFormShowing(true)}
                        className={classes.button}
                    >
                        Save
                    </Button>
                </div>
            </AppBar>
            {formShowing && (
                <PaletteMetaForm palettes={palettes} onSubmit={props.onSubmit} onHideForm={() => setFormShowing(false)} />
            )}
        </div>
    )
}
