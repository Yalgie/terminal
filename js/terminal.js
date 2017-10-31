$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find(".typing");
    var $cmdPrefix = $terminal.find(".cmdPrefix");
    var $text = $terminal.find(".text");
    var valid = true;
    var user = false;
    var pass = false;
    var username = "dave";
    var password = "grimrasputinisdead";
    var anagram = "paradigmindustries";
    var typeSpeed = 200;
	var startDelay = 3300;

    function init() {
        $.getJSON( "boot_text.json", function( data ) {
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    bindTerminalEvents();
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, startDelay);
        });
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

            if (pass && cmd == anagram) {
                valid = false;
                $text.append("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD -> " + cmd + "<br/>")
                $text.append("<span class='correct'>Anagram Accepted</span> <br/><br/><br/>");
                $cmd.html("")
                $cmdPrefix.html("")
                showSecretData01()
            }
            else if (pass) {
                $text.append("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD -> " + cmd + "<br/>")
                $text.append("<span class='incorrect'>Anagram Incorrect</span> <br/>");
                $cmdPrefix.html("Please try again... ->");
            };

            if (!user && cmd == username) {
                user = true;
                $text.append("Username: " + cmd + "<br/>")
                $text.append("<span class='correct'>Username Recognized</span><br/><br/>");
                $cmdPrefix.html("Enter Password:")
            }
			else if (user && cmd == password) {
                pass = true;
                $text.append("Enter Password: " + cmd + "<br/>")
                $text.append("<span class='correct'>Password Accepted</span><br/><br/>");
                $cmdPrefix.html("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD ->")
            }
            else if (!pass) {
                if (user) {
                    $text.append("Enter Password: " + cmd + "<br/>")
                    $text.append("<span class='incorrect'>Password Incorrect</span> <br/>")
                    $cmdPrefix.html("Enter Password:")
                }
                else {
                    $text.append("Username: " + cmd + "<br/>")
                    $text.append("<span class='incorrect'>Username Incorrect</span> <br/>")
                    $cmdPrefix.html("Username:")
                }
            };

            $cmd.html("")
            $terminal.scrollTop($terminal[0].scrollHeight);
        };
    };

    function customConsoleLog(message, bg, color) {
        console.log('%c:: ' + message + ' :: ', 'background: ' + bg + '; color: ' + color + '');
    };

    function showSecretData01(e) {
        $.getJSON( "secretData01.json", function(data) {
            console.log(data)
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    // bindTerminalEvents();
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, typeSpeed);
		
            $terminal.one("keydown", function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    showSecretData02();
                };
            });
        });
        
        $cmd.hide();
    }
    
    function showSecretData02(e) {
        $.getJSON( "secretData02.json", function(data) {
            console.log(data)
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, typeSpeed);
            
            $terminal.one("keydown", function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    showSecretData03();
                };
            });
        });
    }
    
    function showSecretData03(e) {
        $.getJSON( "secretData03.json", function(data) {
            console.log(data)
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, typeSpeed);
            
            $terminal.one("keydown", function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    showSecretData04();
                };
            });
        });
    }
    
    function showSecretData04(e) {
        $.getJSON( "secretData04.json", function(data) {
            console.log(data)
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, typeSpeed);
            
            $terminal.one("keydown", function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    showSecretData05();
                };
            });
        });
    }
    
    function showSecretData05(e) {
        $.getJSON( "secretData05.json", function(data) {
            console.log(data)
            var iCount = 0;

            function addLine() {
                $text.append(data.text[iCount])

                if (iCount < data.text.length) {
                    setTimeout(function(){
                        iCount++;
                        addLine();
                        $terminal.scrollTop($terminal[0].scrollHeight);
                    }, typeSpeed);
                }
                else {
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, typeSpeed);
        });
    }

    customConsoleLog("'What Happened to Dave?' Terminal // Developed by 2Wolves", "#1B1632", "#A292E7");
    customConsoleLog("Visit us @ http://2wolves.io", "#1B1632", "#A292E7");

    init();
});

