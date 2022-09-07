import styled from 'styled-components'

import model3Desktop from "../../assets/images/model-3-desktop.jpg"
import model3Mobile from "../../assets/images/model-3-mobile.jpg"

import modelSDesktop from "../../assets/images/model-s-desktop.jpg"
import modelSMobile from "../../assets/images/model-s-mobile.jpg"

import modelXDesktop from "../../assets/images/model-x-desktop.jpg"
import modelXMobile from "../../assets/images/model-x-mobile.jpg"

import modelYDesktop from "../../assets/images/model-y-desktop.jpg"
import modelYMobile from "../../assets/images/model-y-mobile.jpg"

import solarPanelDesktop from "../../assets/images/solar-panel-desktop.jpg"
import solarPanelMobile from "../../assets/images/solar-panel-mobile.jpg"

import solarRoofDesktop from "../../assets/images/solar-roof-desktop.jpg"
import solarRoofMobile from "../../assets/images/solar-roof-mobile.jpg"

import accessoriesDesktop from "../../assets/images/accessories-desktop.jpg"
import accessoriesMobile from "../../assets/images/accessories-mobile.jpg"

export const Container = styled.div`
.colored {
  background-position: center;
  background-size: cover;
}

.colored:nth-child(1) {
background-image: url(${model3Desktop.src});
}
.colored:nth-child(2) {
background-image: url(${modelYDesktop.src});
}
.colored:nth-child(3) {
background-image: url(${modelSDesktop.src});
}
.colored:nth-child(4) {
background-image: url(${modelXDesktop.src});
}
.colored:nth-child(5) {
background-image: url(${solarPanelDesktop.src});
}
.colored:nth-child(6) {
background-image: url(${solarRoofDesktop.src});
}
.colored:nth-child(7) {
background-image: url(${accessoriesDesktop.src});
}

@media (max-width: 600px) {
  .colored:nth-child(1) {
    background-image: url(${model3Mobile.src});
  }
  .colored:nth-child(2) {
    background-image: url(${modelYMobile.src});
  }
  .colored:nth-child(3) {
    background-image: url(${modelSMobile.src});
  }
  .colored:nth-child(4) {
    background-image: url(${modelXMobile.src});
  }
  .colored:nth-child(5) {
    background-image: url(${solarPanelMobile.src});
  }
  .colored:nth-child(6) {
    background-image: url(${solarRoofMobile.src});
  }
  .colored:nth-child(7) {
    background-image: url(${accessoriesMobile.src});
  }
}
`

export const Spacer = styled.div`
  height: 15vh;
  width: 100%;

  background: transparent;
`
