import React from 'react';
import { Center, Container, Heading, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <Center>
      <Container>
        <Heading>
          Home
          <Text color="emerald.500"> Home Screen</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that gives you building
          blocks to build you React applications.
        </Text>
        <AntDesign name="user" style={{ fontSize: 50 }} />
      </Container>
    </Center>
  );
}
