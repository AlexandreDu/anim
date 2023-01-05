import { AnimatedPage } from '../components/animatedPage';

import { DescriptionsList } from '../components/descriptionsList/index';

import { paintingsContent } from '../content/paintings';

export function Paintings() {
  return (
    <AnimatedPage>
      <DescriptionsList list={paintingsContent} isLastItemBeforeFooter />
    </AnimatedPage>
  );
}
