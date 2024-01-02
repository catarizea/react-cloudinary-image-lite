export declare enum Switching {
    Density = "density",
    Resolution = "resolution"
}
export type Breakpoints = {
    [key: string]: number;
};
export type Size = {
    query: string;
    width: number;
};
export type Common = {
    quality: number | 'auto';
};
export type UrlArgs = Common & {
    id: string;
    width: number;
    dpr?: number;
    blur?: number;
    format: string;
    aspectRatio?: number;
    cloudName: string;
    apiVersion: string;
};
export type SrcSetArgs = Common & {
    id: string;
    sizesArr: Size[];
    switching: Switching;
    format: string;
    aspectRatio?: number;
    cloudName: string;
    apiVersion: string;
};
