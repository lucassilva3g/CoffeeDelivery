import { useEffect, useState } from "react"

import { api } from "../../../lib/axios"
import { CoffeeCard } from "../../molecules/CoffeeCard/CoffeeCard"
import {
  StyledContainerOurCoffee,
  StyledOurCoffeesSectionWrapper,
  StyledTitleOurCoffee,
} from "./OurCoffeesSection.styles"

export interface Backend {
  coffees: [
    {
      id: 1
      title: "Expresso Tradicional"
      imageSrc: "./src/assets/images/tradicional.png"
      price: 9.9
      description: "O tradicional café feito com água quente e grãos moídos"
      categories: ["Tradicional"]
    },

    {
      id: 2
      title: "Expresso Americano"
      imageSrc: "./src/assets/images/americano.png"
      price: 9.9
      description: "Expresso diluído, menos intenso que o tradicional "
      categories: ["Tradicional"]
    },
    {
      id: 3
      title: "Expresso Cremoso"
      imageSrc: "./src/assets/images/cremoso.png"
      price: 9.9
      description: "Café expresso tradicional com espuma cremosa"
      categories: ["Tradicional"]
    },
    {
      id: 4
      title: "Expresso Gelado"
      imageSrc: "./src/assets/images/gelado.png"
      price: 9.9
      description: "Bebida preparada com café expresso e cubos de gelo"
      categories: ["Tradicional", "Gelado"]
    },
    {
      id: 5
      title: "Café com Leite"
      imageSrc: "./src/assets/images/leite.png"
      price: 9.9
      description: "Meio a meio de expresso tradicional com leite vaporizado"
      categories: ["Tradicional ", "Com leite"]
    },
    {
      id: 6
      title: "Latte"
      imageSrc: "./src/assets/images/latte.png"
      price: 9.9
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa"
      categories: ["Tradicional", "Com leite"]
    },
    {
      id: 7
      title: "Capuccino"
      imageSrc: "./src/assets/images/capuccino.png"
      price: 9.9
      description: "Bebida com canela feita de doses iguais de café, leite e espuma"
      categories: ["Tradicional", "Com leite"]
    },
    {
      id: 8
      title: "Macchiato"
      imageSrc: "./src/assets/images/macchiato.png"
      price: 9.9
      description: "Café expresso misturado com um pouco de leite quente e espuma"
      categories: ["Tradicional", "Com leite"]
    },
    {
      id: 9
      title: "Mocaccino"
      imageSrc: "./src/assets/images/mocaccino.png"
      price: 9.9
      description: "Café expresso com calda de chocolate, pouco leite e espuma"
      categories: ["Tradicional", "Com leite"]
    },
    {
      id: 10
      title: "Chocolate Quente"
      imageSrc: "./src/assets/images/chocolate.png"
      price: 9.9
      description: "Bebida feita com chocolate dissolvido no leite quente e café"
      categories: ["Tradicional", "Com leite"]
    },
    {
      id: 11
      title: "Cubano"
      imageSrc: "./src/assets/images/cubano.png"
      price: 9.9
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã"
      categories: ["Tradicional", "Alcoólico", "Gelado"]
    },
    {
      id: 12
      title: "Havaiano"
      imageSrc: "./src/assets/images/havaiano.png"
      price: 9.9
      description: "Bebida adocicada preparada com café e leite de coco"
      categories: ["Especial"]
    },
    {
      id: 13
      title: "Árabe"
      imageSrc: "./src/assets/images/arabe.png"
      price: 9.9
      description: "Bebida preparada com grãos de café árabe e especiarias"
      categories: ["Especial"]
    },
    {
      id: 14
      title: "Irlandês"
      imageSrc: "./src/assets/images/irlandes.png"
      price: 9.9
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
      categories: ["Especial", "Alcoólico"]
    },
  ]
}

function OurCoffeeSection() {
  const [coffees, setCoffees] = useState<Backend[]>([])

  useEffect(() => {
    api
      .get<Backend[]>("/coffees")
      .then((response) => {
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
