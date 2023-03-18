import { Theme } from "app/providers/ThemeProvider"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "../Button/Button"
import cls from "./LangSwither.module.scss"

interface LangSwitherProps {
    className: string;
}

const LangSwither: FC<LangSwitherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwither, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>
            {t('Язык')}
        </Button>
    );
}

export default LangSwither;