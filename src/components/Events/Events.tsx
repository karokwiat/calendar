import { Box } from '@chakra-ui/react';
import type { FC } from 'react';
import EventAdd from './EventAdd';
import EventItem from './EventItem';

type Props = {
  param?: string;
};

const Events: FC<Props> = () => {
  return (
    <Box>
      <EventAdd />
      <EventItem />
      <EventItem />
    </Box>
  );
};

export default Events;
