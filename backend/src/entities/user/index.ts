import { UserData } from "../../types/UserData";
import { Either, left, right } from "../../shared";
import { InvalidEmailError, InvalidNameError } from "../errors";
import { Name } from "../../types/Name";
import { Email } from "../../types/Email";

export class User {
  private id: string;
  private type: "ong" | "helper";
  private name: Name;
  private email: Email;
  private password: string; // adicionar type Password com validações
  private phoneNumber: string; // adicionar type PhoneNumber com validações
  private city: string; // adicionar type Description com validações
  private uf: string; // adicionar type Description com validações

  private constructor(
    id: string,
    type: "ong" | "helper",
    name: Name,
    email: Email,
    password: string,
    phoneNumber: string,
    city: string,
    uf: string
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.uf = uf;
  }

  public static create(
    userData: UserData
  ): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(userData.name);
    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const emailOrError = Email.create(userData.email);
    if (emailOrError.isLeft()) {
      return left(emailOrError.value);
    }

    const name: Name = nameOrError.value as Name;
    const email: Email = emailOrError.value as Email;

    const id = userData.id;
    const type = userData.type;
    const password = userData.password;
    const phoneNumber = userData.phoneNumber;
    const city = userData.city;
    const uf = userData.uf;

    return right(
      new User(id, type, name, email, password, phoneNumber, city, uf)
    );
  }
}
