import { Button, Card, Collapse, Input, Spin, Tooltip } from 'antd';
import { Fragment, useState } from 'react';
import { dashboardApiHooks } from './api';
import { type RepositoryItem } from './api/schema/repository';
import { type User } from './api/schema/user';
import { ForkOutlined, StarOutlined } from '@ant-design/icons';

type ExtendedUser = User & {
  repositories?: RepositoryItem[];
};

export default function Main() {
  const [searchKey, setSearchKey] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const [submittedKey, setSubmittedKey] = useState('');
  const [userData, setUserData] = useState<ExtendedUser[]>([]);
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: '',
  });

  const { isFetching: fetchingUser } = dashboardApiHooks.useGetUserList(
    {
      queries: { q: searchKey, per_page: 5 },
    },
    {
      enabled: !!onSearch,
      onSuccess: (response) => {
        setUserData(response?.items || []);
        setSubmittedKey(searchKey);
        setOnSearch(false);
      },
    }
  );

  const { isFetching: fetchingUserRepo } =
    dashboardApiHooks.useGetUserRepositories(
      {
        params: { name: selectedUser?.name },
      },
      {
        enabled: !!selectedUser?.id && !!selectedUser?.name,
        onSuccess: (response) => {
          setUserData((prev) =>
            prev.map((user) =>
              user.id === selectedUser?.id
                ? { ...user, repositories: response }
                : user
            )
          );
          setSelectedUser({
            id: 0,
            name: '',
          });
        },
      }
    );

  return (
    <Fragment>
      <div className="sticky top-4 sm:top-6 lg:top-8 z-10 bg-white mb-3">
        <Input
          placeholder="Search user name here"
          className="mb-3 h-12"
          value={searchKey}
          onChange={(e) => setSearchKey(e?.target?.value)}
        />

        <Button
          onClick={() => setOnSearch(true)}
          className="min-w-full my-2.5 bg-blue-400"
          type='primary'
        >
          Search
        </Button>

        {submittedKey && (
          <div className="my-4">Showing users for "{submittedKey}"</div>
        )}
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-12rem)] px-2">
        {userData?.length && !fetchingUser ? (
          userData?.map((user) => (
            <div key={user.id} className="mb-5">
              <Collapse
                items={[
                  {
                    key: user.id,
                    label: user.login,
                    children: (
                      <div>
                        {user?.repositories?.length ? (
                          user?.repositories?.map((repo) => (
                            <div className="my-2">
                              <Card
                                key={repo.id}
                                className="bg-gray-600"
                                title={
                                  <div className="flex justify-between items-center">
                                    <a
                                      href={repo.html_url}
                                      target="_blank"
                                      className="cursor-pointer w-3/5 truncate overflow-hidden whitespace-nowrap"
                                    >
                                      {repo.name}
                                    </a>

                                    <div className="flex items-center gap-2 w-1/5 justify-end">
                                      <Tooltip title="Fork">
                                        <ForkOutlined /> {repo.forks_count || 0}
                                      </Tooltip>

                                      <Tooltip title="Star">
                                        <StarOutlined />{' '}
                                        {repo.stargazers_count || 0}
                                      </Tooltip>
                                    </div>
                                  </div>
                                }
                              >
                                {repo?.description ?? 'No Description'}
                              </Card>
                            </div>
                          ))
                        ) : fetchingUserRepo && !user?.repositories ? (
                          <div className="flex items-center justify-center min-w-full">
                            <Spin />
                          </div>
                        ) : (
                          <div>No repositories</div>
                        )}
                      </div>
                    ),
                    onClick: () => {
                      setSelectedUser({
                        id: user.id,
                        name: user.login,
                      });
                    },
                  },
                ]}
              />
            </div>
          ))
        ) : searchKey && fetchingUser ? (
          <div className="flex items-center justify-center min-w-full">
            <Spin size="large" />
          </div>
        ) : (
          submittedKey && <div>No user found</div>
        )}
      </div>
    </Fragment>
  );
}
