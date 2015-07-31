module GLS.Languages {
    export var TypeScript: Language = new GLS.Language()
        .setName("TypeScript")
        .setExtension("ts")
        .setPrintFunction("console.log")
        .setSemiColon(";")
        .setClassConstructorName("constructor")
        .setClassEnder("}")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsStart("")
        .setClassMemberVariableDefault("")
        .setClassMemberVariablePrivacy(true)
        .setClassNewer("new ")
        .setClassPrivacy(true)
        .setClassStartLeft("class ")
        .setClassStartRight(" {")
        .setClassThis("this")
        .setClassThisAccess(".")
        .setCommentorBlockStart("/*")
        .setCommentorBlockEnd("*/")
        .setCommentorInline("//")
        .setConditionStartLeft(" (")
        .setConditionStartRight(") {")
        .setConditionContinueLeft("} ")
        .setConditionContinueRight(" {")
        .setConditionEnd("}")
        .setFileEndLine("}")
        .setFileStartLeft("module ")
        .setFileStartRight(" {")
        .setFunctionDefine("function ")
        .setFunctionDefineRight(" {")
        .setFunctionDefineEnd("}")
        .setFunctionReturnsExplicit(true)
        .setFunctionTypeMarker(": ")
        .setFunctionTypeAfterName(true)
        .setMainEndLine("}")
        .setMainStartLine("export function Main(): void {")
        .setRangedForLoops(false)
        .setVariableTypesExplicit(true)
        .setVariableTypesAfterName(true)
        .setVariableTypeMarker(": ")
        .setVariableDeclareStart("var ")
        .addTypeAlias("number", "int")
        .addTypeAlias("number", "double")
        .addTypeAlias("number", "float");
}