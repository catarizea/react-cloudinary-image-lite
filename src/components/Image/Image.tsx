import React, { CSSProperties, useState } from 'react';

import { Breakpoints, Common, Switching } from '../../types';
import { createSrcSet, createUrl, sizesStringToArray } from '../../utils';

export interface ImageProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    Common {
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

export const Image = ({
  src,
  width,
  height,
  alt,
  priority,
  className,
  placeholderClassName,
  quality,
  sizes,
  switching,
  notResponsive,
  style,
  currentBreakpoint,
  widthsByBreakpoint,
  onLoaded,
  aspectRatio,
  dataIndex,
  cloudName,
  apiVersion,
  ...restProps
}: ImageProps) => {
  const [loaded, loadedSet] = useState(false);

  const sizesArr = sizesStringToArray(sizes);

  if (switching === Switching.Resolution && !currentBreakpoint) {
    throw new Error('currentBreakpoint prop not set for resolution switching');
  }

  if (switching === Switching.Resolution && !widthsByBreakpoint) {
    throw new Error('widthsByBreakpoint prop not set for resolution switching');
  }

  if (!sizesArr) {
    throw new Error('Sizes attribute is not valid');
  }

  const srcSetAvif = createSrcSet({
    id: src,
    quality,
    sizesArr,
    format: 'avif',
    switching,
    aspectRatio,
    cloudName,
    apiVersion,
  });

  const srcSetWebp = createSrcSet({
    id: src,
    quality,
    sizesArr,
    format: 'webp',
    switching,
    aspectRatio,
    apiVersion,
    cloudName,
  });

  const ratio = width / height;

  const sizesProp = switching === Switching.Resolution ? { sizes } : {};

  let computedWidth = sizesArr[sizesArr.length - 1].width;

  if (
    switching === Switching.Resolution &&
    widthsByBreakpoint &&
    currentBreakpoint
  ) {
    computedWidth = widthsByBreakpoint[currentBreakpoint];
  }

  const computedHeight = Math.round(computedWidth / ratio);

  const styles = notResponsive ? { flexShrink: 0 } : {};

  const dataIndexAttr = dataIndex ? { 'data-index': dataIndex } : {};

  const classNames = className ? { className } : {};

  const placeholderStyle: CSSProperties = {};

  if (loaded) {
    placeholderStyle.display = 'none';
  }

  const imgStyle: CSSProperties = { opacity: 0 };

  if (loaded) {
    imgStyle.opacity = 1;
  }

  return (
    <div
      {...classNames}
      style={{ ...styles, ...style, position: 'relative', overflow: 'hidden' }}
      {...dataIndexAttr}
    >
      <img
        src={createUrl({
          id: src,
          quality: 'auto',
          format: 'auto',
          width: 100,
          aspectRatio,
          blur: 1000,
          apiVersion,
          cloudName,
        })}
        width={computedWidth}
        height={computedHeight}
        className={placeholderClassName}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'low'}
        alt={alt}
        style={{ position: 'absolute', inset: 0, ...placeholderStyle }}
      />
      <picture
        onLoad={() => {
          loadedSet(true);

          if (onLoaded && dataIndex) {
            onLoaded(dataIndex);
          }
        }}
      >
        <source type="image/avif" srcSet={srcSetAvif} {...sizesProp} />
        <img
          srcSet={srcSetWebp}
          src={createUrl({
            id: src,
            quality,
            format: 'webp',
            width: computedWidth,
            aspectRatio,
            apiVersion,
            cloudName,
          })}
          alt={alt}
          width={computedWidth}
          height={computedHeight}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'low'}
          style={imgStyle}
          {...sizesProp}
          {...restProps}
        />
      </picture>
    </div>
  );
};

export default Image;
