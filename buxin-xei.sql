DROP DATABASE IF EXISTS buxinxeidb;
CREATE DATABASE buxinxeidb;

CREATE TABLE "establishments" (
  "id" SERIAL PRIMARY KEY,
  "image_url" text,
  "name" text,
  "address_id" int UNIQUE,
  "phone" int,
  "category_id" int,
  "delivery" boolean,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" text
);

CREATE TABLE "address" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "number" int,
  "city" text
);

ALTER TABLE "establishments" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "establishments" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
