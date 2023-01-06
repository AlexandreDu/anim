import type { useAnchorsProps } from '../../types';

import { useState } from 'react';

export function useAnchors(list: useAnchorsProps) {
  const [currentAnchor, setCurrentAnchor] = useState('');
  const anchorsList = list.map(({ staticTitle, animatedTitle, id }) => {
    return {
      label: `${staticTitle} ${animatedTitle}`,
      id,
    };
  });
  return { currentAnchor, setCurrentAnchor, anchorsList };
}
