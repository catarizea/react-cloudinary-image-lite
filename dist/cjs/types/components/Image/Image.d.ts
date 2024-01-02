import React from 'react';
export interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    fetchpriority?: 'high' | 'low' | 'auto';
}
declare const Image: ({ fetchpriority, ...restProps }: ImageProps) => React.JSX.Element;
export default Image;
