import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
    @Prop({
        unique: true,// ->Nombre unico
        index: true,// ->Tiene indice
    })
    name: string; 

    @Prop({
        unique: true,// ->Nombre unico
        index: true,// ->Tiene indice
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );