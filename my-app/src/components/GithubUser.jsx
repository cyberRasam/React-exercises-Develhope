import { Link } from 'react-router-dom';
import useGithubUser from './useGithubUser';

export function GithubUser({ username }) {
  const { users, isLoading, error } = useGithubUser(username);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  if (!users) {
    return null;
  }

  return (
    <div>
      {users && (
        <li>
          <Link to={`https://www.github.com/${username}`}
            target={'_blank'}>{users.login}</Link>
        </li>
      )}
    </div>
  );
}