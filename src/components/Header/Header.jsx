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
                BE HIGHER
            </div>

        </div>
    );
}
 
export default Header;