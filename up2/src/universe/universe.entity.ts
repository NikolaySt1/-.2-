import { Hero } from "src/hero/hero.entity";
import { Entity, OneToMany, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Universe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:500, select:true})
    name: string;


    @OneToMany(() => Hero, (hero) => hero.universe)
    heroes: Hero[];
}