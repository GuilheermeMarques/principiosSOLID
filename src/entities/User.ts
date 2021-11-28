import { v4 as uuidv4 } from 'uuid'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //Utilizado para criar essa nova entidade de user
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}