import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class DateScalar implements CustomScalar<string, string> {
    description: string;
    parseValue(value: string): string;
    serialize(value: unknown): string;
    parseLiteral(ast: ValueNode): string;
}
