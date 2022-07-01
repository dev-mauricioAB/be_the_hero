import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import OngController from "./controllers/OngController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

export const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      password: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);

routes.post("/incidents", IncidentController.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);
