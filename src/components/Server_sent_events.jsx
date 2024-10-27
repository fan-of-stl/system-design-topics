import { Box, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const Server_sent_events = () => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/events");

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);

      console.log(newMessage);
      

      setMessage(newMessage);
    };

    eventSource.onerror = (error) => {
      console.error("Error in SSE:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <Container>
      <Heading>Server Sent Event</Heading>

      <Box maxWidth="240px">
        <Card>
          <Flex gap="3" align="center">
            <Box>
              {message && (
                <>
                  <Text as="div" size="2" weight="bold">
                    Message: {message.message}
                  </Text>
                  <Text as="div" size="2">
                    Random Number: {message.randomNumber}
                  </Text>
                </>
              )}
            </Box>
          </Flex>
        </Card>
      </Box>
    </Container>
  );
};

export default Server_sent_events;
