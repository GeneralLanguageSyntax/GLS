module GLS.Languages {
    export var TypeScript: Language = new GLS.Language()
        .setName("TypeScript")
        .setExtension("ts")
        .setPrintFunction("console.log")
        .setSemiColon(";")
        .setClassConstructorName("constructor")
        .setClassEnder("}")
        .setClassExtends("extends")
        .setClassFunctionsTakeThis(false)
        .setClassFunctionsStart("")
        .setClassMemberVariableDefault("")
        .setClassMemberVariablePrivacy(true)
        .setClassMemberVariableStarter("")
        .setClassNewer("new ")
        .setClassPrivacy(true)
        .setClassStartLeft("class ")
        .setClassStartRight(" {")
        .setClassTemplates(true)
        .setClassTemplatesBetween(", ")
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
        .setToString("")
        .setRangedForLoops(false)
        .setVariableTypesExplicit(true)
        .setVariableTypesAfterName(true)
        .setVariableTypeMarker(": ")
        .setVariableDeclareStart("var ")
        .addTypeAlias("number", "int")
        .addTypeAlias("number", "double")
        .addTypeAlias("number", "float");
}