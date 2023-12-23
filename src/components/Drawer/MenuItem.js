import * as React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faUsers,
  faCog,
  faTasks,
  faTags,
  faBook,
  faFile,
  faArchive,
} from '@fortawesome/free-solid-svg-icons';
import { IMenuItem } from './Drawer';

const icons = [
  {
    key: 'ingestion/#/dashboard',
    icon: faChartLine,
  },
  {
    key: 'useraccess/#',
    icon: faUsers,
  },
  {
    key: 'general-settings',
    icon: faCog,
  },
  {
    key: 'classification/#',
    icon: faTasks,
  },
  {
    key: 'ratesmanagement/#',
    icon: faTags,
  },
  {
    key: 'reference-data',
    icon: faBook,
  },
  {
    key: 'template-management',
    icon: faFile,
  },
  {
    key: 'ingestion/#',
    icon: faArchive,
  },
  {
    key: 'attribute-management',
    icon: faTags,
  },
];

export const MenuItem = (props) => {
  const { menu, activeMenuID, setActiveMenu, expandMainDrawer } = props;
  const { label, key } = menu;

  const getMenuIcon = () => {
    const menuIcon = icons.find((icon) => icon.key === key);
    return menuIcon ? menuIcon.icon : null;
  };

  const isMenuItemActive = () => {
    return activeMenuID === key;
  };

  return (
    <div
      data-test-id={key}
      className={`drawer-menu-item ${isMenuItemActive() ? 'menu-active' : ''}`}
      onMouseOver={!isMenuItemActive() ? expandMainDrawer : null}
      onClick={() => setActiveMenu(key)}
    >
      <div className="drawer-menu-item-icon">
        <Icon icon={getMenuIcon()} />
      </div>
      <div data-test-id={label} className="drawer-menu-item-text">
        {label}
      </div>
    </div>
  );
};
