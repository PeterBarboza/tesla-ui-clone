import { ReactNode, useCallback, useRef, useState } from 'react';

import ModelsContext, { CarModel } from '../ModelsContext';

import { Container } from './styles';

interface Props {
  children: ReactNode;
}

function ModelsWrapper({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel): void => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string): void => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string): CarModel | null => {
    return registeredModels.find(item => item.modelName === modelName) || null

    //eslint-disable-next-line
  }, [])

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>
        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
