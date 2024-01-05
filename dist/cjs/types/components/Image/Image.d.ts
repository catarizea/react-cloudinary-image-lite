import React, { CSSProperties } from 'react';
import { Common, Switching } from '../../types';
export interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, Common {
    src: string;
    width: number;
    height: number;
    alt: string;
    priority?: boolean;
    className?: string;
    placeholderClassName?: string;
    sizes: string;
    switching: Switching;
    notResponsive?: boolean;
    style?: CSSProperties;
    onLoaded?: (dataIndex: string) => void;
    aspectRatio?: number;
    dataIndex?: string;
    cloudName: string;
    apiVersion: string;
    noPlaceholder?: boolean;
}
export { Switching };
export declare const Image: ({ src, width, height, alt, priority, className, placeholderClassName, quality, sizes, switching, notResponsive, style, onLoaded, aspectRatio, dataIndex, cloudName, apiVersion, noPlaceholder, ...restProps }: ImageProps) => React.JSX.Element;
export default Image;
