export class CreateUserDto {
  readonly userId: string;
  readonly password: string;
  readonly authorityId: number;
}
