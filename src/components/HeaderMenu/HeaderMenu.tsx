import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, List } from 'antd';
import { useState } from 'react';
import './HeaderMenu.css';

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='headerMenuContainer'>
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
          dataSource={['Blog', 'Pricing', 'Features on Website']}
          renderItem={item => (
            <List.Item>
              <Button type='link'>{item}</Button>
            </List.Item>
          )}
        />
      </Drawer>
    </div>
  );
};
