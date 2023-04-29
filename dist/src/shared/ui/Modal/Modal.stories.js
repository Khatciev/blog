import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
var meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export var Primary = {
    args: {
        isOpen: true,
        children: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
            + ' Lorem Ipsum является стандартной "рыбой" '
            + ' для текстов на латинице с начала XVI века. В то время некий безымянный'
            + ' печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem'
            + ' Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных'
            + ' изменений пять веков, но и перешагнул в электронный дизайн.'
            + ' с образцами Lorem Ipsum в 60-х годах и, в более'
            + ' Lorem Ipsum Его популяризации в новое',
    },
};
export var Dark = {
    args: {
        isOpen: true,
        children: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
            + ' Lorem Ipsum является стандартной "рыбой" '
            + ' для текстов на латинице с начала XVI века. В то время некий безымянный'
            + ' печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem'
            + ' Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных'
            + ' изменений пять веков, но и перешагнул в электронный дизайн.'
            + ' с образцами Lorem Ipsum в 60-х годах и, в более'
            + ' Lorem Ipsum Его популяризации в новое',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
