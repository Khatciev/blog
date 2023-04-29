import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwither } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwither/LangSwither';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLickTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    // eslint-disable-next-line react/no-unused-prop-types
    backgroundColor?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                square
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle"
                onClick={onToggleCollapsed}
                size={ButtonSize.S}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLickTheme.PRIMARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >

                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    className={cls.item}
                    theme={AppLickTheme.PRIMARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span
                        className={cls.link}
                    >
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
