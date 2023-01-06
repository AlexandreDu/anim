import { useAnchors } from '../hooks/useAnchors';

import { AnimatedPage } from '../components/animatedPage';
import { DescriptionsList } from '../components/descriptionsList/index';
import { Anchors } from '../components/anchors';

import { paintingsContent } from '../content/paintings';

export function Paintings() {
  const { currentAnchor, setCurrentAnchor, anchorsList } =
    useAnchors(paintingsContent);

  return (
    <AnimatedPage>
      <DescriptionsList
        list={paintingsContent}
        isLastItemBeforeFooter
        setCurrentAnchor={setCurrentAnchor}
      />
      <Anchors list={anchorsList} currentAnchor={currentAnchor} />
    </AnimatedPage>
  );
}
