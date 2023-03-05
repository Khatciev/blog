import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLickTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends  LinkProps{
    className?: string;
    theme?: AppLickTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLickTheme.PRIMARY,
        ...otherProps
    } = props


    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};

