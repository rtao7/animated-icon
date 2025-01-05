import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex justify-between">
          <NavigationMenuTrigger className="font-sans">
            Animated Icons
          </NavigationMenuTrigger>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
