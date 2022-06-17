import React from 'react';
import { closeModal } from '../../pureFunctions/closeModal';

type CloseButtonPropsType = {
	setActive: (value: boolean) => void;
}

export const CloseButton: React.FC<CloseButtonPropsType> = ({setActive}) => {
	return (
		<button className="modal__close" onClick={ () => closeModal(setActive) } />
	);
};