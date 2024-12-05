import React from 'react';
import { Collapse } from 'antd';

const text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

const items = [
  {
    key: '1',
    label: 'How much does your Web flow design cost?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'How long does it take for you to develop a website with Web flow?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Do you recommend a WordPress to Webflow migration, and why is Webflow better than WordPress?',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Is Webflow good for SEO and Branding?',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'What sets your Webflow services apart from other companies?',
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
