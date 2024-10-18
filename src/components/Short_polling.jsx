import { Button, Container, DropdownMenu } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { fetchData } from "../services/dropdown.service";

const Short_polling = () => {
  const [getCountries, setGetCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (country) => {
    setSelectedCountry(country);
  };

  const getData = async () => {
    try {
      const result = await fetchData("/get");

      console.log(result);

      setGetCountries(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    //intially fetch the data
    getData();

    //setup polling with every 10-s interval
    const pollingInterval = setInterval(() => {
      getData();
    }, 10000);

    return () => clearInterval(pollingInterval);
  }, []);
  return (
    <div>
      <Container>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              {selectedCountry ? selectedCountry.name : "Select a Country"}
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="soft">
            {/* Check if getCountries has data */}
            {getCountries.length > 0 ? (
              getCountries.map((country, index) => (
                <DropdownMenu.Item
                  key={index}
                  onClick={() => handleChange(country)}
                >
                  {country.name}
                </DropdownMenu.Item>
              ))
            ) : (
              <DropdownMenu.Item disabled>
                No countries available
              </DropdownMenu.Item>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Container>
    </div>
  );
};

export default Short_polling;
