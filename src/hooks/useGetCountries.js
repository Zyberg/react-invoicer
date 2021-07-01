import { useEffect, useState } from 'react';
import { getCountries } from '@/services/Api';

export default function useGetCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries()
        .then(items => {
          setCountries(items)
        })
    }, [])

    return countries;
}