import { MotionPage } from '../components/motionPage';
import { DescriptionsList } from '../components/descriptionsList/index';
import { aboutContent } from '../content/about';

export function About() {
  return (
    <MotionPage>
      <DescriptionsList list={aboutContent} isLastItemBeforeFooter />
    </MotionPage>
  );
}
