import { debounce, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/store/configureStore'
import { setProductParams } from './catalogSlice';

export default function ProductSearch() {
    const { productParams } = useAppSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);

    /// Arama yaparken Loading islemini 1 sn oteler !!!
    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }))
    }, 1000)

    return (
        <TextField
            label="Search products"
            variant='outlined'
            fullWidth
            value={searchTerm || ''}
            onChange={(event: any) => {
                setSearchTerm(event.target.value);
                debouncedSearch(event);
            }}
        />
    )
}
