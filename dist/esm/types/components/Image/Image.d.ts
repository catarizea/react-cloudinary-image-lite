import React, { CSSProperties } from 'react';
import { Breakpoints, Common, Switching } from '../../types';
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
    currentBreakpoint?: string;
    widthsByBreakpoint?: Breakpoints;
    onLoaded?: (dataIndex: string) => void;
    aspectRatio?: number;
    dataIndex?: string;
    cloudName: string;
    apiVersion: string;
}
export { Switching };
export declare const Image: ({ src, width, height, alt, priority, className, placeholderClassName, quality, sizes, switching, notResponsive, style, currentBreakpoint, widthsByBreakpoint, onLoaded, aspectRatio, dataIndex, cloudName, apiVersion, ...restProps }: ImageProps) => React.JSX.Element;
export default Image;
