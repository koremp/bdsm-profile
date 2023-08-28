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
            back={bottom.back}
            middle={bottom.middle}
            next={bottom.next}
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
