import React from 'react';

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fetchpriority?: 'high' | 'low' | 'auto';
}

const Image = ({ fetchpriority, ...restProps }: ImageProps) => {
  return <img fetchpriority={fetchpriority} {...restProps} />;
};

export default Image;
