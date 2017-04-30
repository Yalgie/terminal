$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find("textarea");
    var $text = $terminal.find("div");
    var user = false;
    var username = "dave";
    var password = "pass";

    var dir = "Please enter username: ";

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
                    }, 100);
                }
                else {
                    bindTerminalEvents();
                    $cmd.focus();
                }
            };

            setTimeout(function(){
                addLine();
                $terminal.scrollTop($terminal[0].scrollHeight);
            }, 100);
        });
    };

    function bindTerminalEvents() {
        $terminal.on("focus", function() {
            $cmd.focus();
        });

        $cmd.on("focus", function() {
            $cmd.html($cmd.val());
        });

        $terminal.on("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                checkCommand();
            };
            
            if ($cmd.val().length <= dir.length) {
                $cmd.val(dir);
            };
        });

        $cmd.val(dir);
    };

    function checkCommand() {
        if ($cmd.val().split(dir)[1] != undefined) {
            var cmd = $cmd.val().split(dir)[1].toLowerCase();
            var valid = false;

            if (!user && cmd == username) {
                user = true;
                $text.append(dir + cmd + "<br/>");
                dir = "Please enter password: ";
                $cmd.val(dir);
            }
            else if (user && cmd == password) {
                alert("Redirect?");
            }
            else {
                $text.append(dir + $cmd.val().split(dir)[1] + "<br/>");
                user ? $text.append("password incorrect <br/>") : $text.append("username incorrect <br/>");
                $cmd.val(dir);
            };

            $terminal.scrollTop($terminal[0].scrollHeight);
        };
    };

    function customConsoleLog(message, bg, color) {
        console.log('%c:: ' + message + ' :: ', 'background: ' + bg + '; color: ' + color + '');
    };

    customConsoleLog("Dave Terminal // Developed by 2Wolves", "#1B1632", "#A292E7");
    customConsoleLog("Visit us @ http://2wolves.io", "#1B1632", "#A292E7");

    init();
});

