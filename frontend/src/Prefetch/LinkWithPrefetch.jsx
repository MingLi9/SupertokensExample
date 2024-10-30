// LinkWithPrefetch.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadingTime } from '../LoadingTimeContext';

const cache = {};

const LinkWithPrefetch = ({ to, label }) => {
    const [prefetched, setPrefetched] = useState(false);
    const navigate = useNavigate();
    const { setLoadTime } = useLoadingTime();

    const prefetchPage = () => {
        if (!cache[to]) {
            cache[to] = true;
            setPrefetched(true);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const startTime = performance.now();
        setLoadTime(null); // Reset load time
        navigate(to);
        // Wait until the page fully loads to calculate the load time
        setTimeout(() => setLoadTime(performance.now() - startTime), 0);
    };

    return (
        <a href={to} onMouseEnter={prefetchPage} onClick={handleClick}>
            <span style={{ color: prefetched ? 'green' : 'blue' }}>{label}</span>
        </a>
    );
};

export default LinkWithPrefetch;
