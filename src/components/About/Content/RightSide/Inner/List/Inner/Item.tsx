import React from 'react';

type ItemType = {
	label: string;
	value: string;
}

export const Item: React.FC<ItemType> = ({label, value}) => {
	return (
		<li className="about__item">
			<label className="about__label">{label}:</label>
			<span className="about__value">{value}</span>
		</li>
	);
};