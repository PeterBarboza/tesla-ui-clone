import styled from 'styled-components'

import { imagesUrl } from '../../assets/images'

export const Container = styled.div`
.colored {
  background-position: center;
  background-size: cover;
}

.colored:nth-child(1) {
background-image: url(${imagesUrl.model3.desktop});
}
.colored:nth-child(2) {
background-image: url(${imagesUrl.modelY.desktop});
}
.colored:nth-child(3) {
background-image: url(${imagesUrl.modelS.desktop});
}
.colored:nth-child(4) {
background-image: url(${imagesUrl.modelX.desktop});
}
.colored:nth-child(5) {
background-image: url(${imagesUrl.solarPanel.desktop});
}
.colored:nth-child(6) {
background-image: url(${imagesUrl.solarRoof.desktop});
}
.colored:nth-child(7) {
background-image: url(${imagesUrl.accessories.desktop});
}

@media (max-width: 600px) {
  .colored:nth-child(1) {
    background-image: url(${imagesUrl.model3.mobile});
  }
  .colored:nth-child(2) {
    background-image: url(${imagesUrl.modelY.mobile});
  }
  .colored:nth-child(3) {
    background-image: url(${imagesUrl.modelS.mobile});
  }
  .colored:nth-child(4) {
    background-image: url(${imagesUrl.modelX.mobile});
  }
  .colored:nth-child(5) {
    background-image: url(${imagesUrl.solarPanel.mobile});
  }
  .colored:nth-child(6) {
    background-image: url(${imagesUrl.solarRoof.mobile});
  }
  .colored:nth-child(7) {
    background-image: url(${imagesUrl.accessories.mobile});
  }
}
`

export const Spacer = styled.div`
  height: 15vh;
  width: 100%;

  background: transparent;
`
