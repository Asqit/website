import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	Icon?: FC;
	children: ReactNode;
}

function Button(props: IButtonProps) {
	const { Icon, className, children, ...rest } = props;

	return (
		<button
			className={`btn ${
				Icon ? "flex items-center justify-center gap-2" : ""
			} ${className}`}
			{...rest}
		>
			{Icon ? <Icon /> : null}
			{children}
		</button>
	);
}

export default Button;
