import type { DescriptionsListProps } from '../../types';

import { useMedia } from '../../hooks/useMedia';

import { Stack } from '../stack';
import { Description } from '../description';
import { ScrollSnapWrapper } from '../ui/styles';
import { AnimatedHighlight } from '../highlight';

import {
  pageWrapperPaddingBottom,
  pageWrapperPaddingTop,
} from '../layout/styles';
import { footerHeight } from '../layout/footer/styles';

export function DescriptionsList({
  isLastItemBeforeFooter,
  list,
  setCurrentAnchor,
}: DescriptionsListProps) {
  const mdAndUp = useMedia('md');

  return (
    <Stack direction="vertical" space={mdAndUp ? 'none' : 'xxl'}>
      {list.map(
        (
          {
            staticTitle,
            animatedTitle,
            colorOne,
            colorTwo,
            colorThree,
            content,
            links,
            linksColor,
            src,
            id,
          },
          index
        ) => {
          let minHeightToSubstract = pageWrapperPaddingTop;
          if (isLastItemBeforeFooter && index === list.length - 1)
            minHeightToSubstract = `calc( ${pageWrapperPaddingTop} + ${pageWrapperPaddingBottom} + ${footerHeight})`;
          return (
            <ScrollSnapWrapper
              key={index}
              minHeightToSubstract={minHeightToSubstract}
            >
              <Description
                title={
                  <>
                    {staticTitle}{' '}
                    <AnimatedHighlight
                      colorOne={colorOne}
                      colorTwo={colorTwo}
                      colorThree={colorThree}
                    >
                      {animatedTitle}
                    </AnimatedHighlight>
                  </>
                }
                content={content}
                links={links}
                linksColor={linksColor}
                src={src}
                id={id}
                setCurrentAnchor={setCurrentAnchor}
              />
            </ScrollSnapWrapper>
          );
        }
      )}
    </Stack>
  );
}
