import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'
import { ModelsWrapper, ModelSection } from '../Model'

import { Container, Spacer } from './styles'

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {
              name: 'Model 3',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model Y',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model S',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Model X',
              description: 'Order Online for Touchless Delivery'
            },
            {
              name: 'Solar Panels',
              description: 'Lowest Cost Solar Panels in America'
            },
            {
              name: 'Solar Roof',
              description: 'Produce Clean Energy From Your Roof'
            },
            {
              name: 'Accessories',
              description: ''
            },
          ].map((item) => (
            <ModelSection
              className="colored"
              modelName={item.name}
              overlayNode={
                <DefaultOverlayContent
                  label={item.name}
                  description={item.description}
                />
              }
              key={item.name}
            />

          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page