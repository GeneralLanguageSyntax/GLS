var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.TypeScript = new GLS.Language().setName("TypeScript").setExtension("ts").setPrintFunction("console.log").setSemiColon(";").setArrayClass("").setArrayLength(".length").setClassConstructorName("constructor").setClassEnder("}").setClassExtends("extends").setClassFunctionsTakeThis(false).setClassFunctionsStart("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(true).setClassMemberVariableStarter("").setClassNewer("new ").setClassParentName("super").setClassPrivacy(true).setClassStartLeft("class ").setClassStartRight(" {").setClassTemplates(true).setClassTemplatesBetween(", ").setClassThis("this").setClassThisAccess(".").setCommentorBlockStart("/*").setCommentorBlockEnd("*/").setCommentorInline("//").setConditionStartLeft(" (").setConditionStartRight(") {").setConditionContinueLeft("} ").setConditionContinueRight(" {").setConditionEnd("}").setFileEndLine("}").setFileStartLeft("module ").setFileStartRight(" {").setFunctionDefine("function ").setFunctionDefineRight(" {").setFunctionDefineEnd("}").setFunctionReturnsExplicit(true).setFunctionTypeMarker(": ").setFunctionTypeAfterName(true).setMainEndLine("}").setMainStartLine("export function Main(): void {").setToString("").setRangedForLoops(false).setVariableTypesExplicit(true).setVariableTypesAfterName(true).setVariableTypeMarker(": ").setVariableDeclareStart("var ").addTypeAlias("number", "int").addTypeAlias("number", "double").addTypeAlias("number", "float");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
