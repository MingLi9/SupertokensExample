import React, { useEffect } from 'react';
import { useLoadingTime } from '../LoadingTimeContext';
import { useSessionContext } from "supertokens-auth-react/recipe/session";

export default function Sub2() {
    const sessionContext = useSessionContext();
    const { loadTime } = useLoadingTime();

    useEffect(() => {
        document.title = 'Sub Page 2';
    }, []);

    if (sessionContext.loading === true) {
        return null;
    }

    return (
        <h1>
            Dit is sub pagina 2!
            {loadTime !== null && (
                <p>Load Time: {loadTime.toFixed(2)} ms</p>
            )}
        </h1>
    );
}
