import React, { CSSProperties } from 'react';

declare enum Switching {
    Density = "density",
    Resolution = "resolution"
}
type Breakpoints = {
    [key: string]: number;
};
type Common = {
    quality: number | 'auto';
};

interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, Common {
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

declare const Image: ({ src, width, height, alt, priority, className, placeholderClassName, quality, sizes, switching, notResponsive, style, currentBreakpoint, widthsByBreakpoint, onLoaded, aspectRatio, dataIndex, cloudName, apiVersion, ...restProps }: ImageProps) => React.JSX.Element;

export { Image, Switching };
