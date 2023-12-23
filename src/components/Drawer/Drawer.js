import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MenuItem } from './MenuItem';
import { CSSTransition } from 'react-transition-group';
import './drawer.scss';

export const Drawer = (props) => {
  const {
    menuItems,
    menuLocation,
    navigateToRoute,
    onSubMenuClick,
    showMenuBar,
  } = props;
  const defaultRoute = menuLocation.pathname;
  const [activeMenuID, setActiveMenuID] = (useState < string) | (null > null);
  const [activeSubMenuID, setActiveSubMenuID] =
    (useState < string) | (null > null);
  const [showSubMenu, setShowSubMenu] = useState < boolean > false;
  const drawerRef = useRef(null);

  useEffect(() => {
    if (defaultRoute && menuItems.length) {
      const defaultRouteKey = defaultRoute.substr(1);
      const activeMenu = menuItems.find(
        (menuItem) =>
          menuItem.key === defaultRouteKey ||
          menuItem.submenus.find((subMenu) => subMenu.key === defaultRouteKey)
      );
      const activeSubMenu =
        activeMenu &&
        activeMenu.submenus.find((subMenu) => subMenu.key === defaultRouteKey);
      if (activeMenu && activeSubMenu) {
        setActiveMenuID(activeMenu.key);
        setActiveSubMenuID(activeSubMenu.key);
      }
    }
  }, [defaultRoute, menuItems]);

  useEffect(() => {
    document.addEventListener('mousedown', onOutSideClick);
  }, []);

  useEffect(() => {
    const menu = document.querySelector('.drawer-menu');
    if (menu && showMenuBar) menu.style.width = '260px';
    // for joyride
    else if (menu) menu.style.width = null;
  }, [showMenuBar]);

  const getOrigin = () => {
    const address =
      location.origin +
      location.pathname +
      (location.pathname.endsWith('/') ? '' : '/');
    return address;
  };
  const onOutSideClick = (event) => {
    const selectedElement = document.getElementsByClassName('drawer');
    if (
      selectedElement &&
      selectedElement[0] &&
      !selectedElement[0].contains(event.target)
    ) {
      setShowSubMenu(false);
    }
  };

  const collapseMainDrawer = () => {
    if (drawerRef && drawerRef.current) {
      const menu = document.querySelector('.drawer-menu');
      if (menu) menu.classList.add('collapse-drawer');
    }
  };

  const expandMainDrawer = () => {
    if ((drawerRef && drawerRef.current) || showMenuBar) {
      const menu = document.querySelector('.drawer-menu');
      if (menu) menu.classList.remove('collapse-drawer');
    }
  };

  const setActiveMenu = (id) => {
    setActiveMenuID(id);
    setShowSubMenu(true);
    collapseMainDrawer();
  };

  const getActiveMenuInfo = () => {
    return menuItems.find((menuItem) => menuItem.key === activeMenuID);
  };

  const setActiveSubMenu = (key) => {
    setActiveSubMenuID(key);
    const navigationUrl = window.location.origin + '/' + key;
    if (onSubMenuClick) onSubMenuClick();
    if (key === 'collection') {
      window.open(COLLECTION_FE, '_self');
    } else if (key.includes('classification/#')) {
      const page = redirectToModule(ModuleNames.classificationApp);
      window.open(page, '_self');
    } else if (key.includes('ingestion/#')) {
      const page = redirectToModule(ModuleNames.ingestionApp);
      window.open(page, '_self');
    } else if (key.includes('ratesmanagement/#')) {
      const page = redirectToModule(ModuleNames.ratesApp);
      window.open(page, '_self');
    } else if (key.includes('ingestion/#/dashboard/')) {
      const page = redirectToModule(ModuleNames.ingestionApp);
      window.open(page, '_self');
    } else {
      navigateToRoute(`/${key}`);
    }
    setShowSubMenu(false);
  };

  const redirectToModule = (landingpage) => {
    const authtoken = extractMSALToken();
    if (!authtoken) {
      const token = AzureAuthenticationManager.refreshIdToken();
      MessageService.showToastMessage('Token Refreshed. Please try again.');
    } else return window.location.origin + landingpage + authtoken;
  };

  const isSubMenuActive = (subMenuKey) => {
    return subMenuKey === activeSubMenuID;
  };

  return !(
    isViewOnlyMode(menuLocation || {}) ||
    isUniSearchViewOnlyMode(menuLocation || {}) ||
    isNewTabShowCreative(menuLocation || {})
  ) ? (
    <div className="drawer">
      <div className="drawer-menu" id="menubar" ref={drawerRef}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.key}
            menu={menuItem}
            activeMenuID={activeMenuID}
            setActiveMenu={setActiveMenu}
            expandMainDrawer={expandMainDrawer}
          />
        ))}
      </div>
      <CSSTransition
        in={!!(activeMenuID && showSubMenu)}
        timeout={400}
        classNames="animate-submenu"
        unmountOnExit={true}
      >
        <div className="drawer-submenu" onMouseOver={expandMainDrawer}>
          <div
            data-test-id={getActiveMenuInfo() && getActiveMenuInfo().label}
            className="drawer-submenu-title"
          >
            {getActiveMenuInfo() && getActiveMenuInfo().label}
          </div>
          {getActiveMenuInfo() &&
            getActiveMenuInfo().submenus.map((subMenu) => (
              <a
                data-test-id={subMenu.label}
                className={`drawer-submenu-item ${
                  isSubMenuActive(subMenu.key) ? 'submenu-active' : ''
                }`}
                onClick={() => setActiveSubMenu(subMenu.key)}
                key={subMenu.key}
                href={`${getOrigin()}#/${subMenu.key}`}
              >
                {subMenu.label}
              </a>
            ))}
        </div>
      </CSSTransition>
    </div>
  ) : (
    <></>
  );
};
