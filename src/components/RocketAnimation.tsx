import { Player } from '@dotlottie/react-player';

export const RocketAnimation = () => {
  return (
    <div className="w-40 h-40 mx-auto my-8">
      <Player
        src="/rocket.lottie"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};