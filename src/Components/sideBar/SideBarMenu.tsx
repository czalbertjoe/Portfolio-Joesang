import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "./Types/types"
import { classNames } from "../../assets/Util/classes";
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
            <button className="NavIcon" onClick={handleClick}>
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