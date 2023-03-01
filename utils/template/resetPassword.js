const forgetPasswordTemplate = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }
        .ReadMsgBody {
            width: 100%;
        }
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass * {
            line-height: 100%;
        }
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <style type="text/css">
        @media only screen and (max-width:480px) {
            @-ms-viewport {
                width: 320px;
            }

            @viewport {
                width: 320px;
            }
        }
    </style>
    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
            }
        }
    </style>
    <style type="text/css">
    </style>

</head>

<body style="background-color: #e5f1f6;padding:20px 0">
    <div style="background-color:#e5f1f6;">
        <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#fff;background-color:#fff;width:100%;">
                <tbody>
                    <tr>
                        <td
                            style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">

                            <div class="mj-column-per-100 outlook-group-fix"
                                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation"
                                                style="border-collapse:collapse;border-spacing:0px;">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:6rem;">
                                                            <img height="auto"
                                                                src="https://res.cloudinary.com/dt6z2mlmw/image/upload/v1677214188/logo_uqfffr.png"
                                                                style="border:0;display:block;outline:none;text-decoration:none;width:100%;" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:30px;line-height:1.5;text-align:center;color: #666666;Margin:15px 5px;">
                                                Reset password of your account
                                            </div>
                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;line-height:1.5;text-align:center;color: #666666;">
                                                your reset password link will expire within 10 minutes
                                            </div>
                                            <br>
                                            <div
                                                style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;line-height:1.5;text-align:center;color: #666666;">
                                                Click the button and reset your password
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center"
                                            style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:25px;word-break:break-word;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                role="presentation"
                                                style="border-collapse:separate;line-height:100%;width:" 10rem">
                                                <tr>
                                                    <td align="center" bgcolor="#2F67F6" role="presentation"
                                                        style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;"
                                                        valign="middle">
                                                        <a href="<%=resetPasswordUrl%>"
                                                            style="background:#2F67F6;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin-top:5px;text-decoration:none;text-transform:none;">
                                                            Reset Password
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr
                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.5;text-align:center;color: #666666;">
                                        <td>
                                            <p style="padding:1rem">If the above button does not work for you, Please
                                                copy and paste the following link into your browser address bar</p>
                                        </td>
                                    </tr>
                                    <tr
                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;line-height:1.5;text-align:center;color: #666666;">
                                        <td><a href="<%=resetPasswordUrl%>"><%=resetPasswordUrl%></a></td>
                                    </tr>
                                    <tr
                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.5;color: #666666;">
                                        <td>
                                        <br/>
                                            <p style="padding-left:1rem;line-height:1.5;margin: 0px">Thank you</p>
                                            <p style="padding-left:1rem;line-height:1.5;margin: 0px;">From logger management</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>`;

const params = {
    resetPasswordUrl: '',
};
module.exports = { forgetPasswordTemplate, params };