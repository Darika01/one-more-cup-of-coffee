import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputIcon from '@material-ui/icons/Input';
import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import MoreIcon from '@material-ui/icons/MoreVert';

import logo from '../../../assets/logo_one_more.png' // relative path to image 

import {useStyles} from './styles';


export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [isCategories, setIsCategories] = React.useState(false);
    const categories = ['Wszystkie', 'Nauka', 'Sztuka', 'Filozofia', 'Psychologia'];


    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
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
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.catMenu}>
                <MenuList>
                    {
                        categories.map(el => {
                            return (
                                <MenuItem key={el} onClick={handleMenuClose}>
                                    {el}
                                </MenuItem>
                            )
                        })
                    }
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
                    style={{fontSize: '20px', verticalAlign: 'text-top'}}
                />
            </MenuItem>
            {isCategories && 
                <div>
                    {
                        categories.map(el => {
                            return (
                                <MenuItem key={el} className={classes.navLink} style={{borderBottom: '1px solid #f8f6c4'}}>
                                    {el}
                                </MenuItem>
                            )
                        })
                    }
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
                <Toolbar className={classes.navbar}>
                    <img src={logo} alt="logo" width="220" />
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
                            <Typography variant="body2" color="inherit" className={classes.navLink}>
                                <FolderOpenIcon style={{display: 'block', margin: '0 auto', fontSize: "30px"}} />
                                kategorie
                                <ArrowDropDownIcon
                                    style={{fontSize: '20px', verticalAlign: 'text-top'}}
                                />
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