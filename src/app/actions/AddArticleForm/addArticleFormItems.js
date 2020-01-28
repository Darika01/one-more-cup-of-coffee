export const addArticleFormItems = () => {
    return [
        {
            name: 'title',
            title: 'Tytuł artykułu',
            type: 'text',
            value: '',
            required: true
        },
        {
            name: 'category',
            title: 'Kategoria',
            type: 'select',
            options: [
                {
                    label: 'Nauka',
                    value: 'Nauka'
                },
                {
                    label: 'Sztuka',
                    value: 'Sztuka'
                },
                {
                    label: 'Filozofia',
                    value: 'Filozofia'
                },
                {
                    label: 'Psychoogia',
                    value: 'Psychoogia'
                }
            ],
            value: 'Nauka',
            required: true
        },
        {
            name: 'description',
            title: 'Zawartość artykułu',
            type: 'textarea',
            value: '',
            required: true
        },
        {
            name: 'titleColor',
            title: 'Kolor tytułu',
            type: 'colorPicker',
            value: '',
            required: true
        },
        {
            name: 'bgrColor',
            title: 'Kolor tła',
            type: 'colorPicker',
            value: '',
            required: true
        },
        {
            name: 'icon',
            title: 'Ikonka',
            type: 'select',
            value: '',
            required: true
        },
        {
            name: 'isAuthor',
            type: 'radio',
            value: 'true',
            required: true
        }
    ];
};
