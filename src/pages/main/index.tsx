import { Input, Collapse } from 'antd';
import { dashboardApiHooks } from './api';
import { useState } from 'react';
import { useDebounce } from 'ahooks';

export default function Main() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const [searchKey, setSearchKey] = useState('');

  const { data } = dashboardApiHooks.useGetUserList({
    queries: { q: useDebounce(searchKey, { wait: 300 }) },
  });

  console.log({ data });

  return (
    <div>
      <Input.Search
        placeholder="input search text"
        className="mb-3"
        value={searchKey}
        onChange={(e) => setSearchKey(e?.target?.value)}
      />

      {data?.items.map((user) => (
        <div key={user.id} className="mb-5">
          <Collapse
            items={[
              {
                key: user.id,
                label: user.login,
                children: <p>{text}</p>,
              },
            ]}
          />
        </div>
      ))}
    </div>
  );
}
