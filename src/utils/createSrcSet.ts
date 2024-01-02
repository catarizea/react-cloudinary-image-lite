import { SrcSetArgs, Switching } from '../types';
import createUrl from './createUrl';

const createSrcSet = ({
  id,
  quality,
  sizesArr,
  format,
  switching,
  aspectRatio,
  apiVersion,
  cloudName,
}: SrcSetArgs): string => {
  if (switching === Switching.Resolution) {
    const dpr = {};

    const srcSetArr = sizesArr.map(
      (size) =>
        `${createUrl({
          id,
          quality,
          format,
          width: size.width,
          aspectRatio,
          ...dpr,
          apiVersion,
          cloudName,
        })} ${size.width}w`,
    );

    return srcSetArr.join(', ');
  }

  return `${createUrl({
    id,
    quality,
    format,
    width: sizesArr[sizesArr.length - 1].width,
    aspectRatio,
    apiVersion,
    cloudName,
  })} 1x, ${createUrl({
    id,
    quality,
    format,
    width: sizesArr[sizesArr.length - 1].width,
    aspectRatio,
    dpr: 2,
    apiVersion,
    cloudName,
  })} 2x,  ${createUrl({
    id,
    quality,
    format,
    width: sizesArr[sizesArr.length - 1].width,
    aspectRatio,
    dpr: 3,
    apiVersion,
    cloudName,
  })} 3x`;
};

export default createSrcSet;
