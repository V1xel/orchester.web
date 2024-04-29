import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const ContextMenu: React.FC<{ show: boolean, left: number, top: number }> = ({ left, top, show }: { show: boolean, left: number, top: number }) => {
    return (
        <Dropdown style={{ left, top }} show={show}>
            <Dropdown.Menu >
                <Dropdown.Item>DataSource: File</Dropdown.Item>
                <Dropdown.Item>DataSource: Database</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Datasheet Grid</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
