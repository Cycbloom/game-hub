import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card width={300} borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText height="20px" width="80%" marginBottom={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
