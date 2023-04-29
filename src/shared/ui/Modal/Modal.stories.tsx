import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
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

export const Dark: Story = {
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
