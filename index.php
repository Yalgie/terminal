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
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="display: none;" viewBox="0 0 100 100">
		<symbol id="icon_vimeo" viewBox="0 0 256 223">
			<path d="M255.876213,51.662485 C254.737006,76.6303263 237.331453,110.819347 203.667236,154.211627 C168.861251,199.53928 139.413381,222.200547 115.323625,222.200547 C100.406409,222.200547 87.772727,208.402057 77.4609804,180.794839 C70.5694159,155.489076 63.6855314,130.185872 56.7965269,104.880109 C49.1343974,77.2882505 40.9193043,63.4744013 32.1358876,63.4744013 C30.2209952,63.4744013 23.5188719,67.5115474 12.0448778,75.5551193 L0,60.0081389 C12.6336816,48.884867 25.0984021,37.7641552 37.3608813,26.6280832 C54.2109102,12.038549 66.8599519,4.36617944 75.2900864,3.59049443 C95.2146951,1.67304204 107.477174,15.3179302 112.080084,44.5277189 C117.054196,76.0415225 120.494858,95.6435691 122.430231,103.315939 C128.172348,129.461388 134.490469,142.517472 141.394833,142.517472 C146.752948,142.517472 154.80164,134.038697 165.533229,117.081148 C176.254579,100.118478 181.996696,87.2134346 182.772381,78.3480974 C184.298151,63.7099228 178.553473,56.3729154 165.533229,56.3729154 C159.40455,56.3729154 153.086429,57.7860445 146.586547,60.5790226 C159.166468,19.2885158 183.205023,-0.764093703 218.686853,0.380233689 C244.991023,1.15335868 257.391743,18.2465891 255.876213,51.662485"></path>
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