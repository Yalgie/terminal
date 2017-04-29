$(function() {
    var $terminal = $("#terminal");
    var $cmd = $terminal.find("textarea");
    var $text = $terminal.find("div");

    var dir = "C:\\paradigm_industries> ";
    var valid_commands = [
        {
            "cmd": "hello",
            "response": "Oh Herro"
        }
    ];

    function init() {
        $.getJSON( "boot_text.json", function( data ) {
            $.each(data.text, function(i) {
                var str = data.text[i];
                str = str.replace(/ /g,"&nbsp;");
                str = str.replace(/-/g,"_");
                $text.append(str + "<br/>");
            })
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
            
            if ($cmd.val().length <= 23) {
                $cmd.val(dir);
            };
        });

        $cmd.val(dir);
    };

    function checkCommand() {
        if ($cmd.val().split(dir)[1] != undefined) {
            var cmd = $cmd.val().split(dir)[1].toLowerCase();
            var valid = false;

            for (var i = 0; i < valid_commands.length; i++) {
                if (cmd == valid_commands[i].cmd.toLowerCase()) {
                    $text.append(dir + $cmd.val().split(dir)[1] + "<br/>");
                    $text.append(valid_commands[i].response + "<br/>");
                    valid = true;
                    $cmd.val(dir);
                };
            };
            
            if (!valid && cmd.length > 0) {
                $text.append(dir + $cmd.val().split(dir)[1] + "<br/>");
                $text.append("command not found: " + $cmd.val().split(dir)[1] + "<br/>");
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

    bindTerminalEvents();
    init();
});

