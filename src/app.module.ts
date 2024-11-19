import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
      ConfigModule.forRoot({
        load: [ EnvConfiguration ],
        validationSchema: JoiValidationSchema,
      }), //Agregar al inicio del Imports[]
      ServeStaticModule.forRoot({ 
        rootPath: join(__dirname,'..','public'), 
      }), 

      MongooseModule.forRoot(process.env.MONGODB,  {
        dbName: 'pokemonsdb'
      }),
      PokemonModule,
      CommonModule,
      SeedModule,
  ],
  controllers: [],
})
export class AppModule { }