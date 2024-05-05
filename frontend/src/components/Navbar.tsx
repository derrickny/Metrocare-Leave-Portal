import Image from 'next/image'
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

export default function Component() {
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
          <NavbarLink href="#" active className="font-bold uppercase hover:text-white">
            Home
          </NavbarLink>
          <NavbarLink href="#" className="font-bold uppercase hover:text-white">About</NavbarLink>
          <NavbarLink href="#" className="font-bold uppercase hover:text-white">Services</NavbarLink>
          <NavbarLink href="#" className="font-bold uppercase hover:text-white">Pricing</NavbarLink>
          <NavbarLink href="#" className="font-bold uppercase hover:text-white">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
    </div>
  );
}
