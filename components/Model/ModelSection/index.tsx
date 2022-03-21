import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}
//TODO: se nescessário, adicionar a propriedade children.
function ModelSection({ modelName, overlayNode, ...props }: Props) {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  //TODO: se o código bugar por causa do registerModel ter sido adicionado com dependência
  //do useEffect, retire-o e desative o eslint naquela linha com aquele comentário

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
