import { MotionPage } from '../components/motionPage';

import { DescriptionsList } from '../components/descriptionsList/index';

import { paintingsContent } from '../content/paintings';

export function Paintings() {
  return (
    <MotionPage>
      <DescriptionsList list={paintingsContent} isLastItemBeforeFooter />
    </MotionPage>
  );
}
