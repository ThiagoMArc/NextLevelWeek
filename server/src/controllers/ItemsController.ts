import knex from "../database/connection";
import { Request, Response } from "express";

class ItemsController {
  async index(request: Request, response: Response) {
    const totalItems = await knex("items").select("*");
    const items = totalItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });
    return response.json(items);
  }
}

export default ItemsController;
