import { Text, List, ListItem, HStack, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <Spinner />}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
