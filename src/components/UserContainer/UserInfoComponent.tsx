import React, {useEffect, useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";
import styles from "./User.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices/themeSlice";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const UserInfoComponent = () => {
    const [isReg, setIsReg] = useState<boolean>(false);

    useEffect(() => {
        const storedString = localStorage.getItem('isReg');
        setIsReg(!!storedString);
    }, [isReg]);

    const reg = () => {
        setIsReg(true);
        localStorage.setItem('isReg', true.toString());
    }

    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const handleSwitcherClick = ()=>{
        dispatch(themeActions.changeTheme());
        console.log(theme)
    }

    return (
        <>
            {isReg && (<span className={theme? styles.usernameDark: styles.usernameLight}>Гість</span>)}
            <IconButton color={theme? 'error': 'primary'} onClick={reg}>
                <AccountCircleIcon/>
            </IconButton>
            <IconButton color={theme? 'error': 'primary'} onClick={handleSwitcherClick}>
                <WbSunnyIcon/>
            </IconButton>
        </>
    );
};

export default UserInfoComponent;