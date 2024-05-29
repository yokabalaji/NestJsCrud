<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
=======
import { Report } from 'src/reports/entity/report.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> 774d025 (queary selector)

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
<<<<<<< HEAD
=======

  @Column({ default: true })
  admin: boolean;

  @Column({ default: 'token' })
  rToken: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
>>>>>>> 774d025 (queary selector)
}
