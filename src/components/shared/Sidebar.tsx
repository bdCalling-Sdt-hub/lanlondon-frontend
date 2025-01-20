'use client';

import { Menu } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import { HiUserGroup, HiUsers } from 'react-icons/hi2';
import { TbDatabaseDollar } from 'react-icons/tb';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSolidCategory } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
        key: '/earnings',
        icon: <TbDatabaseDollar size={24} />,
        label: <Link href="/earnings">Earnings</Link>,
      },
      {
        key: '/artists',
        icon: <HiUsers size={24} />,
        label: <Link href="/artists">Artists</Link>,
      },
      {
        key: '/users',
        icon: <HiUserGroup size={24} />,
        label: <Link href="/users">User</Link>,
      },
      {
        key: '/category',
        icon: <MdOutlineCategory size={24} />,
        label: <Link href="/category">Category</Link>,
      },
      {
        key: '/sub-category',
        icon: <BiSolidCategory size={24} />,
        label: <Link href="/sub-category">Sub Category</Link>,
      },
      {
        key: '/events',
        icon: <MdOutlineCategory size={24} />,
        label: <Link href="/events">Events</Link>,
      },
      {
        key: 'subMenuSetting',
        icon: <IoSettingsOutline size={24} />,
        label: 'Settings',
        children: [
          {
            key: '/banner',
            label: <Link href="/banner">Banner</Link>,
          },
          {
            key: '/about-us',
            label: <Link href="/about-us">About Us</Link>,
          },
          {
            key: '/terms-and-conditions',
            label: <Link href="/terms-and-conditions">Terms And Condition</Link>,
          },
          {
            key: '/privacy-policy',
            label: <Link href="/privacy-policy">Privacy Policy</Link>,
          },
          {
            key: '/change-password',
            label: <Link href="/change-password">Change Password</Link>,
          },
        ],
      },
      {
        key: '/login',
        icon: <IoIosLogOut size={24} />,
        label: <Link href="/events">Events</Link>,
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