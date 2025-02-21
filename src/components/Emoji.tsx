interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: string } = {
    0: "😡",
    1: "😡",
    2: "😢",
    3: "😐",
    4: "😊",
    5: "😍",
  };
  if (rating < 3 || rating > 5) {
    return;
  }
  return <span>{emojiMap[rating] || ""}</span>;
};

export default Emoji;
