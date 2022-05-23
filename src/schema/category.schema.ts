import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category{
    @Prop({required:true})
    name:string;
    @Prop()
    icon:string;
    @Prop()
    color:string;
    @Prop()
    image:string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);