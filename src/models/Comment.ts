import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @Column({ name: 'author_id' })
    authorId!: number;

    @Column({ name: 'news_id' })
    newsId!: number;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;
}
