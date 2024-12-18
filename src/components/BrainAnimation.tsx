import { useRive } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';

export const BrainAnimation = () => {
  const [hasError, setHasError] = useState(false);

  const { RiveComponent, rive } = useRive({
    src: 'https://public.rive.app/community/runtime-files/2195-4346-brain-animation.riv',
    autoplay: true,
    stateMachines: "State Machine 1",
    onError: () => setHasError(true)
  });

  useEffect(() => {
    return () => {
      if (rive) {
        rive.cleanup();
      }
    };
  }, [rive]);

  if (hasError) {
    return null;
  }

  return (
    <div className="w-64 h-64 mx-auto">
      <RiveComponent />
    </div>
  );
};