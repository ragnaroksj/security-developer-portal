import { useTranslation } from 'next-i18next'

import styles from './styles/header.module.scss';

export default function Header() {
    const { t } = useTranslation('common')

    return (
      <div className={styles.header}>
        <div>{t('title')}</div>
        <div>{t('login')}</div>
      </div>
    );
}
