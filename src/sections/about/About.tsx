import AuthorImage from './components/authorImage/AuthorImage';
import { useTranslation } from 'react-i18next';
import { Button } from '~/components';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import CV from '~/assets/docs/Resume.pdf';

export default function About() {
	const { t } = useTranslation();

	return (
		<section className="p-4 md:p-16 md:py-32 bg-bg0" id="about">
			<div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse gap-4 lg:gap-0 justify-around items-center">
				<article className="flex-[0_0_45%]">
					<div className="mb-4">
						<h2 className="text-center md:text-left text-5xl md:text-6xl font-bold my-2">
							{t('about.title')}
						</h2>
						<div className="mx-auto w-[75%] md:mx-0 md:w-[200px] h-2 rounded-xl bg-primary10" />
					</div>
					<p className="my-4">{t('about.paragraph')}</p>
					<a target="_blank" href={CV}>
						<Button className="mx-auto md:mx-0" Icon={BsFileEarmarkPdfFill}>
							CV
						</Button>
					</a>
				</article>
				<AuthorImage />
			</div>
		</section>
	);
}
