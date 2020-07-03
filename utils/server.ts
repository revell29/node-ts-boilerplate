import express, { Application } from "express";
import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "../routes";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

export default class Server {
  private application: Application;
  private port: number | string;

  constructor() {
    this.port = process.env.PORT || 3005;
    this.application = express();
    this.plugins();
    this.routes();
  }

  private plugins(): void {
    dotenv.config();
    this.application.use(cors());
    this.application.use(express.urlencoded({ extended: true }));
    this.application.use(express.json());
    this.application.use(morgan("common"));
    this.application.use(helmet());
  }

  private routes(): void {
    this.application.use(router);
  }

  public run(): void {
    this.application.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
