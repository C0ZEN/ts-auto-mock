import * as ts from 'typescript';
import { TypeChecker } from "../../typeChecker/typeChecker";
import { GetMockProperties } from "../mock/mockProperties";

export function GetClassDeclarationDescriptor(node: ts.ClassDeclaration): ts.Expression {
    const typeChecker = TypeChecker();
    const type = typeChecker.getTypeAtLocation(node);

    let properties: Array<ts.Symbol> = typeChecker.getPropertiesOfType(type);

    return GetMockProperties(properties);
}