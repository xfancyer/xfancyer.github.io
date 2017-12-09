## 参考：
http://www.runoob.com/jquery/jquery-plugin-validate.html

---

```
<test1.html>
1. 验证、默认提交方式

<test2.html>
1. 验证完整表格、错误提醒方式、规则
$("#signupForm").validate({
	    rules: {...},
        message:{...},


<test3.html>
1. 错误信息显示的位置
errorPlacement: function(error, element) {
        // Append error within linked label
        $( element )
            .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                    .append( error );
    },
    errorElement: "span",
}

```

## 常用方法及注意问题：

## 1、用其他方式替代默认的 SUBMIT
$().ready(function() {
 $("#signupForm").validate({
        submitHandler:function(form){
            alert("提交事件!");   
            form.submit();
        }    
    });
});

#### 使用 ajax 方式
 $(".selector").validate({     
 submitHandler: function(form) 
   {      
      $(form).ajaxSubmit();     
   }  
 }) 

#### 可以设置 validate 的默认值，写法如下：
$.validator.setDefaults({
  submitHandler: function(form) { alert("提交事件!");form.submit(); }
});

## 2、debug，只验证不提交表单
如果这个参数为true，那么表单不会提交，只进行检查，调试时十分方便。
$().ready(function() {
 $("#signupForm").validate({
        debug:true
    });
});
如果一个页面中有多个表单都想设置成为 debug，则使用：
$.validator.setDefaults({
   debug: true
})

## 3、ignore：忽略某些元素不验证
ignore: ".ignore"

## 4、更改错误信息显示的位置
errorPlacement：Callback
指明错误放置的位置，默认情况是：error.appendTo(element.parent());即把错误信息放在验证的元素后面。
errorPlacement: function(error, element) {  
    error.appendTo(element.parent());  
}

## 5、更改错误信息显示的样式
设置错误提示的样式，可以增加图标显示，在该系统中已经建立了一个 validation.css，专门用于维护校验文件的样式。
input.error { border: 1px solid red; }
label.error {
  background:url("./demo/images/unchecked.gif") no-repeat 0px 0px;

  padding-left: 16px;

  padding-bottom: 2px;

  font-weight: bold;

  color: #EA5200;
}
label.checked {
  background:url("./demo/images/checked.gif") no-repeat 0px 0px;
}

## 6、每个字段验证通过执行函数
success：String,Callback
要验证的元素通过验证后的动作，如果跟一个字符串，会当作一个 css 类，也可跟一个函数。
success: function(label) {
    // set &nbsp; as text for IE
    label.html("&nbsp;").addClass("checked");
    //label.addClass("valid").text("Ok!")
}
添加 "valid" 到验证元素，在 CSS 中定义的样式 <style>label.valid {}</style>。
success: "valid"

## 7、验证的触发方式修改
下面的虽然是 boolean 型的，但建议除非要改为 false，否则别乱添加。
触发方式	类型	描述	默认值
onsubmit	Boolean	提交时验证。设置为 false 就用其他方法去验证。	true
onfocusout	Boolean	失去焦点时验证（不包括复选框/单选按钮）。	true
onkeyup	Boolean	在 keyup 时验证。	true
onclick	Boolean	在点击复选框和单选按钮时验证。	true
focusInvalid	Boolean	提交表单后，未通过验证的表单（第一个或提交之前获得焦点的未通过验证的表单）会获得焦点。	true
focusCleanup	Boolean	如果是 true 那么当未通过验证的元素获得焦点时，移除错误提示。避免和 focusInvalid 一起用。	false
// 重置表单
$().ready(function() {
 var validator = $("#signupForm").validate({
        submitHandler:function(form){
            alert("submitted");   
            form.submit();
        }    
    });
    $("#reset").click(function() {
        validator.resetForm();
    });

});

## 8、异步验证
remote：URL
使用 ajax 方式进行验证，默认会提交当前验证的值到远程地址，如果需要提交其他的值，可以使用 data 选项。
remote: "check-email.php"
remote: {
    url: "check-email.php",     //后台处理程序
    type: "post",               //数据发送方式
    dataType: "json",           //接受数据格式   
    data: {                     //要传递的数据
        username: function() {
            return $("#username").val();
        }
    }
}
远程地址只能输出 "true" 或 "false"，不能有其他输出

## 9、添加自定义校验
addMethod：name, method, message
自定义验证方法
// 中文字两个字节
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for(var i = 0; i < value.length; i++){
        if(value.charCodeAt(i) > 127){
            length++;
        }
    }
  return this.optional(element) || ( length >= param[0] && length <= param[1] );   
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));

// 邮政编码验证   
jQuery.validator.addMethod("isZipCode", function(value, element) {   
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");
注意：要在 additional-methods.js 文件中添加或者在 jquery.validate.js 文件中添加。建议一般写在 additional-methods.js 文件中。
注意：在 messages_cn.js 文件中添加：isZipCode: "只能包括中文字、英文字母、数字和下划线"。调用前要添加对 additional-methods.js 文件的引用。

## 10、radio 和 checkbox、select 的验证
radio 的 required 表示必须选中一个。
<input  type="radio" id="gender_male" value="m" name="gender" required />
<input  type="radio" id="gender_female" value="f" name="gender"/>

checkbox 的 required 表示必须选中。
<input type="checkbox" class="checkbox" id="agree" name="agree" required />

checkbox 的 minlength 表示必须选中的最小个数，maxlength 表示最大的选中个数，rangelength:[2,3] 表示选中个数区间。
<input type="checkbox" class="checkbox" id="spam_email" value="email" name="spam[]" required minlength="2" />
<input type="checkbox" class="checkbox" id="spam_phone" value="phone" name="spam[]" />
<input type="checkbox" class="checkbox" id="spam_mail" value="mail" name="spam[]" />

select 的 required 表示选中的 value 不能为空。
<select id="jungle" name="jungle" title="Please select something!" required>
    <option value=""></option>
    <option value="1">Buga</option>
    <option value="2">Baga</option>
    <option value="3">Oi</option>
</select>

select 的 minlength 表示选中的最小个数（可多选的 select），maxlength 表示最大的选中个数，rangelength:[2,3] 表示选中个数区间。
<select id="fruit" name="fruit" title="Please select at least two fruits" class="{required:true, minlength:2}" multiple="multiple">
    <option value="b">Banana</option>
    <option value="a">Apple</option>
    <option value="p">Peach</option>
    <option value="t">Turtle</option>
</select>

