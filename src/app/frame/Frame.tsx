import React, {ReactElement} from "react";
import './Frame.scss';
import {Navigate, Route, Routes} from "react-router-dom";

export interface FrameProps {
    frames: FrameItem[];
}

export interface FrameItem {
    path: string;
    name: string;
    element: ReactElement;
}

export default class Frame extends React.Component<FrameProps> {
    constructor(props: FrameProps) {
        super(props);
    }

    render() {
        const frames = this.props.frames;

        return (
            <div className="Frame">
                <Routes>
                    <Route path='*' element={<Navigate to="/home"/>}/>
                    {frames.map((frame: FrameItem) =>
                        <Route
                            path={frame.path}
                            element={frame.element}
                        />
                    )}
                </Routes>
            </div>
        );
    };
};
