import { IsEnum, IsOptional } from "class-validator";
import { Unity } from '@prisma/client'

export class CreateIndicatorDto {
    name: string;
    weight: number;

    @IsEnum(Unity)
    unity: Unity;
    
    goal: string;
    superGoal: string;
    challenge: string;

    @IsOptional()
    result: string;
}
