import React from 'react';
import { SocialLink } from './Inner/SocialLink';

import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/AlternateEmail';

import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

export const SocialLinks: React.FC = () => {
	const Icons: IconType[] = [ TelegramIcon, WhatsAppIcon, InstagramIcon, EmailIcon ];
	const links: string[] = [ 'https://t.me/damilberdyev', 'https://wa.me/+77773692286', 'https://www.instagram.com/damilberdyev/', 'mailto:berdyevwork@mail.ru' ];

	return (
		<div className="header__social">
			<ul className="header__social-list">
				{
					Icons.map(
						(Icon, index) =>
							<SocialLink key={ index } href={ links[index] } Icon={ Icon } />,
					)
				}
			</ul>
		</div>
	);
};