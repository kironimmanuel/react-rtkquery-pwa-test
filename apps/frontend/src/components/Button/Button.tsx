interface Props {
    onClick?: () => void;
    className?: string;
    label: JSX.Element | string;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
}

const Button = ({ onClick, className, label, type = 'button', ariaLabel }: Props) => {
    return (
        <button onClick={onClick} className={className} type={type} aria-label={ariaLabel}>
            {label}
        </button>
    );
};
export default Button;
