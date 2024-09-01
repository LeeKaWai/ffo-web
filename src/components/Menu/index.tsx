import React, { useState } from 'react';
import './index.css'; // 确保样式文件存在

// 定义菜单项的类型
interface MenuItem {
  label: string;
  component: React.ComponentType;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const [selected, setSelected] = useState<string>(menuItems[0]?.label || '');

  const handleSelection = (item: string) => {
    setSelected(item);
  };

  const SelectedComponent = menuItems.find(item => item.label === selected)?.component || null;

  return (
    <div className="filter-box">
      <div className="component-switch-filter">
        {menuItems.map((item) => (
          <a
            href="#"
            key={item.label}
            className={selected === item.label ? "active" : ""}
            onClick={() => handleSelection(item.label)}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <div className="content-display">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default Menu;
