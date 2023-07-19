import React from 'react';
import { Center, Container, Heading, Text } from 'native-base';

export default function DashboardScreen() {
  return (
    <Center>
      <Container>
        <Heading>
          Dashboard
          <Text color="emerald.500"> Dashboard Screen</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that gives you building
          blocks to build you React applications.
        </Text>
      </Container>
    </Center>
  );
}
