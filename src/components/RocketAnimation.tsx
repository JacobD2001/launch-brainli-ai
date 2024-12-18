import { DotLottiePlayer } from '@dotlottie/react-player';

export const RocketAnimation = () => {
  return (
    <div className="w-60 h-60 mx-auto my-8">
      <DotLottiePlayer
        src="/rocket.lottie"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};