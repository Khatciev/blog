import { classNames } from 'shared/lib/classNames/classNames';
import { AppLickTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    // eslint-disable-next-line react/no-unused-prop-types
    backgroundColor?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
         /
        </div>
    </div>
);
