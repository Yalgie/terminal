$(function() {
    var currentYear = new Date().getFullYear();
    $('.this_year').html(currentYear);
});

$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find(".typing");
    var $cmdPrefix = $terminal.find(".cmdPrefix");
    var $text = $terminal.find(".text");
    var valid = true;
    var user = false;
    var pass = false;
    var contentDelay = 2600;
    
    var daveData = (function () {
        var daveData = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "http://tw.dave/js/whathappenedtodave.json", // Don't forget to change this to updated URL once pushed to live
            'dataType': "json",
            'success': function (data) {
                daveData = data;
            }
        });
        return daveData;
    })();
    
    function renderLines(daveData) {
        var iCount = 0;
        
        function renderText(daveData) {
            $text.append(daveData[iCount])

            if (iCount < daveData.length) {
                setTimeout(function(){
                    iCount++;
                    renderText(daveData);
                    $terminal.scrollTop($terminal[0].scrollHeight);
                }, 200);
            } else {
                bindTerminalEvents();
                $cmd.focus();
            };
            
            $terminal.scrollTop($terminal[0].scrollHeight);
        }
        
        if (valid) {
            setTimeout(function(){renderText(daveData);}, 3300);
        } else {
            setTimeout(function(){renderText(daveData);}, contentDelay);
        }
    };

    function init(daveData) {
        renderLines(daveData[0].bootText[0].text);
    };

    function bindTerminalEvents() {
        $terminal.on("focus", function() {
            $cmd.focus();
        });

        $cmd.on("focus", function() {
            $cmd.html($cmd.html());
        });

        if (valid) {
            $cmd.on("keydown", function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    checkCommand();
                };

                if (e.which === 32) {
                    return false;
                };
            });

            $cmdPrefix.html("Username: ");
        }
    };

    function checkCommand() {
        if (($cmd.text() != undefined) && valid) {
            var cmd = $cmd.text().toLowerCase();

            if (pass && cmd == (daveData[0].anagram)) {
                valid = false;
                $text.append("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD -> " + cmd + "<br/>")
                $text.append("<span class='correct'>Anagram Accepted</span> <br/><br/>");
                $text.append("<span class='waiting_dot'>.</span> <span class='waiting_dot'>.</span> <span class='waiting_dot'>.</span> <span class='waiting_dot'>.</span><br/><br/>");
                $text.find('.waiting_dot').addClass('on');
                $cmd.html("");
                $cmdPrefix.html("");
                showSecretData01();
            }
            else if (pass) {
                $text.append("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD -> " + cmd + "<br/>");
                $text.append("<span class='incorrect'>Anagram Incorrect</span> <br/>");
                $cmdPrefix.html("Please try again... ->");
            };

            if (!user && cmd == (daveData[0].username)) {
                user = true;
                $text.append("Username: " + cmd + "<br/>")
                $text.append("<span class='correct'>Username Recognized</span><br/><br/>")
                $cmdPrefix.html("Enter Password:")
            }
			else if (user && cmd == (daveData[0].password)) {
                pass = true;
                $text.append("Enter Password: " + cmd + "<br/>");
                $text.append("<span class='correct'>Password Accepted</span><br/><br/>");
                $cmdPrefix.html("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD ->");
            }
            else if (!pass) {
                if (user) {
                    $text.append("Enter Password: " + cmd + "<br/>");
                    $text.append("<span class='incorrect'>Password Incorrect</span> <br/>");
                    $cmdPrefix.html("Enter Password:");
                }
                else {
                    $text.append("Username: " + cmd + "<br/>");
                    $text.append("<span class='incorrect'>Username Incorrect</span> <br/>");
                    $cmdPrefix.html("Username:");
                }
            };

            $cmd.html("");
            $terminal.scrollTop($terminal[0].scrollHeight);
        };
    };

    function showSecretData01(e) {
        renderLines(daveData[0].secretData[0].secretData_1.text);
        $cmd.hide();
        
        if(event.keyCode == 13) event.stopPropagation();

        $terminal.focus();
        
        $terminal.one("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                contentDelay = 240;
                showSecretData02();
            };
        });
    }
    
    function showSecretData02(e) {
        renderLines(daveData[0].secretData[1].secretData_2.text);

        $terminal.one("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                showSecretData03();
            };
        });
    }
    
    function showSecretData03(e) {
        renderLines(daveData[0].secretData[2].secretData_3.text);

        $terminal.one("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                showSecretData04();
            };
        });
    }
    
    function showSecretData04(e) {
        renderLines(daveData[0].secretData[3].secretData_4.text);

        $terminal.one("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                showSecretData05();
            };
        });
    }
    
    function showSecretData05(e) {
        renderLines(daveData[0].secretData[4].secretData_5.text);
    }
    
    function customConsoleLog(message, bg, color) {
        console.log('%c:: ' + message + ' :: ', 'background: ' + bg + '; color: ' + color + '');
    };

    customConsoleLog("'What Happened to Dave?' Terminal // Developed by 2Wolves", "#1B1632", "#A292E7");
    customConsoleLog("Visit us @ http://2wolves.io", "#1B1632", "#A292E7");

    init(daveData);
});
