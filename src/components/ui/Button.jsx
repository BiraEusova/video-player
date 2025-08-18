import style from './Button.module.css'

export const Button = (
	{
		className = '',
		onClick,
		disabled = false,
		children,
	}) => {

	return (
		<button
			className={`${style.button} ${className}`}
			onClick={() => onClick()}
			disabled={disabled}
		>
			{children}
		</button>
	)
}