interface Props {
    onClick?: () => void;
    className?: string;
    label: JSX.Element | string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, className, label, type = 'button' }: Props) => {
    return (
        <button onClick={onClick} className={className} type={type}>
            {label}
        </button>
    );
};
export default Button;
