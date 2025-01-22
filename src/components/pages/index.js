import { lazy } from 'react';

const PromoPage = lazy(() => import('./promoPage/PromoPage'));
const ResumePage = lazy(() => import('./resumePage/ResumePage'));
const SkillsPage = lazy(() => import('./skillsPage/SkillsPage'));
const PortfolioPage = lazy(() => import('./portfolioPage/PortfolioPage'));
const ContactsPage = lazy(() => import('./contactsPage/ContactsPage'));

export { PromoPage, ResumePage, SkillsPage, PortfolioPage, ContactsPage };
