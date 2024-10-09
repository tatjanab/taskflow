"use client";

import { Box, Link } from "@chakra-ui/react";
import { DragHandleIcon, SettingsIcon, PlusSquareIcon } from "@chakra-ui/icons";

function Sidebar() {
  return (
    <Box height='100vh' className='bg-gray-primary sidebar flex w-1/6 flex-col'>
      <Link className='px-6 py-4 font-bold uppercase'>
        <DragHandleIcon /> TaskFlow
      </Link>
      <div className='main-nav flex flex-col'>
        <Link className='px-6 py-2 hover:bg-slate-300'>
          <PlusSquareIcon /> Dashboard
        </Link>
        <Link className='px-6 py-2 hover:bg-slate-300'>
          <SettingsIcon className='mr-1' />
          Settings
        </Link>
      </div>
      <div className='profile px-6 py-2'>
        <Link>Profile</Link>
      </div>
    </Box>
  );
}

export default Sidebar;
