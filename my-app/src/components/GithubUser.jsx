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
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="Profile" />
    </div>
  );
}