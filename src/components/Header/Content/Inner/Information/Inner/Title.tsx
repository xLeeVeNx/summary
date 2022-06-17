import React from 'react';
import Typed from 'react-typed';

type TitlePropsType = {
	text: string;
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
	return (
		<div className="header__title-box">
			<h2 className="header__title">{text}&nbsp;</h2>

			<Typed
				className="header__title"
				strings={['Berdyev Damil', 'Front-End Developers']}
				typeSpeed={100}
				backSpeed={80}
				loop
			/>
		</div>
	);
};
