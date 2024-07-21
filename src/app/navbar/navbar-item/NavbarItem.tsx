import React from "react";
import './NavbarItem.scss';
import classnames from "classnames";
import {NavLink} from "react-router-dom";

export interface NavbarItemProps {
    path: string;
    name: string;
}

export default class NavbarItem extends React.Component<NavbarItemProps> {
    constructor(props: NavbarItemProps) {
        super(props);
    };

    render() {
        const {path, name} = this.props;

        return (
            <li className={classnames('NavbarItem')}>
                <NavLink
                    to={path}
                    className={
                        ({isActive}) => classnames({
                            'NavLink': true,
                            'active': isActive,
                        })
                    }
                >
                    {name}
                </NavLink>
            </li>
        );
    };
};
