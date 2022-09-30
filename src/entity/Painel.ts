import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({name: 'INTEGRACAO_FORNECEDORES',  synchronize: false})
export class Painel {

    @PrimaryColumn({ type: 'varchar' })
    ROTINA: String;

    @Column({ type: 'int' })
    EMPRESA: Number;

    @Column({ type: 'int' })
    FILIAL: Number;

    @Column({ type: 'int' })
    FORNECEDOR: Number;


    @Column({ type: 'int' })
    VALOR_LIQUIDO: Number;

    @Column({ type: 'date' })
    DATA_ARQUIVO: Date;

    @Column({ type: 'int' })
    ENVIADO: Number;

}
