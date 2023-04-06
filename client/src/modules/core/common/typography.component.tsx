export interface TypoProps extends React.HTMLAttributes<HTMLSpanElement> {
    element?: React.ReactNode;
    className?: string;
    color?: string;
    variant?: string;
    as?: string;
    event?: () => void;
}

function Typography({
    element,
    className,
    color,
    variant,
    as,
    event,
    ...rest
}: TypoProps) {
    return (
        <span
            onClick={event}
            {...rest}
            className={className ? className : "p-1 font-normal"}
            style={{ color: color ? color : "blue-gray" }}
        >
            {element}
        </span>
    );
}

export default Typography;
