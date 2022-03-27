import React from 'react'
import Body from '../components/Body'
import Container from '../components/Container'
import Text from '../components/Text';

export default function Info() {
  return (
    <Container padding="100px 0">
      <Body size="180%">
        <Text bold>Minds.so</Text>

        <Text>
          is a web app where people could write their words like quotes and
          export them as beautiful images so they feel like a motivation post or
          a piece of word from a book.
        </Text>
      </Body>
    </Container>
  );
}
