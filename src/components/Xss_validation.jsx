import { Box, Button, Card, Container, Heading, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";

const Xss_validation = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = ()=>{}


  return (
    <Container maxWidth={"320px"}>
      <Heading>Login</Heading>
      <Card as="form" onSubmit={handleSubmit} gap="4" width="200px">
        <Box>
          <Text as="label" size="2" weight="bold">
            Username:
          </Text>
          <TextField.Root
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </Box>

        <Box>
          <Text as="label" size="2" weight="bold">
            Password:
          </Text>
          <TextField.Root
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Box>

        {error && (
          <Text as="div" color="red" size="2">
            {error}
          </Text>
        )}

        <Button type="submit" variant="soft" color="blue" m={"1"}>
          Login
        </Button>
      </Card>
    </Container>
  );
};

export default Xss_validation;
