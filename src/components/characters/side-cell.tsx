import React from 'react';

import redSaber from '../../images/red-lightsaber.png';
import blueSaber from '../../images/blue-lightsaber.png';
import purpleSaber from '../../images/purple-lightsaber.png';
import { SideCellProps } from './interfaces';
import { Side } from '../../store/characters/constants';

import './styles/side-cell.css';

export const SideCell = (props: SideCellProps) => {
    const saberIcon =
        props.side === Side.Light
            ? blueSaber
            : props.side === Side.Dark
            ? redSaber
            : purpleSaber;

    return <img className="lightsaber-icon" src={saberIcon} alt="Saber Icon" />;
};
