import { useEffect, useState } from "react";
import { Box, Button, Center, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import api from "./api";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <Stack as="main" direction="column" justifyContent="space-between">
      <Box
        as="header"
        p="1rem"
        borderBottom="1px solid gainsboro"
        fontWeight="bold"
        fontSize="24px"
      >
        Estampitiency
      </Box>
      <SimpleGrid gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))" as="section" padding="16px" flex="1" spacing="12px">
        {products.map((product) => (
          <Stack direction="column" spacing="16px" as="article" key={product.id}>
            <Image width="100%" objectFit="contain" src={product.image} />
            <Stack display="flex" spacing="6px" height="100%">
              <Text fontWeight="500" fontSize="20px">{product.title}</Text>
              <Text color="gray">{product.description}</Text>
            </Stack>
            <Button variant="cart" mt="auto">Agregar</Button>
          </Stack>
        ))}
      </SimpleGrid>
      <Center as="aside" position="sticky" bottom="0" margin="auto" pb="16px">
        <Button variant="cart" boxShadow="0 0 10px rgba(0,0,0,0.5)" >3 productos (total: $12)</Button>
      </Center>
      <Box as="footer" padding="16px" borderTop="1px solid gainsboro" textAlign="center" color="gray">
        Encontrá la consigna de este ejercicio y otros más{" "}
        <Link color="brand.links" href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">
          acá
        </Link>
      </Box>
    </Stack>
  );
}

export default App;
