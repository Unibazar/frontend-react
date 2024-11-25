import React from 'react';
import styles from '../styles/components/Loading.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress className='text-teal-600' />
        </div>
    )
}

export default Loading
