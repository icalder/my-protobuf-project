// import { assertEquals } from "jsr:@std/assert";
import { create } from "@bufbuild/protobuf";
import {
  AccountSchema,
  ProductSchema,
  ServiceSchema,
  ServiceStatus,
} from "./main.ts";

Deno.test("can create an Account", () => {
  const account = create(AccountSchema, {
    accountId: "d43a67dc-7e7a-4aa8-8737-7ac56d81824e",
    displayName: "Customer #1",
    email: "cust1@example.com",
  });
  console.log(account);
});

Deno.test("can create a Product", () => {
  const product = create(ProductSchema, {
    productId: "d43a67dc-7e7a-4aa8-8737-7ac56d8182",
    name: "Basic Email",
    description: "Includes 3 standard mailboxes",
    sku: "email-basic",
    price: 599,
  });
  console.log(product);
});

Deno.test("can create a Service", () => {
  const service = create(ServiceSchema, {
    serviceId: "0f74b333-1e3f-4957-af87-86ea35bd1ee1",
    serviceName: "my-basic-email",
    status: ServiceStatus.RUNNING,
  });
  console.log(service);
});
