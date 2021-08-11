import { IsNotEmpty } from "class-validator";

export class UpdateBookDto {
  @IsNotEmpty()
  bookId: number;
  name: string;
  price: number;
}
