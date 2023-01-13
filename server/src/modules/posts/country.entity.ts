import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Country extends Model<Country> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  longitude: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  latitude: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  flag: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;
}
