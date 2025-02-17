import { Text, UnorderedList, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <Text>Loading...</Text>}
      <UnorderedList>
        {genres.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
