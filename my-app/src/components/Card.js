import { Card, Image, Text, Button, Group } from "@mantine/core";

const CardComponent = ({ name, src, onAdd }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          İndirimli Ürünler
        </p>
        <Image src={`/assets/images/${src}.jpg`} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
      </Group>

      <Text size="sm" color="dimmed">
        Bu ürünler şu anda %50 indirimlidir.
        <p textWeight="bold">Sınırlı sayıda stok.</p>
      </Text>

      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAdd}
      >
        Ekle
      </Button>
    </Card>
  );
};

export default CardComponent;
