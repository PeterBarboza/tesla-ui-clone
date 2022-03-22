import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

function ModelSection({ modelName, overlayNode, ...props }: Props) {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef
      })
    }

  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props} />
  );
};

export default ModelSection;
