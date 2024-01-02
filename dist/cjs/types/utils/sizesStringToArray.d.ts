type Size = {
    query: string;
    width: number;
};
type Response = Size[] | null;
declare const sizesStringToArray: (sizesString: string) => Response;
export default sizesStringToArray;
