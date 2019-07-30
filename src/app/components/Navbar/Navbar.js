import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputIcon from '@material-ui/icons/Input';
import MoreIcon from '@material-ui/icons/MoreVert';

import {useStyles} from './styles';


export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [isCategories, setIsCategories] = React.useState(false)

    // const [isMenuOpen, setIsMenuOpen] = React.useState(anchorEl !== null ? true : false);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    console.log(isCategories)
    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
        // setIsMenuOpen(true)
    }
    function showCategories() {
        setIsCategories(!isCategories)
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

    React.useEffect(() => {
        if (!isMobileMenuOpen && isCategories) {
            setIsCategories(false)
        }
    }, [isMobileMenuOpen])

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            id={menuId}
            keepMounted
            transformOrigin={{  vertical: 'bottom', horizontal: 'center' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            // onMouseLeave={handleMenuClose}
            getContentAnchorEl={null}
            className={classes.catMenu}
        >
            <div onMouseLeave={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} >Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </div>
        </Menu>
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
                    
                    >
                    <FolderOpenIcon />
                </IconButton>
                kategorie
            </MenuItem>
            {isCategories && 
                <div>
                    <MenuItem className={classes.navLink} style={{borderBottom: '1px solid #f8f6c4'}}>
                        dodaj artykuł
                    </MenuItem>
                    <MenuItem className={classes.navLink} style={{borderBottom: '1px solid #f8f6c4'}}>
                        zarejestruj
                    </MenuItem>
                </div>
            }
            <MenuItem className={classes.navLink}>
                <IconButton aria-label="Add article" color="inherit">
                    <AddBoxIcon />
                </IconButton>
                dodaj artykuł
            </MenuItem>
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
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        ExPocket
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton 
                            aria-label="Categories"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            onMouseOver={handleProfileMenuOpen}
                            // onMouseLeave={handleMenuClose}
                            color="inherit" 
                            className={classes.navItem}
                        >
                            <Typography variant="body2" color="inherit" className={classes.navLink}>
                                <FolderOpenIcon style={{display: 'block', margin: '0 auto', fontSize: "30px"}} />
                                kategorie
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Add article" color="inherit" className={classes.navItem}>
                            <Typography variant="body2" color="inherit" className={classes.navLink}>
                                <AddBoxIcon style={{display: 'block', margin: '0 auto', fontSize: "30px"}} />
                                dodaj artykuł
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Sign up" color="inherit" className={classes.navItem}>
                            <Typography variant="body2" color="inherit" className={classes.navLink}>
                                <PersonAddIcon style={{display: 'block', margin: '0 auto', fontSize: "30px"}} />
                                zarejestruj
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="Sign in" color="inherit" className={classes.navItem}>
                            <Typography variant="body2" color="inherit" className={classes.navLink}>
                                <InputIcon style={{display: 'block', margin: '0 auto', fontSize: "30px"}} />
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
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* </div> */}
            {renderMenu}
        </div>
    );
}