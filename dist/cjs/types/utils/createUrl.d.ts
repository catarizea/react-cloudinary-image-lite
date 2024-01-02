import { UrlArgs } from '../types';
declare const createUrl: ({ id, quality, format, width, dpr, blur, aspectRatio, cloudName, apiVersion, }: UrlArgs) => string;
export default createUrl;
