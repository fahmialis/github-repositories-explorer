import { Input, Collapse } from 'antd';

export default function index() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <Input.Search placeholder="input search text" className="mb-3" />

      <Collapse
        items={[
          {
            key: '1',
            label: 'This is default size panel header',
            children: <p>{text}</p>,
          },
        ]}
      />
    </div>
  );
}
