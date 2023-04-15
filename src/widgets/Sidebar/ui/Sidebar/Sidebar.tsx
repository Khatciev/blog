import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwither } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwither/LangSwither';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggleCollapsed}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
