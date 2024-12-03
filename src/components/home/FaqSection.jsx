import React from 'react';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const FaqSection = () => {
  return (
    <div className=''>
        <h1 className='text-2xl font-semibold text-center mt-16'>FAQ</h1>
      
      <Collapse 
      
        defaultActiveKey={['1']} 
        ghost 
        items={items} 
        expandIconPosition="right" 
      />
    </div>
  );
};

export default FaqSection;
