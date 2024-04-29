import ReactFlow, { Background, BackgroundVariant } from 'reactflow'
import { useFlowStore } from './state/store'
import { ContextMenu } from './components/contextMenu'
import { useState } from 'react'

function App() {
  const [contextMenuRequest, setContextMenuRequest] = useState({ show: false, left: 0, top: 0 })

  return (
    <div data-bs-theme="dark" style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        onClick={() => setContextMenuRequest({ show: false, left: 0, top: 0 })}
        onContextMenu={e => {
          e.preventDefault();
          setContextMenuRequest({ show: true, left: e.clientX, top: e.clientY })
        }}
        minZoom={1}
        maxZoom={1}
        {...useFlowStore()}>
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <ContextMenu show={contextMenuRequest.show} left={contextMenuRequest.left} top={contextMenuRequest.top} />
      </ReactFlow>
    </div>
  )
}

export default App
