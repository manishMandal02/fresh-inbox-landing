import ModalVideo from 'react-modal-video';
import 'node_modules/react-modal-video/scss/modal-video.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalVideoPlayer = ({ isOpen, onClose }: Props) => {
  return (
    <div className=''>
      <ModalVideo
        channel='youtube'
        youtube={{
          autoplay: 1,
          //@ts-ignore
          color: 'white',
        }}
        videoId='lqXWVzWkkyc'
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default ModalVideoPlayer;
