import styles from './button.module.css';

enum ButtonType {
    elevated,
    outlined,
    text,
}

type Params = {
    title: string,
    className?: string,
    type: ButtonType
}

function Button(params: Params) {
    var type = params.type === ButtonType.elevated ? styles.elevatedButton
        : params.type === ButtonType.outlined ? styles.outlinedButton
            : styles.textButton;

    return <button className={type}>
        {params.title}
    </button>;
}

export default Button;
export { ButtonType }