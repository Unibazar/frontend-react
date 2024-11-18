import React from 'react';
import styles from './Loader.module.css';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress className='text-teal-600' />
        </div>
    )
}

export default Loader
