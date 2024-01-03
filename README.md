# React Cloudinary Image Lite

This component is preparing **WebP and AVIF image sets** from assets hosted on Cloudinary, using **density or resolution switching** and a **blurred preloading image placeholder**.

This a simple no fuss React Image component to help you get up and running with responsive image sets from Cloudinary. For a more complex use case you can find other packages on NPM registry like Cloudinary React SDK `@cloudinary/react`.

## Installation

```bash
npm i react-cloudinary-image-lite
```

## Using the Image component

```typescript
import { Image, Switching } from 'react-cloudinary-image-lite';
```

### Density switching

The **src** prop is the Cloudinary asset ID composed by the folder name and the display name.

As **width** and **height** use the exact size of the original asset to be able to scale it proportionally.

Replace the **cloudName** prop with your product environment name from **Cloudinary console**. You can also find it in every asset link from each assets folder.

```typescript
<Image
  src="blog/jedi-knight-3-v6_grl6fe.png"
  width={1823}
  height={1660}
  alt="jedi knight"
  switching={Switching.Density}
  quality={90}
  sizes="480px"
  cloudName="catalinworks"
  apiVersion="1"
/>
```

### Resolution switching

1. By specifying the **sizes** prop like this:

```typescript
<Image
  src="blog/rabbitmq_rctwjf.png"
  width={850}
  height={882}
  aspectRatio={0.9}
  switching={Switching.Resolution}
  alt="rabbitmq"
  priority
  quality={90}
  sizes="(min-width: 1536px) 500px, (min-width: 1280px) 400px, (min-width: 1024px) 400px, (min-width: 768px) 450px, 360px"
  cloudName="catalinworks"
  apiVersion="1"
/>
```

2. Or dynamically by using the breakpoints in your application and the image widths by breakpoint like this.

```typescript
const imageWidths: { [key: string]: number } = {
  sm: 360,
  md: 450,
  lg: 400,
  xl: 400,
  '2xl': 500,
};

const breakpoints: { [key: string]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
```

And later in **TSX**:

```typescript
<Image
  src="blog/rabbitmq_rctwjf.png"
  width={850}
  height={882}
  aspectRatio={0.9}
  alt="rabbitmq"
  switching={Switching.Resolution}
  quality={90}
  sizes={`(min-width: ${breakpoints['2xl']}px) ${imageWidths['2xl']}px, (min-width: ${breakpoints.xl}px) ${imageWidths.xl}px, (min-width: ${breakpoints.lg}px) ${imageWidths.lg}px, (min-width: ${breakpoints.md}px) ${imageWidths.md}px, ${imageWidths.sm}px`}
  priority
  cloudName="catalinworks"
  apiVersion="1"
/>
```

## Component props

Props marked with * are mandatory.

| Prop name            | Type                        | Example Value                             | Explanation                                                |
| -------------------- | --------------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| src*                 | string                      | "blog/rabbitmq_rctwjf.png"                | check Cloudinary console for the asset ID                  |
| width*               | number                      | 850                                       |                                                            |
| height*              | number                      | 882                                       |                                                            |
| switching*           | Switching                   | Switching.Density or Switching.Resolution |                                                            |
| alt*                 | string                      | "rabbitmq"                                |                                                            |
| quality*             | number                      | 90                                        |                                                            |
| sizes*               | string                      | "480px"                                   | or longer string for resolution switching (see above)      |
| cloudName*           | string                      | "catalinworks"                            | check Cloudinary console for product environment           |
| apiVersion*          | string                      | "1"                                       |                                                            |
| aspectRatio          | number                      | 0.9                                       | aspect ratio to crop the original image                    |
| priority             | boolean                     | true                                      | sets loading="eager" and fetchpriority="high"              |
| className            | string                      | "some-class"                              | optional prop for the parent div                           |
| style                | CSSProperties               | { marginTop: '10px' }                     | optional prop for the parent div                           |
| placeholderClassName | string                      | "some-other-class"                        | optional prop for the blurred preloading image placeholder |
| notResponsive        | boolean                     | true                                      | sets flex-shrink: 0                                        |
| dataIndex            | string                      | "1"                                       | identifier for the onLoaded callback function              |
| onLoaded             | (dataIndex: string) => void |                                           | callback function triggered after image is loaded          |
