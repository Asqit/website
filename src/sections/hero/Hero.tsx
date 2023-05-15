import { useTranslation } from 'react-i18next';
import jsImage from '~/assets/images/Snap.svg';
import crossPattern from '~/assets/images/cross-pattern.png';

interface ICode {
	url: string;
	variableName: string;
}

function Code(props: ICode) {
	const { url, variableName } = props;

	return (
		<p className="font-mono">
			<span className="text-blue-500 mr-2">const</span>
			<span className="text-primary10 mr-2">{variableName}</span>=
			<span className="ml-2">
				<br className="sm:hidden" />
				<a target="_blank" href={url} className="underline text-red-400/90">
					'{url}'
				</a>
				;
			</span>
		</p>
	);
}

export default function Hero() {
	const { t } = useTranslation();

	return (
		<section className="mb-4 w-screen bg-bg10 animate-fade-in font-mono">
			<div className="p-4 w-full h-screen flex items-center justify-center">
				<article className="text-center lg:text-left">
					<h4 className="font-semibold">{t('hero.greetings')}</h4>
					<h1 className="font-black text-5xl md:text-6xl">Ondřej Tuček</h1>
					<h2 className="text-3xl text-gray-400">
						<span className="mr-2">{'>'}</span>
						{t('hero.short-description')}
					</h2>
					<div className="mt-8 font-mono">
						<p className="text-gray-600">
							<span>// </span>
							{t('hero.comment-1')}
						</p>
						<p className="text-gray-600">
							<span>// </span>
							{t('hero.comment-2')}
						</p>
						<Code url="https://github.com/asqit" variableName="GITHUB_URL" />
					</div>
				</article>
				<figure className="hidden lg:block ml-32 relative">
					<img src={jsImage} className="relative z-20" />
					<img src={jsImage} className="absolute top-6 left-6 z-10 opacity-70 rotate-3" />
					<img src={crossPattern} className="absolute top-4 right-4 z-30" />
				</figure>
			</div>
		</section>
	);
}
