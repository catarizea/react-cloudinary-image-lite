import React, { CSSProperties } from 'react';

declare enum Switching {
    Density = "density",
    Resolution = "resolution"
}
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
    onLoaded?: (dataIndex: string) => void;
    aspectRatio?: number;
    dataIndex?: string;
    cloudName: string;
    apiVersion: string;
    noPlaceholder?: boolean;
}

declare const Image: ({ src, width, height, alt, priority, className, placeholderClassName, quality, sizes, switching, notResponsive, style, onLoaded, aspectRatio, dataIndex, cloudName, apiVersion, noPlaceholder, ...restProps }: ImageProps) => React.JSX.Element;

export { Image, Switching };
