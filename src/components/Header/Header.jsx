import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';


const Header = (props) => {

    const {user, onClose, onToggleButton} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.first_name}
            </span>
        </div>
    );
}
 
export default Header;