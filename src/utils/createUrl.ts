import { UrlArgs } from '../types';

const createUrl = ({
  id,
  quality,
  format,
  width,
  dpr,
  blur,
  aspectRatio,
  cloudName,
  apiVersion,
}: UrlArgs) => {
  return `https://res.cloudinary.com/${cloudName}/image/upload/q_${quality},f_${format}${
    aspectRatio ? ',c_fill' : ''
  },w_${width}${aspectRatio ? `,ar_${aspectRatio}` : ''}${
    dpr ? `,dpr_${dpr}` : ''
  }${blur ? `,e_blur:${blur}` : ''}/v${apiVersion}/${id}`;
};

export default createUrl;
