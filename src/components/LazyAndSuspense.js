import React, { Suspense, lazy } from 'react';
import { useLazyAndSuspense } from '../useLazyAndSuspense';

const Chart = lazy(() => import('./Chart'));

const LazyAndSuspense = () => {
    const [showGraph, setShowGraph] = useLazyAndSuspense(false);

    return (
        <div className="lazy-and-suspense" style={{ textAlign: 'center' }}>

            <h1>React lazy and Suspense</h1>

            <button
                style={{ marginBottom: '20px' }}
                onClick={() => setShowGraph(!showGraph)}
            >
                {showGraph ? 'Hide' : 'Show'} Graph
            </button>
            {showGraph ? (
                <>
                    <Suspense fallback={<div>Loading ... </div>}>
                        <h2> This is a react graph</h2>
                        <Chart />
                    </Suspense>
                </>
            ) : null}
        </div>
    )
};

export default LazyAndSuspense;