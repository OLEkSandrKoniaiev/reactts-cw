import React, {useEffect, useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";
import styles from "./User.module.css"

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

    return (
        <>
            {isReg && (<span className={styles.username}>Гість</span>)}
            <IconButton color='primary' onClick={reg}>
                <AccountCircleIcon/>
            </IconButton>
        </>
    );
};

export default UserInfoComponent;