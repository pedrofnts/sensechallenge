import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class V1INSERTINTOCOUNTRY1667438337906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            INSERT INTO country (id, name, pib, sensedia)
                VALUES ('2f443e85-a643-42aa-88a2-68766cd48850', 'Brasil', '1608988865214', true),
                    ('a6c36438-12bd-41dc-8eb5-82c3eaeaa5b9', 'México', '1293048896472', true),
                    ('4407588b-d0da-4f90-bfb8-7dd806717bd7', 'Estados Unidos', '22996177963251', true),
                    ('ccf7ad03-7d72-466b-a7ee-7c4ffb32a6b3', 'Peru', '223259789951', true),
                    ('a666c07d-7516-42a3-b61b-d8ceb31ba62a', 'Inglaterra', '3186867963014', true),
                    ('3935712b-0ae0-4877-a18c-9d78a33647d7', 'Colombia', '314379943012', true),
                    ('91f4d8cb-1d22-47da-bafa-fa144170f89e', 'China', '17734067796333', false),
                    ('46b17708-2c85-4b5d-af0b-b8b19e829adf', 'Japão', '4937421024983', false),
                    ('c311cfd3-46b8-482f-aa02-b18f6d3d5d7a', 'Catar', '179579996320', false),
                    ('a5241abd-7c9f-4838-a530-b027f4a1f82e', 'Nigéria', '440484445632', false),
                    ('d5f7d287-b76f-4c6f-8cbf-8258748f96b6', 'Austrália', '1542661102349', false),
                    ('5b035bcc-0c97-4a40-b1c5-ec7ff67524c6', 'Portugal', '249897896582', false);
        `)
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("country");
    }

}
