export interface FlexProps {
  flex?: string;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
}
