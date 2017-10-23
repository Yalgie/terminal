<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <title>What Happened to Dave...?</title>
        
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
    <!-- Facebook Logo -->
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: none;" viewBox="0 0 100 100">
		<title>The 'What Happened To Dave' Facebook Page!</title>
		<symbol id="icon_fb" viewBox="0 0 259 259">
			<path d="M178.409,258.307 L244.082,258.307 C251.936,258.307 258.305, 251.938 258.305,244.082 L258.305,14.812 C258.305, 6.955 251.937, 0.588 244.082,0.588 L14.812,0.588 C6.955,0.588 0.588,6.955 0.588,14.812 L0.588,244.082 C0.588,251.937 6.954,258.307 14.812,258.307 L138.243,258.307 L138.243,158.522 L104.658,158.522 L104.658,119.627 L138.243,119.627  L138.243,90.943 C138.243,57.656 158.573,39.530 188.268,39.530 C202.492,39.530 214.718,40.589 218.28,41.063 L218.28,75.851 L197.684,75.860 C181.536,75.860 178.409,83.534  178.409,94.795 L178.409,119.627 L216.924,119.627 L211.908,158.522 L178.409,158.522 L178.409,258.307 Z">
			</path>
		</symbol>
	</svg>
	
    <!-- Vimeo Logo -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: none;" viewBox="0 0 6.82666 6.82666">
        <title>View 'Dave' on Vimeo!</title>
        <symbol id="icon_vimeo">
            <rect class="fil0" height="6.82667" rx="1.45635" ry="1.45635" width="6.82667"/>
            <path class="fil1" d="M4.90076 1.59237c-0.584402,-0.0190669 -0.97989,0.308756 -1.18695,0.98389 0.106626,-0.0439567 0.210232,-0.0661181 0.311366,-0.0661181 0.213118,-3.93701e-006 0.307425,0.119575 0.282256,0.359476 -0.0125315,0.145303 -0.106705,0.356594 -0.282256,0.633988 -0.176398,0.277752 -0.308071,0.41652 -0.395488,0.41652 -0.113594,0 -0.21698,-0.214661 -0.311366,-0.643425 -0.0317283,-0.126232 -0.0882638,-0.447811 -0.169358,-0.965323 -0.0760394,-0.479394 -0.276835,-0.703331 -0.603327,-0.671819 -0.138138,0.0126575 -0.344984,0.139114 -0.621185,0.378528 -0.201445,0.183008 -0.405555,0.366016 -0.613106,0.548949l0.19772 0.255244c0.188697,-0.132571 0.299051,-0.198543 0.329642,-0.198543 0.144673,0 0.279862,0.226957 0.405484,0.680752 0.112728,0.416803 0.226327,0.833035 0.339559,1.24926 0.168732,0.45415 0.376638,0.681331 0.621193,0.681331 0.395634,-3.93701e-006 0.879941,-0.371992 1.45112,-1.11641 0.55261,-0.712693 0.837882,-1.27417 0.85715,-1.68449 0.0253937,-0.548465 -0.178646,-0.829291 -0.612453,-0.841807z"/>
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
				<p class="fl_copyright_fb">© <?php echo date("Y"); ?> Apollonian Entertainment, all rights reserved
					<a href="https://www.facebook.com/whathappenedtodave" target="_blank">
						<svg class="icon_fb">
							<use xlink:href="#icon_fb"></use>
						</svg>
					</a>
				</p>
				
				<p class="fl_vimeo">video evidence on 
				<a href="https://vimeo.com/shawnlebert/dave" target="_blank">
                    <svg class="icon_vimeo">
                        <use xlink:href="#icon_vimeo"></use>
                    </svg>
				</a>
				</p>
			</div>
			
			<div class="computer_screen_overlay"></div> 
		</main>
	</div>
</body>
</html>