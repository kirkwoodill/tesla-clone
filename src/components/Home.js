import React from 'react'
import styled from 'styled-components'
import ScrollSnap from 'scroll-snap'
import Section from './Section'


function Home() {
    return (
        <div>
            <Container>
               <Section 
                  title = "Model 3"
                  description = "$8,625 Clean Car Discount now available to residents and businesses in New Zealand on eligible Model 3."
                  background = "model-3.jpg"
                  leftBtnText = "Custom Order"
                  rightBtnText = "Existing Inventory"
               />
               <Section 
                  title = "Solar and Powerwall"
                  description = "Power Everything"
                  background = "solar-panel.jpg"
                  leftBtnText = "Learn More"
               />
               <Section 
                  title = "Model Y"
                  description = "Order Online for Touchless Delivery"
                  background = "model-y.jpg"
                  leftBtnText = "Custom Order"
                  rightBtnText = "Existing Inventory"
               />
             <Section 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                background = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
             />


             <Section 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                background = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
             />

             <Section 
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                background = "solar-roof.jpg"
                leftBtnText = "Order now"
                rightBtnText = "Learn more"
             />
            <Section 
                title = "Accessories"
                description = ""
                background = "accessories.jpg"
                leftBtnText = "Shop Now"
                rightBtnText = ""
             />
            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`