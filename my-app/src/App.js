import { useState } from "react";
import {
  Button,
  Badge,
  Container,
  Drawer,
  Indicator,
  Group,
  List,
  SimpleGrid,
  ThemeIcon,
  Input,
} from "@mantine/core";
import { IconCircleCheck, IconBasket } from "@tabler/icons";
import Card from "./components/Card";
import "./App.css";

const storeItems = [
  {
    id: 100,
    name: "Akıllı saat",
    src: "akıllı saat",
    price: 20,
    class: "Ürün",
  },
  {
    id: 101,
    name: "Kulaklık",
    src: "kulaklık",
    price: 10,
    class: "Ürün",
  },
  {
    id: 102,
    name: "Çanta",
    src: "Bez çanta",
    price: 25,
    class: "Ürün",
  },
  {
    id: 103,
    name: "Telefon",
    src: "Telefon",
    price: 25,
    class: "Ürün",
  },
  {
    id: 104,
    name: "Ayakkabı",
    src: "Ayakkabı",
    price: 25,
    class: "Ürün",
  },
  {
    id: 105,
    name: "Air Fry",
    src: "Air-fry",
    price: 25,
    class: "Ürün",
  },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          onClick={() => setSearchValue("")}
        >
          Temizle
        </Button>
        <Indicator color="red" label={basketItems.length} size={22}>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => setOpened(true)}
          >
            <IconBasket size={22} />
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => addToBasket({ id, name })}
            />
          );
        })}
      </SimpleGrid>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sepetim"
        padding="md"
        size="md"
      >
        <List
          className="List"
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ name, count }, index) => (
            <List.Item key={index}>
              <Group>
                <div>{name}</div> <Badge>{count}</Badge>
              </Group>
            </List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
