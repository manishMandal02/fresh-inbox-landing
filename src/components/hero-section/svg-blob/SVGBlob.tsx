import Image from 'next/image';

type Props = {
  width: number;
  color: 'blue' | 'orange';
};

const SVGBlob = ({ width, color }: Props) => {
  return (
    <div>
      <div
        className={`absolute ${
          color === 'blue'
            ? '2xl:top-[50%] top-[60%] 2xl:-left-[35%] -left-[45%] rotate-[22deg]'
            : '2xl:top-[60%] top-[68%] 2xl:-right-[32%] -right-[45%] -rotate-[150deg]'
        }`}
        style={{}}
      >
        <Image
          src={`/blob-pattern-${color}.svg`}
          alt='svg blob pattern'
          className='max-w-full h-full object-cover bg-center opacity-80 z-0'
          width={width}
          height={width}
        />
      </div>
    </div>
  );
};

export default SVGBlob;
