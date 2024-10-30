// LoadingTimeContext.js
import React, { createContext, useContext, useState } from 'react';

const LoadingTimeContext = createContext();

export const LoadingTimeProvider = ({ children }) => {
    const [loadTime, setLoadTime] = useState(null);

    return (
        <LoadingTimeContext.Provider value={{ loadTime, setLoadTime }}>
            {children}
        </LoadingTimeContext.Provider>
    );
};

export const useLoadingTime = () => useContext(LoadingTimeContext);
