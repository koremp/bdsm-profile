import Bottom, { BottomProps } from './Bottom';
import Title from './Title';

export interface PageProps {
  titleText: string
  children?: React.ReactNode | undefined
  bottom?: BottomProps
}

export default function Page({ titleText, children, bottom }: PageProps) {
  return (
    <>
      <Title text={titleText} />
      {children}
      {
        bottom && (
          <Bottom
            backHref={bottom.backHref}
            backName={bottom.backName}
            nextHref={bottom.nextHref}
            nextName={bottom.nextName}
          />
        )
      }
    </>
  );
}

Page.defaultProps = {
  children: undefined,
  bottom: undefined,
};
