import { useState } from 'react';

export const useLazyAndSuspense = () => {

    const [showGraph, setShowGraph] = useState(false);

    return [showGraph, setShowGraph];

}
