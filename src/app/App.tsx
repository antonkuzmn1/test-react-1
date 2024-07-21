import React from 'react';
import './App.scss';
import Navbar from "./navbar/Navbar";
import Frame, {FrameItem} from "./frame/Frame";
import {BrowserRouter} from "react-router-dom";
import {NavbarItemProps} from "./navbar/navbar-item/NavbarItem";
import Home from "./frame/home/Home";
import Settings from "./frame/settings/Settings";
import List from "./frame/list/List";
import Datasets from "./frame/datasets/Datasets";
import Examples from "./frame/examples/Examples";
import Contacts from "./frame/contacts/Contacts";
import About from "./frame/about/About";
import FAQ from "./frame/faq/FAQ";

const frameItems: FrameItem[] = [
    {path: '/home', name: 'Home', element: <Home/>},
    {path: '/settings', name: 'Settings', element: <Settings/>},
    {path: '/list', name: 'List', element: <List/>},
    {path: '/datasets', name: 'Datasets', element: <Datasets/>},
    {path: '/examples', name: 'Examples', element: <Examples/>},
    {path: '/contacts', name: 'Contacts', element: <Contacts/>},
    {path: '/about', name: 'About', element: <About/>},
    {path: '/faq', name: 'FAQ', element: <FAQ/>},
];

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar items={frameItems}/>
                    <Frame frames={frameItems}/>
                </BrowserRouter>
            </div>
        );
    };
};
