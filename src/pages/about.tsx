import { AnimatedPage } from '../components/animatedPage';
import { DescriptionsList } from '../components/descriptionsList/index';
import { aboutContent } from '../content/about';

export function About() {
  return (
    <AnimatedPage>
      <DescriptionsList list={aboutContent} isLastItemBeforeFooter />
    </AnimatedPage>
  );
}
