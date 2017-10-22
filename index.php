<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <title>Welcome!</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Dave - Can you solve the riddle?">
		<link rel="apple-touch-icon" sizes="192x192" href="img/logo_highres.png">
		<link rel="icon" type="image/png" href="img/favicon.png" />
       
        <link rel="stylesheet" href="css/main.css">
        <script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/terminal.js"></script>
</head>

<body>
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: none;" viewBox="0 0 100 100">
		<title>The 'What Happened To Dave' Facebook Page!</title>
		<symbol id="icon_fb" viewBox="0 0 259 259">
			<path d="M178.409,258.307 L244.082,258.307 C251.936,258.307 258.305, 251.938 258.305,244.082 L258.305,14.812 C258.305, 6.955 251.937, 0.588 244.082,0.588 L14.812,0.588 C6.955,0.588 0.588,6.955 0.588,14.812 L0.588,244.082 C0.588,251.937 6.954,258.307 14.812,258.307 L138.243,258.307 L138.243,158.522 L104.658,158.522 L104.658,119.627 L138.243,119.627  L138.243,90.943 C138.243,57.656 158.573,39.530 188.268,39.530 C202.492,39.530 214.718,40.589 218.28,41.063 L218.28,75.851 L197.684,75.860 C181.536,75.860 178.409,83.534  178.409,94.795 L178.409,119.627 L216.924,119.627 L211.908,158.522 L178.409,158.522 L178.409,258.307 Z">
			</path>
		</symbol>
	</svg>

	<div id="wrap">
		<main>
			<div class="computer_background">
				<div class="computer_panel_window">
					<div tabindex="0" id="terminal">
						<div class="text"></div>
						<div>
							<span class='cmdPrefix'></span>
							<span contentEditable='true' tabindex='0' id='typing' class="typing" spellcheck="false"></span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="clear"></div>
			
			<div class="footer_link">
				<p class="fl_copyright_fb">© <?php echo date("Y"); ?> <a href="https://www.google.com.au/" target="_blank">Shawn Lebert</a>, all rights reserved
					<a href="https://www.facebook.com/whathappenedtodave" target="_blank">
						<svg class="icon_fb">
							<use xlink:href="#icon_fb"></use>
						</svg>
					</a>
				</p>
				<p class="fl_vimeo">video evidence on <a href="https://vimeo.com/183890658" target="_blank">Vimeo</a></p>
			</div>
			
			<div class="computer_screen_overlay"></div> 
		</main>
	</div>
</body>
</html>