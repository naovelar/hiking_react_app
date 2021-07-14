import React, {useState, useEffect} from 'react';
import {server_calls} from '../api';

export const useGetData = () => {
    const [reviewData, setData] = useState<any>([]);

    const handleDataFetch = async () => {
        const result = await server_calls.get();
        setData(result)
    }
     // Introducing the useEffect Hook to add our data to react State
     useEffect( () => {
        handleDataFetch();
    }, [])//empty list is there to trigger handleData Fetch to stop

    return {reviewData, getData:handleDataFetch}
}