import Image from 'next/image'
import { ReactNode } from 'react';
import {
  HomeIcon,
  CalendarPlus,
  Send,
  Layers3,
} from 'lucide-react';

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

// Define the props type
type CustomNavbarLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};
const CustomNavbarLink = ({ children, href, ...props }: CustomNavbarLinkProps) => (
  <NavbarLink href={href} style={{ textDecoration: 'none !important', border: 'none', boxShadow: 'none', display: 'flex', alignItems: 'center' }} {...props}>
    {children}
  </NavbarLink>
);

export default function Component() {
  // Define the wrapper component

  return (
    <div className='pt-6 px-4 sm:px-0'>
      <div className="rounded-lg overflow-hidden shadow-lg mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl bg-blue-900 p-4">
        <Navbar fluid>
          <NavbarBrand href="https://flowbite-react.com" className="font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <Image 
              src="/images/Metrocare.png" 
              className="mr-3 h-6 sm:h-9" 
              alt="metrocare logo" 
              width={50} // reduced width
              height={50} // reduced height
            />
            <span className="self-center whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white">Metrocare Leave Portal</span>
          </NavbarBrand>

          <div className="hidden md:flex space-x-4 items-center" style={{ listStyle: 'none' }}>
            <CustomNavbarLink href="#" className="font-bold uppercase text-white hover:text-red-600 transition-colors duration-200">
              <HomeIcon size={20} className="mr-1" /> Home
            </CustomNavbarLink>
            <CustomNavbarLink href="#" className="font-bold uppercase text-white hover:text-red-600 transition-colors duration-200">
              <CalendarPlus size={20} className="mr-1" /> Add Absence
            </CustomNavbarLink>
            <CustomNavbarLink href="#" className="font-bold uppercase text-white hover:text-red-600 transition-colors duration-200">
              <Send size={20} className="mr-1" /> Status
            </CustomNavbarLink>
            <CustomNavbarLink href="#" className="font-bold uppercase text-white hover:text-red-600 transition-colors duration-200">
              <Layers3 size={20} className="mr-1" /> Leave Balances
            </CustomNavbarLink>
          </div>
          
          <div className="flex md:order-2 space-x-4">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded className="rounded-full w-12 h-12 mr-4 hidden sm:block" />
              }
            >
              <DropdownHeader>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </DropdownHeader>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
            <NavbarToggle />
          </div>

          <NavbarCollapse className="space-y-2">
            <NavbarLink href="#" active className="font-bold uppercase text-white hover:text-white">
              Home
            </NavbarLink>
            <NavbarLink href="#" className="font-bold uppercase text-white hover:text-red">Add Absence</NavbarLink>
            <NavbarLink href="#" className="font-bold uppercase  text-white hover:text-white">Status</NavbarLink>
            <NavbarLink href="#" className="font-bold uppercase text-white  hover:text-white">Leave Balances</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </div>
  );
}
