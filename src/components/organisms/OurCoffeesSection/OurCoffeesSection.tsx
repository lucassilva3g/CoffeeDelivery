import { useEffect, useState } from "react"

import { CoffeeCard } from "../../molecules/CoffeeCard/CoffeeCard"
import {
  StyledContainerOurCoffee,
  StyledOurCoffeesSectionWrapper,
  StyledTitleOurCoffee,
} from "./OurCoffeesSection.styles"

export interface Coffee {
  id: number
  title: string
  imageSrc: string
  price: number
  description: string
  categories: string[]
  quantity?: number
}

export const coffeeData: Coffee[] = [
  {
    id: 1,
    title: "Expresso Tradicional",
    imageSrc: "../../../assets/images/tradicional.png",
    price: 9.9,
    description: "O tradicional café feito com água quente e grãos moídos",
    categories: ["Tradicional"],
  },

  {
    id: 2,
    title: "Expresso Americano",
    imageSrc: "../../../assets/images/americano.png",
    price: 9.9,
    description: "Expresso diluído, menos intenso que o tradicional ",
    categories: ["Tradicional"],
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    imageSrc: "../../../assets/images/cremoso.png",
    price: 9.9,
    description: "Café expresso tradicional com espuma cremosa",
    categories: ["Tradicional"],
  },
  {
    id: 4,
    title: "Expresso Gelado",
    imageSrc: "../../../assets/images/gelado.png",
    price: 9.9,
    description: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["Tradicional", "Gelado"],
  },
  {
    id: 5,
    title: "Café com Leite",
    imageSrc: "../../../assets/images/leite.png",
    price: 9.9,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["Tradicional ", "Com leite"],
  },
  {
    id: 6,
    title: "Latte",
    imageSrc: "../../../assets/images/latte.png",
    price: 9.9,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["Tradicional", "Com leite"],
  },
  {
    id: 7,
    title: "Capuccino",
    imageSrc: "../../../assets/images/capuccino.png",
    price: 9.9,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["Tradicional", "Com leite"],
  },
  {
    id: 8,
    title: "Macchiato",
    imageSrc: "../../../assets/images/macchiato.png",
    price: 9.9,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["Tradicional", "Com leite"],
  },
  {
    id: 9,
    title: "Mocaccino",
    imageSrc: "../../../assets/images/mocaccino.png",
    price: 9.9,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["Tradicional", "Com leite"],
  },
  {
    id: 10,
    title: "Chocolate Quente",
    imageSrc: "../../../assets/images/chocolate.png",
    price: 9.9,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["Tradicional", "Com leite"],
  },
  {
    id: 11,
    title: "Cubano",
    imageSrc: "../../../assets/images/cubano.png",
    price: 9.9,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    categories: ["Tradicional", "Alcoólico", "Gelado"],
  },
  {
    id: 12,
    title: "Havaiano",
    imageSrc: "../../../assets/images/havaiano.png",
    price: 9.9,
    description: "Bebida adocicada preparada com café e leite de coco",
    categories: ["Especial"],
  },
  {
    id: 13,
    title: "Árabe",
    imageSrc: "../../../assets/images/arabe.png",
    price: 9.9,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["Especial"],
  },
  {
    id: 14,
    title: "Irlandês",
    imageSrc: "../../../assets/images/irlandes.png",
    price: 9.9,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["Especial", "Alcoólico"],
  },
]

function OurCoffeeSection() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    setCoffees(coffeeData)
  }, [])

  return (
    <>
      <StyledContainerOurCoffee>
        <StyledTitleOurCoffee>Nossos Cafés</StyledTitleOurCoffee>
        <StyledOurCoffeesSectionWrapper>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              item={{ ...coffee, quantity: coffee.quantity || 0 }}
            />
          ))}
        </StyledOurCoffeesSectionWrapper>
      </StyledContainerOurCoffee>
    </>
  )
}

export { OurCoffeeSection }
