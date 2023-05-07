import { useParams } from 'react-router-dom';
import useGithubUser from './useGithubUser';
import { useEffect, useState } from 'react';

export default function GithubUser() {
  const { username } = useParams()
  const [data, setData] = useState(null);

  useEffect (() => {
  fetch(`https://api.github.com/users/${username}`)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    setData(json);
  });
}, [username]);
return (
<div>
  <div>{data && <h1>{data.login}</h1>}</div>
</div>
);
}