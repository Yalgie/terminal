$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find(".typing");
    var $text = $terminal.find(".text");
    var user = false;
    var pass = false;
    var username = "dave";
    var password = "grimrasputinisdead";
    var anogram = "paradigm industries";
    var typeSpeed = 50;

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
            }, typeSpeed);
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

        $text.append("Enter username: <br/>");
    };

    function checkCommand() {
        if ($cmd.text() != undefined) {
            var cmd = $cmd.text().toLowerCase();
            var valid = false;

            if (pass && cmd == anogram) {
                // $text.append("Anogram: " + cmd + "<br/>");
                $text.append(cmd + ": <span class='correct'>Anogram accepted</span> <br/>");
                startDirList()
            }
            else if (pass) {
                // $text.append("Anogram: " + cmd + "<br/>");
                $text.append(cmd + ": <span class='incorrect'>anogram incorrect</span> <br/>");
                $text.append("Enter anogram:<br/>");
            };

            if (!user && cmd == username) {
                user = true;
                // $text.append("Username: " + cmd + "<br/>");
                $text.append(cmd + ": <span class='correct'>Username recognised</span><br/>");
                $text.append("Enter password:<br/>");
            }
            else if (user && cmd == password) {
                pass = true;
                // $text.append("Password " + cmd + "<br/>");
                $text.append(cmd + ": <span class='correct'>Password accepted</span><br/>");
                $text.append("Enter anogram:<br/>");
                // $cmd.val(dir);
            }
            else if (!pass) {
                if (user) {
                    // $text.append("Password " + cmd + "<br/>");
                    $text.append(cmd + ": <span class='incorrect'>password incorrect</span> <br/>")
                    $text.append("Enter password:<br/>")
                }
                else {
                    // $text.append("Username " + cmd + "<br/>");
                    $text.append(cmd + ": <span class='incorrect'>username incorrect</span> <br/>")
                    $text.append("Enter Username:<br/>")
                }
            };

            $cmd.html("");
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

