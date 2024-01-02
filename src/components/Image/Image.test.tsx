import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Image, { Switching } from './Image';

describe('Image', () => {
  it('should render the image set with density switching', () => {
    const { getAllByAltText } = render(
      <Image
        alt="jedi knight"
        apiVersion="1"
        cloudName="catalinworks"
        height={1660}
        quality={90}
        sizes="480px"
        src="blog/jedi-knight-3-v6_grl6fe.png"
        switching={Switching.Density}
        width={1823}
      />,
    );

    const image = getAllByAltText('jedi knight');

    expect(image.length).toEqual(2);
    expect(image[0]).toHaveAttribute('loading', 'lazy');
    expect(image[1]).toHaveAttribute('loading', 'lazy');
    expect(image[0]).toHaveAttribute('fetchpriority', 'low');
    expect(image[1]).toHaveAttribute('fetchpriority', 'low');
    expect(image[1]).toHaveAttribute(
      'srcset',
      'https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,w_480/v1/blog/jedi-knight-3-v6_grl6fe.png 1x, https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,w_480,dpr_2/v1/blog/jedi-knight-3-v6_grl6fe.png 2x,  https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,w_480,dpr_3/v1/blog/jedi-knight-3-v6_grl6fe.png 3x',
    );
  });

  it('should render the image set with resolution switching', () => {
    const { getAllByAltText } = render(
      <Image
        alt="rabbitmq"
        apiVersion="1"
        aspectRatio={0.9}
        cloudName="catalinworks"
        height={882}
        onLoaded={() => {}}
        priority
        quality={90}
        sizes="(min-width: 1536px) 500px, (min-width: 1280px) 400px, (min-width: 1024px) 400px, (min-width: 768px) 450px, 360px"
        src="blog/rabbitmq_rctwjf.png"
        switching={Switching.Resolution}
        width={850}
      />,
    );

    const image = getAllByAltText('rabbitmq');

    expect(image.length).toEqual(2);
    expect(image[0]).toHaveAttribute('loading', 'eager');
    expect(image[1]).toHaveAttribute('loading', 'eager');
    expect(image[0]).toHaveAttribute('fetchpriority', 'high');
    expect(image[1]).toHaveAttribute('fetchpriority', 'high');
    expect(image[1]).toHaveAttribute(
      'srcset',
      'https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,c_fill,w_500,ar_0.9/v1/blog/rabbitmq_rctwjf.png 500w, https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,c_fill,w_400,ar_0.9/v1/blog/rabbitmq_rctwjf.png 400w, https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,c_fill,w_400,ar_0.9/v1/blog/rabbitmq_rctwjf.png 400w, https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,c_fill,w_450,ar_0.9/v1/blog/rabbitmq_rctwjf.png 450w, https://res.cloudinary.com/catalinworks/image/upload/q_90,f_webp,c_fill,w_360,ar_0.9/v1/blog/rabbitmq_rctwjf.png 360w',
    );
  });
});
