import { useEffect, useState } from 'react';
import { getVatRate } from '@/services/api';

export default function useGetVat(countryCode) {
    const [vat, setVat] = useState({});

    useEffect(() => {
      getVatRate(countryCode)
        .then(response => {
          setVat(response)
        })
    }, [])

    return vat;
}