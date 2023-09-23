import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('v-foods')
    .setDescription(
      'API da v-foods feita para o projeto do RocketLab DEV/UX da Visagio',
    )
    .setVersion('1.0')
    .addTag('colaborator', 'Colaboradores')
    .addTag('indicator', 'Indicadores')
    .addTag('colaborator-indicator', 'Relação Colaborador-Indicador')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
