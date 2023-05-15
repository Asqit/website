import { useEffect, useState } from 'react';
import Hamburger from '~/components/hamburger/Hamburger';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../langSwitcher/LangSwitcher';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 80) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		});
	}, []);

	return (
		<header
			className={`w-screen backdrop-blur-md fixed z-50 top-0 left-0 transition-colors ${
				isScrolled ? 'bg-black/50' : 'bg-black/0'
			}`}
		>
			<nav className="p-4 container mx-auto flex items-center justify-between">
				<h1 className="text-2xl font-semibold text-white">Tuček</h1>
				<div>
					<Hamburger
						containerClassName="md:hidden overflow-hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
					<ul
						className={`fixed z-10 top-[1vh] w-[80%] rounded-r-2xl transition-all p-8 text-3xl ${
							isMenuOpen ? 'left-0' : '-left-full'
						} font-semibold bg-black h-[98vh] md:text-lg md:p-0 md:static md:flex md:z-0 md:top-0 md:left-0 md:w-auto md:h-auto md:gap-2 md:text-black md:bg-transparent`}
					>
						<li className="link">
							<a href="#about">{t('about.nav-name')}</a>
						</li>

						<li className="link">
							<a href="#projects">{t('projects.nav-name')}</a>
						</li>

						<li className="link">
							<a href="#contact">{t('contact.nav-name')}</a>
						</li>
						<LangSwitcher />
					</ul>
				</div>
			</nav>
		</header>
	);
}
