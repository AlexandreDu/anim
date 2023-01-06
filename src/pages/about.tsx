import { useAnchors } from '../hooks/useAnchors';

import { Anchors } from '../components/anchors';
import { AnimatedPage } from '../components/animatedPage';
import { DescriptionsList } from '../components/descriptionsList/index';
import { aboutContent } from '../content/about';

export function About() {
  const { currentAnchor, setCurrentAnchor, anchorsList } =
    useAnchors(aboutContent);
  return (
    <AnimatedPage>
      <DescriptionsList
        list={aboutContent}
        isLastItemBeforeFooter
        setCurrentAnchor={setCurrentAnchor}
      />
      <Anchors list={anchorsList} currentAnchor={currentAnchor} />
    </AnimatedPage>
  );
}
