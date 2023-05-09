import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'Default Node' },
    position: { x: 150, y: 50 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 300, y: 50 },
  },
  { id: 'e1-2', source: '1', target: '2', label: 'Edge from Input to Default' },
  { id: 'e2-3', source: '2', target: '3', label: 'Edge from Default to Output' },
];

const BasicFlow = () => {
  return (
    <ReactFlow elements={elements} />
  );
};

export default BasicFlow;
