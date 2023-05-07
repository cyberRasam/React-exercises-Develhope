import { useState, useEffect } from 'react';

export default function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
     const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    useEffect(() => {
      fetchUserData();
    }, [username]);

  return { userData, isLoading, error, fetchUserData };
}

