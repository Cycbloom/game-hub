import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="skyblue">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="tomato">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
