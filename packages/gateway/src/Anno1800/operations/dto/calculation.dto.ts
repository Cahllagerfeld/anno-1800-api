import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, Min } from "class-validator"

export class CalculationDTO {

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000000: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000001: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000002: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000004: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000005: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000006: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    601379: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    112642: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    112643: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    114329: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    114330: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    118745: number

    @Min(0)
    @IsOptional()
    @IsInt()
    @ApiProperty({ required: false })
    15000003: number
}
