import { create } from 'zustand'
import { Connection, Edge, EdgeChange, NodeChange, NodeTypes, OnConnect, OnEdgesChange, OnNodesChange, Node as ReactFlowNode, ReactFlowProps, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow'
import { DataSourceNode } from '../nodes/dataSource/dataSourceNode'
import { DatasheetGridNode } from '../nodes/datasheetGrid/datasheetGridNode'

export type Dictionary<T> = { [Id: string]: T }

export type NodeData = {
  inputNodes: Dictionary<string>
}

export type Node = ReactFlowNode<NodeData>

export type StoreFields = ReactFlowProps & {
  nodes: Node[],
  nodeOutputs: Dictionary<string>,
};

type RFState = {
  nodes: Node[];
  edges: Edge[];
  nodeTypes: NodeTypes | undefined,
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
};

export const useStore = create<RFState>((set, get) => ({
  nodeTypes: {
    dataSource: DataSourceNode,
    datasheetGrid: DatasheetGridNode,
  },
  nodes: [
    { id: '2', dragHandle: '.dataSource-node-header', type: 'dataSource', position: { x: 300, y: 450 }, data: { inputNodes: {} } },
    { id: '3', dragHandle: '.datasheet-grid-node-header', type: 'datasheetGrid', position: { x: 700, y: 500 }, data: { inputNodes: {} } },
  ],
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    console.log(connection)
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes: Node[]) => {
    set({ nodes });
  },
  setEdges: (edges: Edge[]) => {
    set({ edges });
  },
}));

export const useFlowStore = () => useStore(state => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  nodeTypes: state.nodeTypes,
}));