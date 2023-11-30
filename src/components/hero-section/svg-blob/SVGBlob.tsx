import Image from 'next/image';

type Props = {
  width: number;
  color: 'blue' | 'orange';
  pos: { left?: number; right?: number; top: number; rotate: number };
};

const SVGBlob = ({ width, color, pos }: Props) => {
  return (
    <div>
      <div
        className={`absolute`}
        style={{
          top: `${pos.top}%`,
          rotate: `${pos.rotate}deg`,

          ...(pos.left ? { left: `${pos.left}%` } : { right: `${pos.right}%` }),
        }}
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
