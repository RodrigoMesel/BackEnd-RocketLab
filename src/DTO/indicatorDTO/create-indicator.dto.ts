import { IsEnum, IsOptional } from "class-validator";
import Unity from "src/Enums/unity.enum";

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
