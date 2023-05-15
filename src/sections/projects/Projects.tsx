import SimpleProjects from './components/simpleProjects/SimpleProjects';
import { useTranslation } from 'react-i18next';

export default function Projects() {
	const { t } = useTranslation();

	return (
		<section className="bg-bg5 p-4 md:p-16 md:py-32" id="projects">
			<div className="container mx-auto">
				<div className="py-4">
					<div className="mb-4">
						<h2 className="text-center md:text-left text-5xl md:text-6xl font-bold my-2">
							{t('projects.title')}
						</h2>
						<div className="mx-auto w-[75%] md:mx-0 md:w-[200px] h-2 rounded-xl bg-primary10" />
					</div>
					<p className="text-center text-lg md:text-left">
						{t('projects.short-description')}
					</p>
				</div>
				<SimpleProjects />
			</div>
		</section>
	);
}
