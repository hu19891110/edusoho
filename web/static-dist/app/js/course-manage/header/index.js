webpackJsonp(["app/js/course-manage/header/index"],[function(e,s,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.publishCourse=void 0;var r=a("b334fd7e4c5a19234db2"),t=n(r),u=s.publishCourse=function(){$("body").on("click",".course-publish-btn",function(e){confirm(Translator.trans(Translator.trans("course.manage.publish_hint")))&&$.post($(e.target).data("url"),function(e){e.success?((0,t.default)("success",Translator.trans("course.manage.publish_success_hint")),location.reload()):(0,t.default)("danger",Translator.trans("course.manage.publish_fail_hint")+":"+e.message,{delay:5e3})})})};u()}]);