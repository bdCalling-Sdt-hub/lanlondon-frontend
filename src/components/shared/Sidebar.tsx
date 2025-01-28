'use client';

import { Menu } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LuMessagesSquare } from 'react-icons/lu';
import { FiBook } from 'react-icons/fi';
import { RxCalendar } from 'react-icons/rx';
import { BsCardChecklist } from 'react-icons/bs';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { FaCampground } from 'react-icons/fa';

const Sidebar = () => {
  const path = usePathname();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string[]>([]);




  const menuItems = useMemo(
    () => [
      {
        key: '/brand-home',
        icon: <AiOutlineDashboard size={24} />,
        label: <Link href="/brand-home">Campaign</Link>,
      },
      {
        key: '/favorites',
        icon: <MdOutlineFavoriteBorder size={24} />,
        label: <Link href="/favorites">Favorites</Link>,
      },
      {
        key: '/inbox',
        icon: <LuMessagesSquare size={24} />,
        label: <Link href="/inbox">Inbox</Link>,
      },
      {
        key: '/applicants',
        icon: <FiBook size={24} />,
        label: <Link href="/applicants">Applicants</Link>,
      },
      {
        key: '/calender',
        icon: <RxCalendar size={24} />,
        label: <Link href="/calender">Calender</Link>,
      },
      {
        key: '/todo',
        icon: <BsCardChecklist size={24} />,
        label: <Link href="/todo">To-Do</Link>,
      },
      {
        key: '/wallet',
        icon: <LiaMoneyBillSolid size={24} />,
        label: <Link href="/wallet">Budget</Link>,
      },
      {
        key: '/add-campaign',
        icon: <FaCampground size={24} />,
        label: <Link href="/add-campaign">Add Campaign</Link>,
      },
      {
        key: 'subMenuSetting',
        icon: <IoSettingsOutline size={24} />,
        label: 'Settings',
        children: [
          {
            key: '/profile',
            label: <Link href="/profile">Profile</Link>,
          }, 
          // {
          //   key: '/support',
          //   label: <Link href="/support">Support</Link>,
          // }, 
          {
            key: '/business-info',
            label: <Link href="/business-info">Business Information</Link>,
          },
  
        ],
      },
      {
        key: '/login',
        icon: <IoIosLogOut size={24} />,
        label: <Link href="/login">Log Out</Link>,
      },
    ],[]
   
  );

  useEffect(() => {
    const selectedItem = menuItems.find(
      (item) =>
        item.key === path || item.children?.some((sub: { key: string }) => sub.key === path)
    );

    if (selectedItem) {
      setSelectedKey(path);

      if (selectedItem.children) {
        setOpenKeys([selectedItem.key]);
      } else {
        const parentItem = menuItems.find((item) =>
          item.children?.some((sub: {key: string}) => sub.key === path)
        );
        if (parentItem) {
          setOpenKeys([parentItem.key]);
        }
      }
    }
  }, [path, menuItems]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <div className="mt-8 px-5">
      <Link href="/" className=" py-6">
        <p className="text-[32px] font-semibold  tracking-tight text-black">
        Creator Briefs
        </p>
      </Link>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ borderRightColor: 'transparent', background: 'transparent' }}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;