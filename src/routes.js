import React from 'react';
import { NavLink } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    active: {
        backgroundColor: theme.palette.action.selected
    },
}));

export default function RouteItems() {

    const classes = useStyles();

    return(
        <div>
            <ListItem button component={NavLink} exact to="/" activeClassName={classes.active}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Page 1" />
            </ListItem>
            <ListItem button component={NavLink} exact to="/activities" activeClassName={classes.active}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Page 2" />
            </ListItem>
        </div>
    )
};
