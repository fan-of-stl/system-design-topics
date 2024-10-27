import { Table } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { fetchData } from "../services/dropdown.service";

const Short_polling = () => {
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    try {
      const result = await fetchData("/orders/get");

      console.log(result);

      setOrders(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    //intially update the data
    getData();

    const pollingInterval = setInterval(() => {
      getData();
    }, 10000);

    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>S.No.</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Customer</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Timestamp</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {orders?.map((order, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{order.customer}</Table.RowHeaderCell>
            <Table.Cell>{order.product}</Table.Cell>
            <Table.Cell>{order.status[0]}</Table.Cell>
            <Table.Cell>{order.timestamp}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Short_polling;
