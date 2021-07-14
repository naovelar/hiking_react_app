import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseEpisode, chooseRating, chooseSeason, chooseShow } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface ReviewFormProps {
    id?:string;
    data?:{}
}

interface ReviewState {
    episode: string;
    show: string;
    rating: number;
    season: number;
}

export const ReviewForm = (props:ReviewFormProps) => {

    const dispatch = useDispatch();
    let { reviewData, getData } = useGetData();
    const store = useStore()
    const difficulty = useSelector<ReviewState>(state => state.difficulty)
    const trail = useSelector<ReviewState>(state => state.trail)
    const rating = useSelector<ReviewState>(state => state.rating)
    const season= useSelector<ReviewState>(state => state.season)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            
        } else {
            dispatch(chooseEpisode(data.difficulty))
            dispatch(chooseShow(data.trail))
            dispatch(chooseRating(data.rating))
            dispatch(chooseSeason(data.season))
            server_calls.create(store.getState())
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="trail">Trail</label>
                    <Input {...register('trail')} name="trail" placeholder="Trail Name"/>
                </div>
                <div>
                    <label htmlFor="season">Season</label>
                    <Input {...register('season')} name="season" placeholder="Season"/>
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulty</label>
                    <Input {...register('difficulty')} name="difficulty" placeholder='Difficulty' />
                </div>
                
                <div>
                    <label htmlFor="rating">Review/Rating</label>
                    <Input {...register('rating')} name="rating" placeholder="Review/Rating"/>
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}