import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, List } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const dataSource = [
    {
      title: 'Product',
      onClick() {
        navigate('/product');
      },
    },
    {
      title: 'Pricing',
      onClick() {
        window.open('https://pricing.momen.app/');
      },
    },
    {
      title: 'Blog',
      onClick() {
        navigate('/blog');
      },
    },
  ];

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
