import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function useGithubUser(username) {
  
  const {data, error, reValidate } = useSWR(`https://api.github.com/users/${username}`, fetcher)
  
  if (!username) {
    return null;
  }

  const refetch = () => {
    reValidate()
  }
  
  return { users:data,
     error,
     isLoading: !data && !error,
     refetch };
}

