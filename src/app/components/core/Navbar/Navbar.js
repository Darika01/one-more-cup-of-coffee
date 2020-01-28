//@flow
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputIcon from '@material-ui/icons/Input';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';

import logo from '../../../../assets/logo_one_more.png'; // relative path to image
import { NavLink, withRouter } from 'react-router-dom';

import { useStyles } from './styles';

type Props = {
    location: {
        pathname: string
    }
};
export function Navbar(props: Props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [isCategories, setIsCategories] = React.useState(false);
    const categories = [
        'Wszystkie',
        'Nauka',
        'Sztuka',
        'Filozofia',
        'Psychologia'
    ];

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }
    function showCategories() {
        setIsCategories(!isCategories);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    useEffect(() => {
        if (!isMobileMenuOpen && isCategories) {
            setIsCategories(false);
        }
        // eslint-disable-next-line
    }, [isMobileMenuOpen]);

    useEffect(() => {
        handleMenuClose();
    }, [props.location.pathname]);

    const renderMenu = (
        <Popper
            open={isMenuOpen}
            anchorEl={anchorEl}
            onMouseLeave={handleMenuClose}
            transition
            disablePortal
            // keepMounted
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom'
                                ? 'center top'
                                : 'center bottom'
                    }}
                >
                    <Paper className={classes.catMenu}>
                        <MenuList>
                            {categories.map(el => {
                                return (
                                    <NavLink
                                        key={el}
                                        to={`/kategorie/${el.toLowerCase()}`}
                                    >
                                        <MenuItem onClick={handleMenuClose}>
                                            {el}
                                        </MenuItem>
                                    </NavLink>
                                );
                            })}
                        </MenuList>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            // transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.mobileMenu}
        >
            <MenuItem className={classes.navLink} onClick={showCategories}>
                <IconButton
                    aria-label="Categories"
                    aria-controls="primary-search-account-menu"
                    // aria-haspopup="true"
                    color="inherit"
                    className={classes.mobileIcon}
                >
                    <FolderOpenIcon />
                </IconButton>
                kategorie
                <ArrowDropDownIcon
                    style={{ fontSize: '20px', verticalAlign: 'text-top' }}
                />
            </MenuItem>
            {isCategories && (
                <div>
                    {categories.map(el => {
                        return (
                            <NavLink
                                key={el}
                                to={`/kategorie/${el.toLowerCase()}`}
                            >
                                <MenuItem
                                    className={classes.navLink}
                                    style={{
                                        borderBottom: '1px solid #f8f6c4'
                                    }}
                                >
                                    {el}
                                </MenuItem>
                            </NavLink>
                        );
                    })}
                </div>
            )}
            <NavLink to="/dodaj-artykul">
                <MenuItem className={classes.navLink}>
                    <IconButton aria-label="Add article" color="inherit">
                        <AddBoxIcon />
                    </IconButton>
                    dodaj artykuł
                </MenuItem>
            </NavLink>
            <MenuItem className={classes.navLink}>
                <IconButton aria-label="Sign up" color="inherit">
                    <PersonAddIcon />
                </IconButton>
                zarejestruj
            </MenuItem>
            <MenuItem className={classes.navLink}>
                <IconButton aria-label="Sign in" color="inherit">
                    <InputIcon />
                </IconButton>
                Zaloguj
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                position="static"
                className={classes.header}
                onMouseLeave={handleMenuClose}
            >
                <Toolbar className={classes.navbar}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" width="220" />
                    </NavLink>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="Categories"
                            // aria-controls={menuId}
                            // aria-haspopup="true"
                            // // onClick={handleProfileMenuOpen}
                            onMouseOver={handleProfileMenuOpen}
                            // onMouseLeave={handleMenuClose}
                            color="inherit"
                            className={classes.navItem}
                        >
                            <Typography
                                variant="body2"
                                color="inherit"
                                className={classes.navLink}
                                component={NavLink}
                                to="/"
                                activeClassName="isActiveLink"
                            >
                                <FolderOpenIcon
                                    style={{
                                        display: 'block',
                                        margin: '0 auto',
                                        fontSize: '30px'
                                    }}
                                />
                                kategorie
                                {/* <ArrowDropDownIcon
                                    style={{
                                        fontSize: '20px',
                                        verticalAlign: 'text-top'
                                    }}
                                /> */}
                                {anchorEl === null ? (
                                    <ExpandMoreIcon
                                        style={{ verticalAlign: 'middle' }}
                                    />
                                ) : (
                                    <ExpandLessIcon
                                        style={{ verticalAlign: 'middle' }}
                                    />
                                )}
                            </Typography>
                        </IconButton>
                        <IconButton
                            aria-label="Add article"
                            color="inherit"
                            className={classes.navItem}
                        >
                            <NavLink to="/dodaj-artykul">
                                <Typography
                                    variant="body2"
                                    color="inherit"
                                    className={classes.navLink}
                                >
                                    <AddBoxIcon
                                        style={{
                                            display: 'block',
                                            margin: '0 auto',
                                            fontSize: '30px'
                                        }}
                                    />
                                    dodaj artykuł
                                </Typography>
                            </NavLink>
                        </IconButton>
                        <IconButton
                            aria-label="Sign up"
                            color="inherit"
                            className={classes.navItem}
                        >
                            <Typography
                                variant="body2"
                                color="inherit"
                                className={classes.navLink}
                            >
                                <PersonAddIcon
                                    style={{
                                        display: 'block',
                                        margin: '0 auto',
                                        fontSize: '30px'
                                    }}
                                />
                                zarejestruj
                            </Typography>
                        </IconButton>
                        <IconButton
                            aria-label="Sign in"
                            color="inherit"
                            className={classes.navItem}
                        >
                            <Typography
                                variant="body2"
                                color="inherit"
                                className={classes.navLink}
                            >
                                <InputIcon
                                    style={{
                                        display: 'block',
                                        margin: '0 auto',
                                        fontSize: '30px'
                                    }}
                                />
                                Zaloguj
                            </Typography>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            {mobileMoreAnchorEl === null ? (
                                <MoreVertIcon />
                            ) : (
                                <CloseIcon />
                            )}
                        </IconButton>
                    </div>
                </Toolbar>
                {renderMobileMenu}
                {/* </div> */}
                {renderMenu}
            </AppBar>
        </div>
    );
}
export default withRouter(Navbar);
