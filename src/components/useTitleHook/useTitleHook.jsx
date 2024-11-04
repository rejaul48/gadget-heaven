
import { useEffect } from 'react';

const useTitleHook = (title) => {
    useEffect(() => {
        document.title = `Gadget | ${title}`;
    }, [title]);
};

export default useTitleHook;
