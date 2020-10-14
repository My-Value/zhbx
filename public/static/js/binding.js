// 
var yzmcode = false;
// flag是发送验证码的标识，为true才会发送
var flag = false;
// pn指的就是手机号的input
var pn = document.getElementById("phone-number");
// username值学籍号的input
var username = document.getElementById("username");
// parentn值家长的input
var parentn = document.getElementById("parentname");
// console.log(mobile_code);
var sendphone = ''
// check()为form表单进行校验，学籍号和手机号没有输入时不可以进行提交的
function check() {
    // username,usernameMsg 为学生学籍号的input的值
    var username = document.getElementById("username");
    var usernameMsg = document.getElementById("usernameMsg");
    // parentn,parentnameMsg 为家长姓名的input的值
    var parentn = document.getElementById("parentname").value;
    var parentnameMsg = document.getElementById("parentnameMsg");
    // pn,pnumberMsg 为手机号的input的值
    var pn = document.getElementById("phone-number").value;
    var pnumberMsg = document.getElementById("pnumberMsg");
    // mobile_code,codeMsg 为验证码的input的值
    var mobile_code = document.getElementById("mobile_code").value.length;
    var codeMsg = document.getElementById("codeMsg");
    var mobilevalue = document.getElementById("mobile_code").value

    var length = username.value.length;

    // 全局变量，如果isPass为false就不能点击确定，进行绑定学生
    var isPass = true;
    // 复选框，用户协议
    var checkbox = document.getElementById("checkbox").checked;
    // 接收错误的信息
    var returnMsg = document.getElementById("returnMsg");
    (function () {
        // 校验学籍号
        if (length != 19) {
            usernameMsg.innerText = "学籍号长度必须是19位";
            isPass = false;
        } else {
            usernameMsg.innerText = "";
        }

        if (pn.length == 0) {
            pnumberMsg.innerText = "手机号不能为空";
            isPass = false;
        }
        // 校验姓名
        if (!(/^[\u4e00-\u9fa5]{2,4}$/.test(parentn))) {
            parentnameMsg.innerText = "姓名格式错误";
            isPass = false;
        } else {
            pnumberMsg.innerText = "";
        }

        // 校验手机号
        if (pn.length != 0) {
            var strarr = sendphone.split(",");
            console.log("这是校验获取的手机号" + strarr);
            for (let i = 0; i < strarr.length; i++) {
                if(pn!= strarr[i]) {
                    pnumberMsg.innerText = "请输入有效手机号";
                    isPass = false;
                }
                else {
                    pnumberMsg.innerText = "";
                    break;
                }
            }
        }else{
            pnumberMsg.innerText = "请输入手机号";
        }

        // 提交输入的数据(验证码状态trueAndfalse)
        if (isPass && mobile_code == 6) {
            let chooseflag=0;
            console.log(username.value + parentn + pn + mobilevalue);
            
            // $.ajax({
            //     type: "POST",
            //     dataType: "json",
            //     url: "deleteParStu",
            //     data: {
            //         studentNum:username.value,
            //         parentName:parentn,
            //         sjNum:pn,
            //         yzmNum:mobilevalue
            //     },
            //     success: function (msg) {
            // if (!msg) {
            // console.log(msg);
            // yzmcode=msg.status; 
            // returnMsg.innerHTML=msg.
            // choose=msg.
            // }
            // if (msg.status) {
            //     window.location.href='student';
            //     }
            // }
            //        
            //     error: function (XMLHttpRequest, textStatus, errorThrown) {
            //         console.log(XMLHttpRequest.status);
            //         consoletrue.log(XMLHttpRequest.readyState);
            //         console.log(textStatus);
            //     }
            // });
            
            
            if (mobilevalue == 123456) {
                yzmcode = true;
                alert("绑定成功");
               
        //     switch(chooseflag) {
        //         case 1:
        //            break;
        //         case 2:
        //             alert("绑定人数已达到上线")
        //            break;
        //         case 3:
        //             alert("绑定错误");
        //            break;
        //         default:
        //    } 
        }
        }

        // if (yzmcode) {
        //     codeMsg.innerText = "";
        // }else {
        //     codeMsg.innerText = "验证码错误";
        //     isPass = false;
        // }
        
        if (mobile_code != 6) {
            codeMsg.innerText = "验证码位数错误";
            isPass = false;
        }

        if (checkbox != true) {
            alert('请先阅读并同意《用户协议》');
            isPass = false;
        }
        // alert(isPass);
    })();
    return isPass;
}
// 当学籍号的input失去焦点是会触发该函数，进行学籍号的校验
function checkUserName(uesrname) {
    var usernameMsg = document.getElementById("usernameMsg");
    var length = username.value.length;
    if (length != 19) {
        usernameMsg.innerText = "学籍号长度必须是19位";
    } else {
        usernameMsg.innerText = "";
        sendphone = '18839533791,18876549908'
        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         studentn: username.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });
    }
}

// 当学籍号的input失去焦点是会触发该函数，进行姓名的校验
function isName(parentname) {
    var parentnameMsg = document.getElementById("parentnameMsg");
    var pname = parentn.value;
    console.log(pname);
    if (!(/^[\u4e00-\u9fa5]{2,4}$/.test(pname))) {
        parentnameMsg.innerText = "姓名格式错误";
    } else {
        parentnameMsg.innerText = "";
        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         parentname: parentn.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });
    }
}
// 当手机号的input失去焦点是会触发该函数，进行手机号的校验
function Phonenumber(phones) {
    var pnumberMsg = document.getElementById('pnumberMsg');
    // var length = phones.value.length;
    var strArr = sendphone.split(",");
    console.log(strArr);
    var phone = phones.value;
    console.log(strArr);
    console.log(sendphone);
    for (let i = 0; i < strArr.length; i++) {

        var a=strArr.indexOf(phone)
        console.log(a);
        if (a!=-1) {
            pnumberMsg.innerText = "";
             // $.ajax({
            //     type: "POST",
            //     dataType: "json",
            //     url: "data.php",
            //     data: {
            //         sjh: pn.value
            //     },
            //     success: function (msg) {
            //         console.log(msg);
            //     },
            //     error: function (XMLHttpRequest, textStatus, errorThrown) {
            //         console.log(XMLHttpRequest.status);
            //         console.log(XMLHttpRequest.readyState);
            //         console.log(textStatus);
            //     }
            // });
        }else{
            pnumberMsg.innerText = "请输入有效手机号";
            flag = false;
        }
        
    }
}
// 发送验证码的值
// function yzmNumber(yzmn) {

// }
// 以下是发送验证码的功能
var codeMsg = document.getElementById("codeMsg");
var counts = 60;
var btn = document.getElementById("btn")
var pnlength = document.getElementById("phone-number").value.length;
var usernameMsg = document.getElementById("usernameMsg");
function settime(val) {
    if (counts == 60 && flag) {
        // console.log(val);
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "data.php",
            data: {
                sjh: pn.value
            },
            success: function (msg) {
                console.log(msg);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        });
    }

    if (flag == true) {
        // console.log(pn.value);
        if (counts == 0) {
            btn.style.backgroundColor = "#3FD1AD"
            val.removeAttribute("disabled");
            val.value = "发送验证码";
            counts = 60;
            return false;
        } else {
            btn.style.backgroundColor = "#E5E5E5"
            btn.style.color="black"
            
            val.setAttribute("disabled", true);
            val.value = "重新发送(" + counts + ")";
            counts--;
            if (counts==0) {
                // console.log(1212121212);
                codeMsg.innerHTML="";
            }
        }
        setTimeout(function () {
            settime(val);
        }, 1000);
        // console.log(val);
    } else if (pnlength == 0) {
        pnumberMsg.innerText = "请输入手机号";
    }
}