import { ComponentType, useState } from "react"
import { Card, Form } from "react-bootstrap"
import { Handle, NodeProps, Position } from "reactflow"
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
} from 'react-datasheet-grid'
import "./datasheetGridNode.scss"

interface DatasheetGridElement {
  firstName: string,
  lastName: string
}

export const DatasheetGridNode: ComponentType<NodeProps> = () => {
  const [data, setData] = useState([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ] as DatasheetGridElement[])

  const columns: Column[] = [
    {
      ...keyColumn('firstName', textColumn),
      title: 'First name',
    },
    {
      ...keyColumn('lastName', textColumn),
      title: 'Last name',
    },
  ]

  return (
    <Card data-bs-theme={'dark'} className="datasheet-grid-node">
      <Card.Header className="datasheet-grid-node-header">Datasheet Grid</Card.Header>
      <Card.Body>
        <Form.Label>Data</Form.Label>
        <Handle id={`datasheetGrid-${0}`} style={{ top: '70px' }} type="target" position={Position.Left} />
        <DataSheetGrid<DatasheetGridElement> addRowsComponent={false} autoAddRow={true} value={data} onChange={(value) => setData(value)} columns={columns} />
      </Card.Body>
    </Card>
  )
}
