var GLS;
(function (GLS) {
    var Languages;
    (function (Languages) {
        Languages.Ruby = new GLS.Language().setName("Ruby").setExtension("rb").setPrintFunction("puts").setSemiColon("").setClassConstructorAsStatic(true).setClassConstructorName("def initialize").setClassEnder("end").setClassFunctionsStart("def ").setClassFunctionsTakeThis(false).setClassFunctionsThis("").setClassMemberVariableDefault("").setClassMemberVariablePrivacy(false).setClassMemberVariableStarter("@").setClassNewer("new").setClassPrivacy(false).setClassStartLeft("class ").setClassStartRight("").setClassThis("@").setClassThisAccess("").setCommentorBlockStart("=begin").setCommentorBlockEnd("=end").setCommentorInline("#").setConditionStartLeft(" ").setConditionStartRight("").setConditionContinueLeft(" ").setConditionContinueRight("").setConditionEnd("end").setFileEndLine("").setFileStartLeft("").setFileStartRight("").setFunctionDefine("def ").setFunctionDefineRight("").setFunctionDefineEnd("end").setMainEndLine("end").setMainStartLine("if __FILE__ == $PROGRAM_NAME").setToString("").setRangedForLoops(true).setFunctionReturnsExplicit(false).setVariableTypesExplicit(false).setVariableDeclareStart("").addValueAlias("False", "false").addValueAlias("True", "true");
    })(Languages = GLS.Languages || (GLS.Languages = {}));
})(GLS || (GLS = {}));
