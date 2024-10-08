"use client";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Link,
  flexbox,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Sidebar() {
  return (
    <Box height='100vh' padding='20px' className='flex flex-col bg-slate-200'>
      <Link>Logo</Link>
      <Link>Dashboard</Link>
      <Link>Settings</Link>
      <div className='profile'>
        <Link>Profile</Link>
      </div>
    </Box>
  );
}

export default Sidebar;
