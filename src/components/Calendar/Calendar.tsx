import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  LinkBox,
  Table,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { FC } from "react";
import { months } from "./consts";
import { generateMatrix } from "./utils";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  //param: string;
  date: Date;
};

const Calendar: FC<Props> = ({ date = new Date() }: { date: Date }) => {
  const [activeDate, setActiveDate] = useState(date);

  useEffect(() => {
    if (activeDate != date) {
      setActiveDate(date);
    }
  }, [date]);

  const _onPress = (item: number) => {
    if (typeof item !== "string" && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  const matrix = generateMatrix(activeDate);

  let rows = [];

  rows = matrix.map((row) => {
    let rowItems = row.map((item: any) => {
      return (
        <Box
          w="72px"
          h="52px"
          position="relative"
          border="0.1px solid #F4F4F4"
          bg={item == activeDate.getDate() ? "#A170DB" : "white"}
          color={item == activeDate.getDate() ? "#FFFFFF" : "#707070"}
        >
          <Text position="absolute" right="7px" bottom="4px" fontSize="20px">
            {item != -1 ? `${item}.` : ""}
          </Text>
        </Box>
      );
    });

    return (
      <Box
        w="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        boxSizing="border-box"
      >
        {rowItems}
      </Box>
    );
  });

  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  return (
    <Box
      w="504px"
      bg="white"
      h="390px"
      borderRadius="13px"
      boxShadow="0 0 99px 0px rgba(0, 0, 0, 0.04)"
      mb="10"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        h="100%"
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
      >
        <Box h="100%" w="100%" display="flex" alignItems="center">
          <Text marginLeft="31px" fontFamily="Avenir Heavy">{`${
            months[activeDate.getMonth()]
          }`}</Text>
          <Text marginLeft="5px">{`${activeDate.getFullYear()}`}</Text>
        </Box>
        <Box display="flex" alignItems="center" marginRight="22px">
          <IconButton
            aria-label="Previous Day"
            colorScheme="purple"
            isRound
            size="xs"
            fontSize="15px"
            icon={<MdArrowBackIos />}
          ></IconButton>
          <Text margin="22px" fontFamily="Avenir Medium" color="#8C5EC3">
            Today
          </Text>
          <IconButton
            aria-label="Next Day"
            colorScheme="purple"
            isRound
            size="xs"
            fontSize="15px"
            icon={<MdArrowForwardIos />}
          ></IconButton>
        </Box>
      </Box>
      <Box w="100%" display="flex" flexDirection="column" bottom="0px">
        <Box>{rows}</Box>
      </Box>
    </Box>
  );
};

export default Calendar;
