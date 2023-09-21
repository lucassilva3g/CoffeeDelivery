import { useEffect, useState } from "react"

import { api } from "../../../lib/axios"
import { CoffeeCard } from "../../molecules/CoffeeCard/CoffeeCard"
import {
  StyledContainerOurCoffee,
  StyledOurCoffeesSectionWrapper,
  StyledTitleOurCoffee,
} from "./OurCoffeesSection.styles"

export interface Backend {
  imageSrc: string
  categories: string[]
  description: string
  price: number
  title: string
  id: number
}

function OurCoffeeSection() {
  const [coffees, setCoffees] = useState<Backend[]>([])

  useEffect(() => {
    api
      .get<Backend[]>("/coffees")
      .then((response) => {
        console.log(response.data)
        setCoffees(response.data)
      })
      .catch((error) => {
        console.error("Error fetching coffees:", error)
      })
  }, [])

  return (
    <>
      <StyledContainerOurCoffee>
        <StyledTitleOurCoffee>Nossos Cafés</StyledTitleOurCoffee>
        <StyledOurCoffeesSectionWrapper>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} item={coffee} />
          ))}
        </StyledOurCoffeesSectionWrapper>
      </StyledContainerOurCoffee>
    </>
  )
}

export { OurCoffeeSection }
