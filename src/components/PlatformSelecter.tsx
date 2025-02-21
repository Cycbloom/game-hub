import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}

const PlatformSelecter = ({ onSelectPlatform, selectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  return (
    <>
      {error && <div>{error}</div>}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectPlatform ? selectPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelecter;
