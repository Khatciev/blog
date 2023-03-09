import cls from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { AppLickTheme, AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwither } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwither />
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


