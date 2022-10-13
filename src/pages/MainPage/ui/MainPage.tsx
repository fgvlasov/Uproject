import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={className}>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
