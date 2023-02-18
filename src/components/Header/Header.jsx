import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';

const Header = (props) => {

    const {user, onClose, onToggleButton} = useTelegram();

    return (
        <div className={'header'}>
            {/* <Button onClick={onClose}>Закрыть</Button> */}
            <div>
                Home
            </div>
            <span className={'username'}>
                {/* {user?.first_name} */}
            </span>
        </div>
    );
}
 
export default Header;