import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import LangSwither from "shared/ui/LangSwither/LangSwither";
import { ThemeSwither } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggleCollapsed}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
}
