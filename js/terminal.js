$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find(".typing");
    var $cmdPrefix = $terminal.find(".cmdPrefix");
    var $text = $terminal.find(".text");
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

        $terminal.on("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                checkCommand();
            };
            
            // if ($cmd.html().length <= dir.length) {
            //     $cmd.html(dir);
            // };
        });

        $cmdPrefix.html("Enter Username: ");
    };

    function checkCommand() {
        if ($cmd.text() != undefined) {
            var cmd = $cmd.text().toLowerCase();
            var valid = false;

            if (pass && cmd == anagram) {
                // $text.append("Anogram: " + cmd + "<br/>");
                $text.append("Enter Anagram: " + cmd + "<br/>")
                $text.append("<span class='correct'>Anagram Accepted</span> <br/>");
                $cmd.html("")
                $cmdPrefix.html("")
                startDirList()
            }
            else if (pass) {
                // $text.append("Anogram: " + cmd + "<br/>");
                $text.append("Enter Anagram: " + cmd + "<br/>")
                $text.append("<span class='incorrect'>Anagram Incorrect</span> <br/>");
                $cmdPrefix.html("Enter Anagram:");
            };

            if (!user && cmd == username) {
                user = true;
                // $text.append("Username: " + cmd + "<br/>");
                $text.append("Enter Username: " + cmd + "<br/>")
                $text.append("<span class='correct'>Username Recognized</span><br/>");
                // $text.append("Enter Password:<br/>");
                $cmdPrefix.html("Enter Password:")
            }
            else if (user && cmd == password) {
                pass = true;
                // $text.append("Password " + cmd + "<br/>");
                $text.append("Enter Password: " + cmd + "<br/>")
                $text.append("<span class='correct'>Password Accepted</span><br/>");
                // $text.append("Enter Anagram:<br/>");
                $cmdPrefix.html("For 2-step authentication, please rearrange the following letters into correct order<br/>GRIMRASPUTINISDEAD ->")
                // $cmd.val(dir);
            }
            else if (!pass) {
                if (user) {
                    // $text.append("Password " + cmd + "<br/>");
                    $text.append("Enter Password: " + cmd + "<br/>")
                    $text.append("<span class='incorrect'>Password Incorrect</span> <br/>")
                    // $text.append("Enter Password:<br/>")
                    $cmdPrefix.html("Enter Password:")
                }
                else {
                    // $text.append("Username " + cmd + "<br/>");
                    $text.append("Enter Username: " + cmd + "<br/>")
                    $text.append("<span class='incorrect'>Username Incorrect</span> <br/>")
                    // $text.append("Enter Username:<br/>")
                    $cmdPrefix.html("Enter Username:")
                }
            };

            $cmd.html("")
            $terminal.scrollTop($terminal[0].scrollHeight);
        };
    };

    function customConsoleLog(message, bg, color) {
        console.log('%c:: ' + message + ' :: ', 'background: ' + bg + '; color: ' + color + '');
    };

    function startDirList() {
        $.getJSON( "dir_text.json", function( data ) {
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
        });
    }

    customConsoleLog("Dave Terminal // Developed by 2Wolves", "#1B1632", "#A292E7");
    customConsoleLog("Visit us @ http://2wolves.io", "#1B1632", "#A292E7");

    init();
});

