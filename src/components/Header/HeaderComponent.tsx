import React from 'react';
import {NavLink} from "react-router-dom";
import logoLight from '../../logo_light.svg';

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={''}>
                <img src={logoLight} alt={'logo_light'}/>
            </NavLink>
            <NavLink to={'movies'}>
                Movies
            </NavLink>
        </div>
    );
};

export default HeaderComponent;