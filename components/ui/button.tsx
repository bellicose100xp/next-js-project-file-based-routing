import Link from 'next/link';
import styles from './button.module.css';

interface Props {
    link?: string;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
    if (props.link) {

        return (
            <Link href={props.link} className={styles.btn}>
                {props.children}
            </Link>
        );
    };

    return <button className={styles.btn}>{props.children}</button>;
};

export default Button;