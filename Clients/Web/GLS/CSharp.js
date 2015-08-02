var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.CSharp = new GLS.Language().setName("CSharp").setExtension("cs").setPrintFunction("System.Console.WriteLine").setSemiColon(";").setClassConstructorName("").setClassConstructorInheritedName("base").setClassConstructorInheritedShorthand(true).setClassEnder("};").setClassExtends("extends").setClassFunctionsTakeThis(false).setClassFunctionsStart("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(true).setClassMemberVariableStarter("").setClassNewer("new ").setClassPrivacy(true).setClassStartLeft("class ").setClassStartRight(" {").setClassTemplates(true).setClassTemplatesBetween(", ").setClassThis("this").setClassThisAccess(".").setCommentorBlockStart("/*").setCommentorBlockEnd("*/").setCommentorInline("//").setConditionStartLeft(" (").setConditionStartRight(") {").setConditionContinueLeft("} ").setConditionContinueRight(" {").setConditionEnd("}").setFileEndLine("}").setFileStartLeft("public class ").setFileStartRight(" {").setFunctionDefine("").setFunctionDefineRight(" {").setFunctionDefineEnd("}").setFunctionReturnsExplicit(true).setFunctionTypeAfterName(false).setMainEndLine("}").setMainStartLine("public static void Main() {").setToString(".ToString()").setRangedForLoops(false).setVariableDeclareStart("").setVariableTypesExplicit(true).setVariableTypesAfterName(false).addTypeAlias("int", "number").addTypeAlias("bool", "boolean");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
