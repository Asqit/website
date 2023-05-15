import { AiFillHeart, AiFillStar } from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className="bg-bg5 p-16 flex items-center justify-center flex-col">
			<p className="flex items-center gap-1">
				Website by Ondřej Tuček with{' '}
				<AiFillHeart className="text-red-400" />
			</p>
			<a
				href="https://www.github.com/asqit/portfolio"
				className="link dark flex items-center gap-1"
				target="_blank"
			>
				<AiFillStar /> give me your feedback
			</a>
		</footer>
	);
}
