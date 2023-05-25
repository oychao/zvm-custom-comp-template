/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, List } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

interface HeaderMenuProps {
  globalData: Record<string, any>;
}

export const HeaderMenu = ({ globalData }: HeaderMenuProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const globalNavigationConfig = globalData?.mobile_navigator
    ? JSON.parse(globalData?.mobile_navigator)
    : {};

  const dataSource: Array<{ title: string; onClick: () => void }> =
    globalNavigationConfig.map((item: any) => {
      return {
        title: item.title,
        onClick() {
          if (item.internal) {
            navigate(item.url);
          } else {
            window.open(item.url);
          }
        },
      };
    });

  return (
    <div className={styles.headerMenuContainer}>
      <Button icon={<MenuOutlined />} size='middle' onClick={showDrawer} />
      <Drawer
        placement='right'
        onClose={onClose}
        open={open}
        width='200px'
        headerStyle={{ display: 'none' }}
        bodyStyle={{ padding: '10px 0px' }}
      >
        <List
          style={{ padding: '0px 20px' }}
          dataSource={dataSource}
          renderItem={({ title, onClick }) => (
            <List.Item>
              <Button type='link' onClick={onClick}>
                {title}
              </Button>
            </List.Item>
          )}
        />
      </Drawer>
    </div>
  );
};
