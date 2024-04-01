import { useEffect } from 'react';

export const useProject = (params, data, set) => {
    useEffect(() => {
        const selectedProject = data.find(proj => proj.slug === params.slug);

        if (selectedProject) {
            set(selectedProject);
        }
    }, [params.slug]);
};
