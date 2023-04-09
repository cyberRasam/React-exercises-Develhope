import { Link } from 'react-router-dom';
import useGithubUser from './useGithubUser';

export function GithubUser({ username }) {
  const { userData, isLoading, error } = useGithubUser(username);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      {userData && (
        <li>
          <Link to={`https://www.github.com/${username}`}
            target={'_blank'}>{userData.login}</Link>
        </li>
      )}
    </div>
  );
}