import andrew from '~/assets/images/andrew.webp';
import { VscZoomIn } from 'react-icons/vsc';

export default function AuthorImage() {
	return (
		<figure className="about__image max-w-md flex-[0_0_45%] rounded-lg bg-primary10 hover:before:-translate-x-4 hover:before:rotate-3 before:transition-all relative before:w-full xl:before:h-full xl:before:border-8 xl:before:rounded-lg xl:before:border-teal-400 xl:before:absolute xl:before:top-6 xl:before:left-6">
			<span className="absolute bottom-2 right-2 text-white z-10">Apulia, Italy 2022</span>
			<div className="hidden md:flex absolute text-4xl font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex-col items-center justify-center">
				<VscZoomIn /> <span className="text-center">hover to zoom</span>
			</div>
			<div className="overflow-hidden rounded-lg object-cover transition-all">
				<img src={andrew} className="md:opacity-50 about__photography" />
			</div>
		</figure>
	);
}
