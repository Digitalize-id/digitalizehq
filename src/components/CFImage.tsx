import Image, { type ImageProps } from 'next/image';

type Args = {
  src: string;
  width?: number | string;
  quality?: number | string;
};

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader = ({ src, width, quality }: Args) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const CFImage = (props: ImageProps) => {
  return <Image loader={cloudflareLoader} {...props} />;
};

export default CFImage;
