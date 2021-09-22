import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsInt, IsNotEmpty, Min, ValidateNested } from "class-validator"

export class OptimizationDTO {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OptimizationFactory)
    @ApiProperty({ required: true, isArray: true, type: () => OptimizationFactory })
    data: OptimizationFactory[]
}

export class OptimizationFactory {
    @ApiProperty({ required: true })
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    "guid": number

    @ApiProperty({ required: true })
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    "amount": number

    @ApiProperty({ required: true })
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    "productivity": number

    @ApiProperty({ required: true })
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    "totalTpMin": number
}
