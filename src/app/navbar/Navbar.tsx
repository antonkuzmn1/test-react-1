import React from "react";
import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem";
import {FrameItem} from "../frame/Frame";

export interface NavbarProps {
    items: FrameItem[];
}

export default class Navbar extends React.Component<NavbarProps> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        const items = this.props.items;

        return (
            <nav className="Navbar">
                <ul>
                    {items.map((item: FrameItem, index: number) =>
                        <NavbarItem
                            key={index}
                            path={item.path}
                            name={item.name}
                        />
                    )}
                </ul>
            </nav>
        );
    };
};
