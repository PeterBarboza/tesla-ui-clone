import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'

import { Container } from './styles'

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map((modelName) => (
            <ModelSection
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order online for delivery"
                />
              }
              key={modelName}
            />

          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page