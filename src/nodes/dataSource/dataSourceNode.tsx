import { ComponentType } from "react"
import { Card, Form } from "react-bootstrap"
import { Handle, NodeProps, Position } from "reactflow"
import "./dataSourceNode.scss"

export const DataSourceNode: ComponentType<NodeProps> = () => {
    return (
        <Card data-bs-theme={'dark'} className="dataSource-node">
            <Card.Header className="dataSource-node-header">DataSource: File</Card.Header>
            <Card.Body>
                <Card.Text className="text-end">Data</Card.Text>
                <Handle id="test-1" key="test-1" type="source" position={Position.Right} />
                <Form.Control type="file" className="text-center" />
            </Card.Body>
        </Card>
    )
}
