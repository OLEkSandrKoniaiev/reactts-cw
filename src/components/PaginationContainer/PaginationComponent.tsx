import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const [isPrev, setIsPrev] = useState<boolean | null>(null);
    const [isNext, setIsNext] = useState<boolean | null>(null);

    useEffect(() => {
        const page = parseInt(query.get('page') || '1', 10);

        if (page > 1) {
            setIsPrev(true);
        } else {
            setIsPrev(false);
        }

        if (page < 500) {
            setIsNext(true);
        } else {
            setIsNext(false);
        }
    }, [query]);

    const changePage = (action: string) => {
        let page = parseInt(query.get('page') || '1', 10);

        switch (action) {
            case 'prev':
                if (page > 1) {
                    page -= 1;
                    setQuery({page: page.toString()});
                }
                break;
            case 'next':
                if (page < 500) {
                    page += 1;
                    setQuery({page: page.toString()});
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div>
                <button onClick={() => changePage('prev')} disabled={!isPrev}>
                    prev
                </button>
                <button onClick={() => changePage('next')} disabled={!isNext}>
                    next
                </button>
            </div>
        </>
    );
};

export default PaginationComponent;
