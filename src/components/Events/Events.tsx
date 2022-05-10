import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Text,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { DefaultTheme } from '../../assets/styles/theme';
import { MdAdd } from 'react-icons/md';
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
