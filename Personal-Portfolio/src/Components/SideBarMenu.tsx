import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../Types/types"
import { classNames } from "../assets/Util/classes";
import * as React from 'react';
import Box from '@mui/material/Box';
import { createSvgIcon } from '@mui/material/utils';
import { VscMenu } from "react-icons/vsc"
import SideBarMenuItemView from "./SideBarMenuItemView";
import SideBarMenuCardView from "./SideBarMenuCardView";
import "./SideBarMenu.scss";


interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}
export function SideBarMenu({ items, card }: SideBarMenuProps) {
    const [isOpen, setIsOPen] = useState<boolean>(true);

    function handleClick() {
        setIsOPen(!isOpen)
    }

    return <div className={classNames('SideBarMenu', isOpen ? "expanded" : "collapsed")}>
        <div className="menuButton">
            <button className="hamburguerButton" onClick={handleClick}>
                <VscMenu></VscMenu>
            </button>
        </div>
        <SideBarMenuCardView card={card} isOpen={isOpen} />
        {
            items.map(item => (
                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
            ))}
    </div>
}