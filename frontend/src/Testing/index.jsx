// PrefetchedTesting.js
import React from 'react';
import { Link } from 'react-router-dom';
import LinkWithPrefetch from '../Prefetch/LinkWithPrefetch';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { useLoadingTime } from '../LoadingTimeContext';

export default function PrefetchedTesting() {
    const sessionContext = useSessionContext();
    const { setLoadTime } = useLoadingTime();

    if (sessionContext.loading === true) {
        return null;
    }

    const handleRegularClick = () => {
        const startTime = performance.now();
        setLoadTime(null); // Reset load time
        setTimeout(() => setLoadTime(performance.now() - startTime), 0);
    };

    return (
        <div className="fill" id="home-container">
            <h2>Select a Page:</h2>
            <ul>
                <li>
                    <LinkWithPrefetch to="/sub1" label="Go to Sub1" />
                </li>
                <li>
                    <LinkWithPrefetch to="/sub2" label="Go to Sub2" />
                </li>
                <li>
                    <LinkWithPrefetch to="/sub3" label="Go to Sub3" />
                </li>
            </ul>
            <h3>Regular Links</h3>
            <ul>
                <li>
                    <Link to="/sub1" onClick={handleRegularClick}>Go to Sub1 (Normal)</Link>
                </li>
                <li>
                    <Link to="/sub2" onClick={handleRegularClick}>Go to Sub2 (Normal)</Link>
                </li>
                <li>
                    <Link to="/sub3" onClick={handleRegularClick}>Go to Sub3 (Normal)</Link>
                </li>
                <li>
                    <Link to="/apphub" onClick={handleRegularClick}>Go to apphub (Normal)</Link>
                </li>
            </ul>
        </div>
    );
}
