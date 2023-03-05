import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLickTheme, AppLink} from "shared/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLickTheme.PRIMARY} to={'/'} className={cls.mainLink}>
                    Main
                </AppLink>
                <AppLink theme={AppLickTheme.PRIMARY} to={'/about'}>
                    About
                </AppLink>
            </div>
        </div>
    );
};


