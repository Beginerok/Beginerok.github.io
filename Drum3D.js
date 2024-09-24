var VSHADER_SOURCE =
	'attribute vec3 a_Position;\n' +
	'attribute vec4 a_Color;\n' +
	'attribute vec2 a_TexCoord;\n' +
	'varying vec4 v_Color;\n' +
	'varying vec2 v_TexCoord;\n' +
	'uniform mat4 u_ProjMatrix;\n' +
	'uniform mat4 u_ModelMatrix;\n' +
	'void main() {\n' +
	'gl_Position = u_ProjMatrix * u_ModelMatrix * vec4(a_Position,1.0);\n' +
	'v_Color = a_Color;\n' +
	'v_TexCoord = a_TexCoord;\n' +
	'}\n';
var FSHADER_SOURCE =
	'#ifdef GL_ES\n' +
	'precision mediump float;\n' +
	'#endif\n' +
	'uniform sampler2D u_Sampler;\n' +
	'varying vec2 v_TexCoord;\n' +
	'void main() {\n' +
	'gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
	'}\n';
var startRotate = [0, 0, 0, 0, 0];
var textures1, textures2, textures3, textures4, textures5, textures6, textures7, textures8, Drums = [], Tex = [];
var ready1 = false, ready2 = false, ready3 = false, ready4 = false, ready5 = false, ready6 = false, ready7 = false, ready8 = false;
var n =  2;
var flag_win = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
]
var a0 = {
	'x': -1.0,
	'y': 0.68 * 2.0 / 3.0,
	'z': 0.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a1 = {
	'x': -0.78 + 0.15,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a2 = {
	'x': -0.78 + 0.15 + 0.3,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a3 = {
	'x': -0.78 + 0.15 + 0.6,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a4 = {
	'x': -0.78 + 0.15 + 0.9,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a5 = {
	'x': -0.78 + 0.15 + 1.2,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var a6 = {
	'x': 1.0,
	'y': 0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b0 = {
	'x': -1.0,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b1 = {
	'x': -0.78 + 0.15,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b2 = {
	'x': -0.78 + 0.15 + 0.3,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b3 = {
	'x': -0.78 + 0.15 + 0.6,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b4 = {
	'x': -0.78 + 0.15 + 0.9,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b5 = {
	'x': -0.78 + 0.15 + 1.2,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var b6 = {
	'x': 1.0,
	'y': 0.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c0 = {
	'x': -1.0,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c1 = {
	'x': -0.78 + 0.15,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c2 = {
	'x': -0.78 + 0.15 + 0.3,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c3 = {
	'x': -0.78 + 0.15 + 0.6,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c4 = {
	'x': -0.78 + 0.15 + 0.9,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c5 = {
	'x': -0.78 + 0.15 + 1.2,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var c6 = {
	'x': 1.0,
	'y': -0.68 * 2.0 / 3.0,
	'z': 1.0,
	'r': 1.0,
	'g': 0.0,
	'b': 0.0,
	'a': 0.5,
	's': 0.0,
	't': 0.0
}
var spin = new Audio('spin.mp3');
var stop = new Audio('stop.mp3');
var win = new Audio('win.mp3');
var Credits = document.getElementById("credits").textContent
var Win = 0;
var total_bet = document.getElementById("total_bet").textContent
console.log(credits)
function main() {
	/*
		spin.addEventListener('ended', function () {
			this.currentTime = 0;
			this.play();
		}, false);
	*/
	var min = 0;
	var max = 6;
	Drums.length = 0;
	for (var i = 0; i < 30; i++) {
		min = Math.ceil(min);
		max = Math.floor(max);
		Drums.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	var canvas = document.getElementById('c');
	var nf = document.getElementById('nearFar');
	//var gl = canvas.getContext("webgl");
	var gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('Failed to get the rendering context for WebGL');
		return;
	}
	if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
		console.log('Failed to intialize shaders.');
		return;
	}
	var nj = initVertexBuffers(gl);
	if (nj < 0) {
		console.log('Failed to set the vertex information');
		return;
	}
	var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
	if (!u_ModelMatrix) {
		console.log('Failed to get the storage location of u_ModelMatrix');
		return;
	}
	var currentAngle = [0.0, 0.0, 0.0, 0.0, 0.0];
	var modelMatrix = new Matrix4();
	var u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
	var projMatrix = new Matrix4();
	var g_near = -1.0, g_far = 1.0;
	projMatrix.setOrtho(-1, 1, -1, 1, g_near, g_far);
	nf.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
	nf.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	if (!initTextures(gl)) {
		console.log('Failed to intialize the texture.');
		return;
	}
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	var tick = function () {
		currentAngle = animate(currentAngle);
		for (var i = 0; i < currentAngle.length; i++)
			if (currentAngle[i] >= 1820) {
				startRotate[i] = !startRotate[i];
				stop.play();
				currentAngle[i] = 0.0;
			}
		checkwin();
		draw(gl, currentAngle, modelMatrix, u_ModelMatrix, u_ProjMatrix, projMatrix, nf);
		requestAnimationFrame(tick, canvas);
	};
	tick();
	canvas.onmousedown = function (ev) { click(ev, gl, canvas, currentAngle); };
	buttonSpin.onclick = function (ev) { click(ev, gl, canvas, currentAngle); };
	var range = document.getElementById("quality");
	range.onchange =function(value){
		n = parseInt(range.value,10);
		initVertexBuffers(gl);
		//console.log("n="+n);
	}
}

function checkwin() {
	if (!startRotate[0] && !startRotate[1] && !startRotate[2] && !startRotate[3] && !startRotate[4]) {
		if (Drums[0] == Drums[6] && Drums[6] == Drums[12] && Drums[12] == Drums[18] && Drums[18] == Drums[24]) {
			//console.log("win1")
			//return true;
			if (!flag_win[0])
				Win += 5;
			flag_win[0] = true;
			win.play();
		}
		if (Drums[1] == Drums[7] && Drums[7] == Drums[13] && Drums[13] == Drums[19] && Drums[19] == Drums[25]) {
			//console.log("win2")
			//return true;
			if (!flag_win[1])
				Win += 5;
			flag_win[1] = true;
			win.play();
		}
		if (Drums[2] == Drums[8] && Drums[8] == Drums[14] && Drums[14] == Drums[20] && Drums[20] == Drums[26]) {
			//console.log("win3")
			//return true;
			if (!flag_win[2])
				Win += 5;
			flag_win[2] = true;
			win.play();
		}
		if (Drums[0] == Drums[6] && Drums[6] == Drums[13] && Drums[13] == Drums[18] && Drums[18] == Drums[24]) {
			//console.log("win4")
			//return true;
			if (!flag_win[3])
				Win += 5;
			flag_win[3] = true;
			win.play();
		}
		if (Drums[1] == Drums[7] && Drums[7] == Drums[12] && Drums[12] == Drums[19] && Drums[19] == Drums[25]) {
			//console.log("win5")
			//return true;
			if (!flag_win[4])
				Win += 5;
			flag_win[4] = true;
			win.play();
		}
		if (Drums[1] == Drums[7] && Drums[7] == Drums[14] && Drums[14] == Drums[19] && Drums[19] == Drums[25]) {
			//console.log("win6")
			//return true;
			if (!flag_win[5])
				Win += 5;
			flag_win[5] = true;
			win.play();
		}
		if (Drums[2] == Drums[8] && Drums[8] == Drums[13] && Drums[13] == Drums[20] && Drums[20] == Drums[26]) {
			//console.log("win7")
			//return true;
			if (!flag_win[6])
				Win += 5;
			flag_win[6] = true;
			win.play();
		}
		if (Drums[0] == Drums[7] && Drums[7] == Drums[14] && Drums[14] == Drums[19] && Drums[19] == Drums[24]) {
			//console.log("win8")
			//return true;
			if (!flag_win[7])
				Win += 5;
			flag_win[7] = true;
			win.play();
		}
		if (Drums[2] == Drums[7] && Drums[7] == Drums[12] && Drums[12] == Drums[19] && Drums[19] == Drums[26]) {
			//console.log("win9")
			//return true;
			if (!flag_win[8])
				Win += 5;
			flag_win[8] = true;
			win.play();
		}
		if (Drums[0] == Drums[7] && Drums[7] == Drums[13] && Drums[13] == Drums[19] && Drums[19] == Drums[24]) {
			//console.log("win10")
			//return true;
			if (!flag_win[9])
				Win += 5;
			flag_win[9] = true;
			win.play();
		}

		if (Drums[1] == Drums[6] && Drums[6] == Drums[12] && Drums[12] == Drums[18] && Drums[18] == Drums[25]) {
			//console.log("win11")
			//return true;
			if (!flag_win[10])
				Win += 5;
			flag_win[10] = true;
			win.play();
		}

		if (Drums[1] == Drums[8] && Drums[8] == Drums[14] && Drums[14] == Drums[20] && Drums[20] == Drums[25]) {
			//console.log("win12")
			//return true;
			if (!flag_win[11])
				Win += 5;
			flag_win[11] = true;
			win.play();
		}

		if (Drums[2] == Drums[7] && Drums[7] == Drums[13] && Drums[13] == Drums[19] && Drums[19] == Drums[26]) {
			//console.log("win13")
			//return true;
			if (!flag_win[12])
				Win += 5;
			flag_win[12] = true;
			win.play();
		}
		if (Drums[0] == Drums[6] && Drums[6] == Drums[13] && Drums[13] == Drums[20] && Drums[20] == Drums[26]) {
			//console.log("win14")
			//return true;
			if (!flag_win[13])
				Win += 5;
			flag_win[13] = true;
			win.play();
		}
		if (Drums[2] == Drums[8] && Drums[8] == Drums[13] && Drums[13] == Drums[18] && Drums[18] == Drums[24]) {
			//console.log("win15")
			//return true;
			if (!flag_win[14])
				Win += 5;
			flag_win[14] = true;
			win.play();
		}
		if (Drums[0] == Drums[7] && Drums[7] == Drums[12] && Drums[12] == Drums[19] && Drums[19] == Drums[24]) {
			//console.log("win16")
			//return true;
			if (!flag_win[15])
				Win += 5;
			flag_win[15] = true;
			win.play();
		}
		if (Drums[1] == Drums[6] && Drums[6] == Drums[13] && Drums[13] == Drums[18] && Drums[18] == Drums[25]) {
			//console.log("win17")
			//return true;
			if (!flag_win[16])
				Win += 5;
			flag_win[16] = true;
			win.play();
		}
		if (Drums[1] == Drums[8] && Drums[8] == Drums[13] && Drums[13] == Drums[20] && Drums[20] == Drums[25]) {
			//console.log("win18")
			//return true;
			if (!flag_win[17])
				Win += 5;
			flag_win[17] = true;
			win.play();
		}
		if (Drums[2] == Drums[7] && Drums[7] == Drums[14] && Drums[14] == Drums[19] && Drums[19] == Drums[26]) {
			//console.log("win19")
			//return true;
			if (!flag_win[18])
				Win += 5;
			flag_win[18] = true;
			win.play();
		}
		//console.log("-----------------------------------------")
	}
	document.getElementById("win").textContent = Win;
	return false;
}
function animate(angle) {
	if (startRotate[0] || startRotate[1] || startRotate[2] || startRotate[3] || startRotate[4])
		spin.play();
	for (var i = 0; i < angle.length; i++)
		if (startRotate[i]) {
			angle[i] += 30;
			var min = document.getElementById("min").value
			var max = document.getElementById("max").value;
			var rand = 0;
			//console.log(angle)
			if (angle[i] == 900) {
				if (i == 0) {
					Drums[0] = randed(min, max, rand)
					Drums[1] = randed(min, max, rand)
					Drums[2] = randed(min, max, rand)
				}
				if (i == 1) {
					Drums[6] = randed(min, max, rand)
					Drums[7] = randed(min, max, rand)
					Drums[8] = randed(min, max, rand)
				}
				if (i == 2) {
					Drums[12] = randed(min, max, rand)
					Drums[13] = randed(min, max, rand)
					Drums[14] = randed(min, max, rand)
				}
				if (i == 3) {
					Drums[18] = randed(min, max, rand)
					Drums[19] = randed(min, max, rand)
					Drums[20] = randed(min, max, rand)
				}
				if (i == 4) {
					Drums[24] = randed(min, max, rand)
					Drums[25] = randed(min, max, rand)
					Drums[26] = randed(min, max, rand)
				}
			}
			if (angle[i] == 1080) {
				if (i == 0) {
					Drums[3] = randed(min, max, rand)
					Drums[4] = randed(min, max, rand)
					Drums[5] = randed(min, max, rand)
				}

				if (i == 1) {
					Drums[9] = randed(min, max, rand)
					Drums[10] = randed(min, max, rand)
					Drums[11] = randed(min, max, rand)
				}

				if (i == 2) {
					Drums[15] = randed(min, max, rand)
					Drums[16] = randed(min, max, rand)
					Drums[17] = randed(min, max, rand)
				}

				if (i == 3) {
					Drums[21] = randed(min, max, rand)
					Drums[22] = randed(min, max, rand)
					Drums[23] = randed(min, max, rand)
				}

				if (i == 4) {
					Drums[27] = randed(min, max, rand)
					Drums[28] = randed(min, max, rand)
					Drums[29] = randed(min, max, rand)
				}
			}
		}
	return angle;
}
function fill_buff_lines(buf, k0, k1, k2, k3, k4, k5, k6) {
	buf[buf.length] = k0.x
	buf[buf.length] = k0.y
	buf[buf.length] = k0.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//0 
	buf[buf.length] = 0.0//1

	buf[buf.length] = k1.x
	buf[buf.length] = k1.y
	buf[buf.length] = k1.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1

	buf[buf.length] = k2.x
	buf[buf.length] = k2.y
	buf[buf.length] = k2.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1

	buf[buf.length] = k3.x
	buf[buf.length] = k3.y
	buf[buf.length] = k3.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//0 
	buf[buf.length] = 0.0//1

	buf[buf.length] = k4.x
	buf[buf.length] = k4.y
	buf[buf.length] = k4.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1

	buf[buf.length] = k5.x
	buf[buf.length] = k5.y
	buf[buf.length] = k5.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1

	buf[buf.length] = k6.x
	buf[buf.length] = k6.y
	buf[buf.length] = k6.z
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.5
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1
}
function click(ev, gl, canvas, currentAngle) {

	Credits -= total_bet;
	Credits += Win;
	Win = 0;
	document.getElementById("credits").textContent = Credits;
	document.getElementById("win").textContent = Win;
	for (var i = 0; i < 5; i++) {
		(function (index) {
			setTimeout(function () {
				startRotate[index] = !startRotate[index]
				flag_win[0] = false
				flag_win[1] = false
				flag_win[2] = false
				flag_win[3] = false
				flag_win[4] = false
				flag_win[5] = false
				flag_win[6] = false
				flag_win[7] = false
				flag_win[8] = false
				flag_win[9] = false
				flag_win[10] = false
				flag_win[11] = false
				flag_win[12] = false
				flag_win[13] = false
				flag_win[14] = false
				flag_win[15] = false
				flag_win[16] = false
				flag_win[17] = false
				flag_win[18] = false
				//			console.log(array[index]);
			}, 1200 * index);
		})(i);
		/*
setTimeout(function(){
startRotate[i] = !startRotate[i]
Drums=[];
var min=0;
var max=6;
var rand = 0;
for(var i=0;i<30;i++)
{
min = Math.ceil(min);
max = Math.floor(max);
rand = Math.floor(Math.random() * (max - min + 1)) + min;
Drums.push(rand);
myAudio.play();
}
}, 100);
*/
	}

}
function randed(min, max, rand) {
	var r100=[];
	min = Math.ceil(min);
	max = Math.floor(max);
	for(var i=0;i<50;i++)
		r100.push(1);
	for(var i=50;i<60;i++)
		r100.push(5);
	for(var i=60;i<70;i++)
		r100.push(3);
	for(var i=70;i<80;i++)
		r100.push(6);
	for(var i=80;i<90;i++)
		r100.push(4);
	for(var i=90;i<95;i++)
		r100.push(0);
	for(var i=95;i<100;i++)
		r100.push(2);
	min = 0;
	max = 99;
	rand = r100[Math.floor(Math.random() * (max - min + 1)) + min];
	return rand;
}
function initVertexBuffers(gl) {
	var sleft = []
	var sright = []
	sleft.push(-0.78);
	sleft.push(-0.48);
	sleft.push(-0.16);
	sleft.push(0.16);
	sleft.push(0.48);
	sright.push(-0.48);
	sright.push(-0.16);
	sright.push(0.16);
	sright.push(0.48);
	sright.push(0.78);
	var jIter = 0, nn = 324;
	var buf = [];
	for (var jj = 0; jj < sleft.length; jj++) {
		var xleft = sleft[jj];
		var xright = sright[jj];
		for (var i = 0; i < n; i++) {
			//front up
			var yTex = 1.0 - parseFloat(i / n);
			var yTex2 = 1.0 - parseFloat((i + 1) / n);

			buf[(0 + i * nn) + jIter * n * nn] = xleft;
			buf[(1 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * i) * 0.0175);
			buf[(2 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * i) * 0.0175);
			buf[(3 + i * nn) + jIter * n * nn] = 1.0;
			buf[(4 + i * nn) + jIter * n * nn] = 1.0;
			buf[(5 + i * nn) + jIter * n * nn] = 1.0;
			buf[(6 + i * nn) + jIter * n * nn] = 1.0;
			buf[(7 + i * nn) + jIter * n * nn] = 0.0;
			buf[(8 + i * nn) + jIter * n * nn] = yTex;

			buf[(9 + i * nn) + jIter * n * nn] = xleft;
			buf[(10 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(11 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(12 + i * nn) + jIter * n * nn] = 1.0;
			buf[(13 + i * nn) + jIter * n * nn] = 1.0;
			buf[(14 + i * nn) + jIter * n * nn] = 1.0;
			buf[(15 + i * nn) + jIter * n * nn] = 1.0;
			buf[(16 + i * nn) + jIter * n * nn] = 0.0;
			buf[(17 + i * nn) + jIter * n * nn] = yTex2;

			buf[(18 + i * nn) + jIter * n * nn] = xright;
			buf[(19 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * i) * 0.0175);
			buf[(20 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * i) * 0.0175);
			buf[(21 + i * nn) + jIter * n * nn] = 1.0;
			buf[(22 + i * nn) + jIter * n * nn] = 1.0;
			buf[(23 + i * nn) + jIter * n * nn] = 1.0;
			buf[(24 + i * nn) + jIter * n * nn] = 1.0;
			buf[(25 + i * nn) + jIter * n * nn] = 1.0;
			buf[(26 + i * nn) + jIter * n * nn] = yTex;

			buf[(27 + i * nn) + jIter * n * nn] = xright;
			buf[(28 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * i) * 0.0175);
			buf[(29 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * i) * 0.0175);
			buf[(30 + i * nn) + jIter * n * nn] = 1.0;
			buf[(31 + i * nn) + jIter * n * nn] = 1.0;
			buf[(32 + i * nn) + jIter * n * nn] = 1.0;
			buf[(33 + i * nn) + jIter * n * nn] = 1.0;
			buf[(34 + i * nn) + jIter * n * nn] = 1.0;
			buf[(35 + i * nn) + jIter * n * nn] = yTex;

			buf[(36 + i * nn) + jIter * n * nn] = xleft;
			buf[(37 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(38 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(39 + i * nn) + jIter * n * nn] = 1.0;
			buf[(40 + i * nn) + jIter * n * nn] = 1.0;
			buf[(41 + i * nn) + jIter * n * nn] = 1.0;
			buf[(42 + i * nn) + jIter * n * nn] = 1.0;
			buf[(43 + i * nn) + jIter * n * nn] = 0.0;
			buf[(44 + i * nn) + jIter * n * nn] = yTex2;

			buf[(45 + i * nn) + jIter * n * nn] = xright;
			buf[(46 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(47 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(48 + i * nn) + jIter * n * nn] = 1.0;
			buf[(49 + i * nn) + jIter * n * nn] = 1.0;
			buf[(50 + i * nn) + jIter * n * nn] = 1.0;
			buf[(51 + i * nn) + jIter * n * nn] = 1.0;
			buf[(52 + i * nn) + jIter * n * nn] = 1.0;
			buf[(53 + i * nn) + jIter * n * nn] = yTex2;
			//front middle
			yTex = 1 - parseFloat(i / n);
			yTex2 = 1 - parseFloat((i + 1) / n);

			buf[(54 + i * nn) + jIter * n * nn] = xleft;
			buf[(55 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30.0 - 60.0 / n * i) * 0.0175);
			buf[(56 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * i) * 0.0175);
			buf[(57 + i * nn) + jIter * n * nn] = 1.0;
			buf[(58 + i * nn) + jIter * n * nn] = 1.0;
			buf[(59 + i * nn) + jIter * n * nn] = 1.0;
			buf[(60 + i * nn) + jIter * n * nn] = 1.0;
			buf[(61 + i * nn) + jIter * n * nn] = 0.0;
			buf[(62 + i * nn) + jIter * n * nn] = yTex;

			buf[(63 + i * nn) + jIter * n * nn] = xleft;
			buf[(64 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(65 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(66 + i * nn) + jIter * n * nn] = 1.0;
			buf[(67 + i * nn) + jIter * n * nn] = 1.0;
			buf[(68 + i * nn) + jIter * n * nn] = 1.0;
			buf[(69 + i * nn) + jIter * n * nn] = 1.0;
			buf[(70 + i * nn) + jIter * n * nn] = 0.0;
			buf[(71 + i * nn) + jIter * n * nn] = yTex2;

			buf[(72 + i * nn) + jIter * n * nn] = xright;
			buf[(73 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30 - 60.0 / n * i) * 0.0175);
			buf[(74 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * i) * 0.0175);
			buf[(75 + i * nn) + jIter * n * nn] = 1.0;
			buf[(76 + i * nn) + jIter * n * nn] = 1.0;
			buf[(77 + i * nn) + jIter * n * nn] = 1.0;
			buf[(78 + i * nn) + jIter * n * nn] = 1.0;
			buf[(79 + i * nn) + jIter * n * nn] = 1.0;
			buf[(80 + i * nn) + jIter * n * nn] = yTex;

			buf[(81 + i * nn) + jIter * n * nn] = xright;
			buf[(82 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30.0 - 60.0 / n * i) * 0.0175);
			buf[(83 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * i) * 0.0175);
			buf[(84 + i * nn) + jIter * n * nn] = 1.0;
			buf[(85 + i * nn) + jIter * n * nn] = 1.0;
			buf[(86 + i * nn) + jIter * n * nn] = 1.0;
			buf[(87 + i * nn) + jIter * n * nn] = 1.0;
			buf[(88 + i * nn) + jIter * n * nn] = 1.0;
			buf[(89 + i * nn) + jIter * n * nn] = yTex;

			buf[(90 + i * nn) + jIter * n * nn] = xleft;
			buf[(91 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(92 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(93 + i * nn) + jIter * n * nn] = 1.0;
			buf[(94 + i * nn) + jIter * n * nn] = 1.0;
			buf[(95 + i * nn) + jIter * n * nn] = 1.0;
			buf[(96 + i * nn) + jIter * n * nn] = 1.0;
			buf[(97 + i * nn) + jIter * n * nn] = 0.0;
			buf[(98 + i * nn) + jIter * n * nn] = yTex2;

			buf[(99 + i * nn) + jIter * n * nn] = xright;
			buf[(100 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(101 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(102 + i * nn) + jIter * n * nn] = 1.0;
			buf[(103 + i * nn) + jIter * n * nn] = 1.0;
			buf[(104 + i * nn) + jIter * n * nn] = 1.0;
			buf[(105 + i * nn) + jIter * n * nn] = 1.0;
			buf[(106 + i * nn) + jIter * n * nn] = 1.0;
			buf[(107 + i * nn) + jIter * n * nn] = yTex2;
			//front down
			yTex = 1 - parseFloat(i / n);
			yTex2 = 1 - parseFloat((i + 1) / n);

			buf[(108 + i * nn) + jIter * n * nn] = xleft;
			buf[(109 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(110 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(111 + i * nn) + jIter * n * nn] = 1.0;
			buf[(112 + i * nn) + jIter * n * nn] = 1.0;
			buf[(113 + i * nn) + jIter * n * nn] = 1.0;
			buf[(114 + i * nn) + jIter * n * nn] = 1.0;
			buf[(115 + i * nn) + jIter * n * nn] = 0.0;
			buf[(116 + i * nn) + jIter * n * nn] = yTex;

			buf[(117 + i * nn) + jIter * n * nn] = xleft;
			buf[(118 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(119 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(120 + i * nn) + jIter * n * nn] = 1.0;
			buf[(121 + i * nn) + jIter * n * nn] = 1.0;
			buf[(122 + i * nn) + jIter * n * nn] = 1.0;
			buf[(123 + i * nn) + jIter * n * nn] = 1.0;
			buf[(124 + i * nn) + jIter * n * nn] = 0.0;
			buf[(125 + i * nn) + jIter * n * nn] = yTex2;

			buf[(126 + i * nn) + jIter * n * nn] = xright;
			buf[(127 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(128 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(129 + i * nn) + jIter * n * nn] = 1.0;
			buf[(130 + i * nn) + jIter * n * nn] = 1.0;
			buf[(131 + i * nn) + jIter * n * nn] = 1.0;
			buf[(132 + i * nn) + jIter * n * nn] = 1.0;
			buf[(133 + i * nn) + jIter * n * nn] = 1.0;
			buf[(134 + i * nn) + jIter * n * nn] = yTex;

			buf[(135 + i * nn) + jIter * n * nn] = xright;
			buf[(136 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(137 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * i) * 0.0175);
			buf[(138 + i * nn) + jIter * n * nn] = 1.0;
			buf[(139 + i * nn) + jIter * n * nn] = 1.0;
			buf[(140 + i * nn) + jIter * n * nn] = 1.0;
			buf[(141 + i * nn) + jIter * n * nn] = 1.0;
			buf[(142 + i * nn) + jIter * n * nn] = 1.0;
			buf[(143 + i * nn) + jIter * n * nn] = yTex;

			buf[(144 + i * nn) + jIter * n * nn] = xleft;
			buf[(145 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(146 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(147 + i * nn) + jIter * n * nn] = 1.0;
			buf[(148 + i * nn) + jIter * n * nn] = 1.0;
			buf[(149 + i * nn) + jIter * n * nn] = 1.0;
			buf[(150 + i * nn) + jIter * n * nn] = 1.0;
			buf[(151 + i * nn) + jIter * n * nn] = 0.0;
			buf[(152 + i * nn) + jIter * n * nn] = yTex2;

			buf[(153 + i * nn) + jIter * n * nn] = xright;
			buf[(154 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(155 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-30.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(156 + i * nn) + jIter * n * nn] = 1.0;
			buf[(157 + i * nn) + jIter * n * nn] = 1.0;
			buf[(158 + i * nn) + jIter * n * nn] = 1.0;
			buf[(159 + i * nn) + jIter * n * nn] = 1.0;
			buf[(160 + i * nn) + jIter * n * nn] = 1.0;
			buf[(161 + i * nn) + jIter * n * nn] = yTex2;
			//backup
			yTex = 1 - parseFloat(i / n);
			yTex2 = 1 - parseFloat((i + 1) / n);

			buf[(162 + i * nn) + jIter * n * nn] = xleft;
			buf[(163 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * i) * 0.0175);
			buf[(164 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * i) * 0.0175);
			buf[(165 + i * nn) + jIter * n * nn] = 1.0;
			buf[(166 + i * nn) + jIter * n * nn] = 1.0;
			buf[(167 + i * nn) + jIter * n * nn] = 1.0;
			buf[(168 + i * nn) + jIter * n * nn] = 1.0;
			buf[(169 + i * nn) + jIter * n * nn] = 0.0;
			buf[(170 + i * nn) + jIter * n * nn] = yTex;

			buf[(171 + i * nn) + jIter * n * nn] = xleft;
			buf[(172 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(173 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(174 + i * nn) + jIter * n * nn] = 1.0;
			buf[(175 + i * nn) + jIter * n * nn] = 1.0;
			buf[(176 + i * nn) + jIter * n * nn] = 1.0;
			buf[(177 + i * nn) + jIter * n * nn] = 1.0;
			buf[(178 + i * nn) + jIter * n * nn] = 0.0;
			buf[(179 + i * nn) + jIter * n * nn] = yTex2;

			buf[(180 + i * nn) + jIter * n * nn] = xright;
			buf[(181 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * i) * 0.0175);
			buf[(182 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * i) * 0.0175);
			buf[(183 + i * nn) + jIter * n * nn] = 1.0;
			buf[(184 + i * nn) + jIter * n * nn] = 1.0;
			buf[(185 + i * nn) + jIter * n * nn] = 1.0;
			buf[(186 + i * nn) + jIter * n * nn] = 1.0;
			buf[(187 + i * nn) + jIter * n * nn] = 1.0;
			buf[(188 + i * nn) + jIter * n * nn] = yTex;

			buf[(189 + i * nn) + jIter * n * nn] = xright;
			buf[(190 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * i) * 0.0175);
			buf[(191 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * i) * 0.0175);
			buf[(192 + i * nn) + jIter * n * nn] = 1.0;
			buf[(193 + i * nn) + jIter * n * nn] = 1.0;
			buf[(194 + i * nn) + jIter * n * nn] = 1.0;
			buf[(195 + i * nn) + jIter * n * nn] = 1.0;
			buf[(196 + i * nn) + jIter * n * nn] = 1.0;
			buf[(197 + i * nn) + jIter * n * nn] = yTex;

			buf[(198 + i * nn) + jIter * n * nn] = xleft;
			buf[(199 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(200 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(201 + i * nn) + jIter * n * nn] = 1.0;
			buf[(202 + i * nn) + jIter * n * nn] = 1.0;
			buf[(203 + i * nn) + jIter * n * nn] = 1.0;
			buf[(204 + i * nn) + jIter * n * nn] = 1.0;
			buf[(205 + i * nn) + jIter * n * nn] = 0.0;
			buf[(206 + i * nn) + jIter * n * nn] = yTex2;

			buf[(207 + i * nn) + jIter * n * nn] = xright;
			buf[(208 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(209 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((150.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(210 + i * nn) + jIter * n * nn] = 1.0;
			buf[(211 + i * nn) + jIter * n * nn] = 1.0;
			buf[(212 + i * nn) + jIter * n * nn] = 1.0;
			buf[(213 + i * nn) + jIter * n * nn] = 1.0;
			buf[(214 + i * nn) + jIter * n * nn] = 1.0;
			buf[(215 + i * nn) + jIter * n * nn] = yTex2;
			//backmiddle
			yTex = 1 - parseFloat(i / n);
			yTex2 = 1 - parseFloat((i + 1) / n);

			buf[(216 + i * nn) + jIter * n * nn] = xleft;
			buf[(217 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * i) * 0.0175);
			buf[(218 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * i) * 0.0175);
			buf[(219 + i * nn) + jIter * n * nn] = 1.0;
			buf[(220 + i * nn) + jIter * n * nn] = 1.0;
			buf[(221 + i * nn) + jIter * n * nn] = 1.0;
			buf[(222 + i * nn) + jIter * n * nn] = 1.0;
			buf[(223 + i * nn) + jIter * n * nn] = 0.0;
			buf[(224 + i * nn) + jIter * n * nn] = yTex;

			buf[(225 + i * nn) + jIter * n * nn] = xleft;
			buf[(226 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(227 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(228 + i * nn) + jIter * n * nn] = 1.0;
			buf[(229 + i * nn) + jIter * n * nn] = 1.0;
			buf[(230 + i * nn) + jIter * n * nn] = 1.0;
			buf[(231 + i * nn) + jIter * n * nn] = 1.0;
			buf[(232 + i * nn) + jIter * n * nn] = 0.0;
			buf[(233 + i * nn) + jIter * n * nn] = yTex2;

			buf[(234 + i * nn) + jIter * n * nn] = xright;
			buf[(235 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * i) * 0.0175);
			buf[(236 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * i) * 0.0175);
			buf[(237 + i * nn) + jIter * n * nn] = 1.0;
			buf[(238 + i * nn) + jIter * n * nn] = 1.0;
			buf[(239 + i * nn) + jIter * n * nn] = 1.0;
			buf[(240 + i * nn) + jIter * n * nn] = 1.0;
			buf[(241 + i * nn) + jIter * n * nn] = 1.0;
			buf[(242 + i * nn) + jIter * n * nn] = yTex;

			buf[(243 + i * nn) + jIter * n * nn] = xright;
			buf[(244 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * i) * 0.0175);
			buf[(245 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * i) * 0.0175);
			buf[(246 + i * nn) + jIter * n * nn] = 1.0;
			buf[(247 + i * nn) + jIter * n * nn] = 1.0;
			buf[(248 + i * nn) + jIter * n * nn] = 1.0;
			buf[(249 + i * nn) + jIter * n * nn] = 1.0;
			buf[(250 + i * nn) + jIter * n * nn] = 1.0;
			buf[(251 + i * nn) + jIter * n * nn] = yTex;

			buf[(252 + i * nn) + jIter * n * nn] = xleft;
			buf[(253 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(254 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(255 + i * nn) + jIter * n * nn] = 1.0;
			buf[(256 + i * nn) + jIter * n * nn] = 1.0;
			buf[(257 + i * nn) + jIter * n * nn] = 1.0;
			buf[(258 + i * nn) + jIter * n * nn] = 1.0;
			buf[(259 + i * nn) + jIter * n * nn] = 0.0;
			buf[(260 + i * nn) + jIter * n * nn] = yTex2;

			buf[(261 + i * nn) + jIter * n * nn] = xright;
			buf[(262 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(263 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((210.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(264 + i * nn) + jIter * n * nn] = 1.0;
			buf[(265 + i * nn) + jIter * n * nn] = 1.0;
			buf[(266 + i * nn) + jIter * n * nn] = 1.0;
			buf[(267 + i * nn) + jIter * n * nn] = 1.0;
			buf[(268 + i * nn) + jIter * n * nn] = 1.0;
			buf[(269 + i * nn) + jIter * n * nn] = yTex2;
			/*back down*/
			yTex = 1 - parseFloat(i / n);
			yTex2 = 1 - parseFloat((i + 1) / n);

			buf[(270 + i * nn) + jIter * n * nn] = xleft;
			buf[(271 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(272 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(273 + i * nn) + jIter * n * nn] = 1.0;
			buf[(274 + i * nn) + jIter * n * nn] = 1.0;
			buf[(275 + i * nn) + jIter * n * nn] = 1.0;
			buf[(276 + i * nn) + jIter * n * nn] = 1.0;
			buf[(277 + i * nn) + jIter * n * nn] = 0.0;
			buf[(278 + i * nn) + jIter * n * nn] = yTex;

			buf[(279 + i * nn) + jIter * n * nn] = xleft;
			buf[(280 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(281 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(282 + i * nn) + jIter * n * nn] = 1.0;
			buf[(283 + i * nn) + jIter * n * nn] = 1.0;
			buf[(284 + i * nn) + jIter * n * nn] = 1.0;
			buf[(285 + i * nn) + jIter * n * nn] = 1.0;
			buf[(286 + i * nn) + jIter * n * nn] = 0.0;
			buf[(287 + i * nn) + jIter * n * nn] = yTex2;

			buf[(288 + i * nn) + jIter * n * nn] = xright;
			buf[(289 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(290 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(291 + i * nn) + jIter * n * nn] = 1.0;
			buf[(292 + i * nn) + jIter * n * nn] = 1.0;
			buf[(293 + i * nn) + jIter * n * nn] = 1.0;
			buf[(294 + i * nn) + jIter * n * nn] = 1.0;
			buf[(295 + i * nn) + jIter * n * nn] = 1.0;
			buf[(296 + i * nn) + jIter * n * nn] = yTex;

			buf[(297 + i * nn) + jIter * n * nn] = xright;
			buf[(298 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(299 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * i) * 0.0175);
			buf[(300 + i * nn) + jIter * n * nn] = 1.0;
			buf[(301 + i * nn) + jIter * n * nn] = 1.0;
			buf[(302 + i * nn) + jIter * n * nn] = 1.0;
			buf[(303 + i * nn) + jIter * n * nn] = 1.0;
			buf[(304 + i * nn) + jIter * n * nn] = 1.0;
			buf[(305 + i * nn) + jIter * n * nn] = yTex;

			buf[(306 + i * nn) + jIter * n * nn] = xleft;
			buf[(307 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(308 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(309 + i * nn) + jIter * n * nn] = 1.0;
			buf[(310 + i * nn) + jIter * n * nn] = 1.0;
			buf[(311 + i * nn) + jIter * n * nn] = 1.0;
			buf[(312 + i * nn) + jIter * n * nn] = 1.0;
			buf[(313 + i * nn) + jIter * n * nn] = 0.0;
			buf[(314 + i * nn) + jIter * n * nn] = yTex2;

			buf[(315 + i * nn) + jIter * n * nn] = xright;
			buf[(316 + i * nn) + jIter * n * nn] = 0.68 * Math.sin((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(317 + i * nn) + jIter * n * nn] = 0.68 * Math.cos((-90.0 - 60.0 / n * (i + 1)) * 0.0175);
			buf[(318 + i * nn) + jIter * n * nn] = 1.0;
			buf[(319 + i * nn) + jIter * n * nn] = 1.0;
			buf[(320 + i * nn) + jIter * n * nn] = 1.0;
			buf[(321 + i * nn) + jIter * n * nn] = 1.0;
			buf[(322 + i * nn) + jIter * n * nn] = 1.0;
			buf[(323 + i * nn) + jIter * n * nn] = yTex2;
		}
		jIter++;
	}
	console.log(buf.length)
	buf[buf.length] = -1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0//0
	buf[buf.length] = 1.0//0

	buf[buf.length] = -1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0//0
	buf[buf.length] = 0.0//1

	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0//1
	buf[buf.length] = 1.0//0

	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0//1
	buf[buf.length] = 1.0//0

	buf[buf.length] = -1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0//0 
	buf[buf.length] = 0.0//1

	buf[buf.length] = 1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0//1
	buf[buf.length] = 0.0//1


	//ащк дшту

	fill_buff_lines(buf, a0, a1, a2, a3, a4, a5, a6)
	fill_buff_lines(buf, b0, b1, b2, b3, b4, b5, b6)
	fill_buff_lines(buf, c0, c1, c2, c3, c4, c5, c6)
	fill_buff_lines(buf, a0, a1, a2, b3, a4, a5, a6)
	fill_buff_lines(buf, b0, b1, b2, a3, b4, b5, b6)
	fill_buff_lines(buf, b0, b1, b2, c3, b4, b5, b6)
	fill_buff_lines(buf, c0, c1, c2, b3, c4, c5, c6)
	fill_buff_lines(buf, a0, a1, b2, c3, b4, a5, a6)
	fill_buff_lines(buf, c0, c1, b2, a3, b4, c5, c6)
	fill_buff_lines(buf, a0, a1, b2, b3, b4, a5, a6)
	fill_buff_lines(buf, b0, b1, a2, a3, a4, b5, b6)
	fill_buff_lines(buf, b0, b1, c2, c3, c4, b5, b6)
	fill_buff_lines(buf, c0, c1, b2, b3, b4, c5, c6)
	fill_buff_lines(buf, a0, a1, a2, b3, c4, c5, c6)
	fill_buff_lines(buf, c0, c1, c2, b3, a4, a5, a6)
	fill_buff_lines(buf, a0, a1, b2, a3, b4, a5, a6)
	fill_buff_lines(buf, b0, b1, a2, b3, a4, b5, b6)
	fill_buff_lines(buf, b0, b1, c2, b3, c4, b5, b6)
	fill_buff_lines(buf, c0, c1, b2, c3, b4, c5, c6)

	//vertical drum lines

	buf[buf.length] = -0.48
	buf[buf.length] = 0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	buf[buf.length] = -0.48
	buf[buf.length] = -0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0



	buf[buf.length] = -0.16
	buf[buf.length] = 0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	buf[buf.length] = -0.16
	buf[buf.length] = -0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0



	buf[buf.length] = 0.16
	buf[buf.length] = 0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	buf[buf.length] = 0.16
	buf[buf.length] = -0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	buf[buf.length] = 0.48
	buf[buf.length] = 0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	buf[buf.length] = 0.48
	buf[buf.length] = -0.68
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0

	var vertexTexCoordBuffer = gl.createBuffer();
	if (!vertexTexCoordBuffer) {
		console.log('Failed to create the buffer object');
		return -1;
	}
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
	var bbuf = new Float32Array(buf)
	gl.bufferData(gl.ARRAY_BUFFER, bbuf, gl.STATIC_DRAW);
	var FSIZE = bbuf.BYTES_PER_ELEMENT;
	var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
	if (a_Position < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
	}
	gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 9, 0);
	gl.enableVertexAttribArray(a_Position);
	console.log(gl.getError());
	var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
	console.log(gl.getError());
	/*
	if (a_Color < 0) {
	  console.log('Failed to get the storage location of a_Color');
	  return -1;
	}
	*/
	gl.vertexAttribPointer(a_Color, 4, gl.FLOAT, false, FSIZE * 9, FSIZE * 3);
	gl.enableVertexAttribArray(a_Color);
	var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
	if (a_TexCoord < 0) {
		console.log('Failed to get the storage location of a_TexCoord');
		return -1;
	}
	gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 9, FSIZE * 7);
	gl.enableVertexAttribArray(a_TexCoord);
	//end function
}
function requestCORSIfNotSameOrigin(img, url) {
	if ((new URL(url, window.location.href)).origin !== window.location.origin) {
		img.crossOrigin = "";
	}
}
function initTextures(gl) {
	var texturefon = gl.createTexture();
	var u_Samplerq = gl.getUniformLocation(gl.program, 'u_Sampler');
	var fon = new Image();
	requestCORSIfNotSameOrigin(fon,/*'border.png'*/"https://s6.imgcdn.dev/Wk8Sl.png");
	fon.crossOrigin = "anonymous";
	fon.onload = function () { loadTexture(gl, texturefon, u_Samplerq, fon, 0); };
	fon.src = "https://s6.imgcdn.dev/Wk8Sl.png";//'border.png'
	LoadDrum(gl);
	return true;
}
function LoadDrum(gl) {
	var texturesdrum1, texturesdrum2, texturesdrum3, texturesdrum4, texturesdrum5, texturesdrum6, texturesdrum7,
		u_Sampler1, u_Sampler2, u_Sampler3, u_Sampler4, u_Sampler5, u_Sampler6, u_Sampler7
		, images1, images2, images3, images4, images5, images6, images7,
		paths1, paths2, paths3, paths4, paths5, paths6, paths7;
	paths1 = "https://s6.imgcdn.dev/WkXEM.png";//"auto1.png";//auto1
	paths2 = "https://s6.imgcdn.dev/WkHO0.png";//'auto2.png';//auto2
	paths3 = "https://s6.imgcdn.dev/WkF5e.png";//'auto3.png';//auto3
	paths4 = "https://s6.imgcdn.dev/WkqYC.png";//"auto4.png";//auto4
	paths5 = "https://s6.imgcdn.dev/WketS.png";//"auto5.png";//auto5
	paths6 = "https://s6.imgcdn.dev/WkbzH.png";//"bonus.png";//bonus
	paths7 = "https://s6.imgcdn.dev/WkEQd.jpg";//"wild.jpg";//wild

	texturesdrum1 = gl.createTexture();
	u_Sampler1 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images1 = new Image();
	requestCORSIfNotSameOrigin(images1, paths1);
	images1.crossOrigin = "anonymous";
	images1.onload = function () { loadTexture(gl, texturesdrum1, u_Sampler1, images1, 1); };
	images1.src = paths1;



	texturesdrum2 = gl.createTexture();
	u_Sampler2 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images2 = new Image();
	requestCORSIfNotSameOrigin(images2, paths2);
	images2.crossOrigin = "anonymous";
	images2.onload = function () { loadTexture(gl, texturesdrum2, u_Sampler2, images2, 2); };
	images2.src = paths2;



	texturesdrum3 = gl.createTexture();
	u_Sampler3 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images3 = new Image();
	requestCORSIfNotSameOrigin(images3, paths3);
	images3.crossOrigin = "anonymous";
	images3.onload = function () { loadTexture(gl, texturesdrum3, u_Sampler3, images3, 3); };
	images3.src = paths3;



	texturesdrum4 = gl.createTexture();
	u_Sampler4 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images4 = new Image();
	requestCORSIfNotSameOrigin(images4, paths4);
	images4.crossOrigin = "anonymous";
	images4.onload = function () { loadTexture(gl, texturesdrum4, u_Sampler4, images4, 4); };
	images4.src = paths4;


	texturesdrum5 = gl.createTexture();
	u_Sampler5 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images5 = new Image();
	requestCORSIfNotSameOrigin(images5, paths5);
	images5.crossOrigin = "anonymous";
	images5.onload = function () { loadTexture(gl, texturesdrum5, u_Sampler5, images5, 5); };
	images5.src = paths5;


	texturesdrum6 = gl.createTexture();
	u_Sampler6 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images6 = new Image();
	requestCORSIfNotSameOrigin(images6, paths6);
	images6.crossOrigin = "anonymous";
	images6.onload = function () { loadTexture(gl, texturesdrum6, u_Sampler6, images6, 6); };
	images6.src = paths6;


	texturesdrum7 = gl.createTexture();
	u_Sampler7 = gl.getUniformLocation(gl.program, 'u_Sampler');
	images7 = new Image();
	requestCORSIfNotSameOrigin(images7, paths7);
	images7.crossOrigin = "anonymous";
	images7.onload = function () { loadTexture(gl, texturesdrum7, u_Sampler7, images7, 7); };
	images7.src = paths7;
}
function loadTexture(gl, textureID, u_SamplerID, imageID, numID) {
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	switch (numID) {
		case 0:
			{
				gl.activeTexture(gl.TEXTURE0);
				break;
			}
		case 1:
			{
				gl.activeTexture(gl.TEXTURE1);
				break;
			}
		case 2:
			{
				gl.activeTexture(gl.TEXTURE2);
				break;
			}
		case 3:
			{
				gl.activeTexture(gl.TEXTURE3);
				break;
			}
		case 4:
			{
				gl.activeTexture(gl.TEXTURE4);
				break;
			}
		case 5:
			{
				gl.activeTexture(gl.TEXTURE5);
				break;
			}
		case 6:
			{
				gl.activeTexture(gl.TEXTURE6);
				break;
			}
		case 7:
			{
				gl.activeTexture(gl.TEXTURE7);
				break;
			}
		case 8:
			{
				gl.activeTexture(gl.TEXTURE8);
				break;
			}
		default:
			{
				break;
			}
	}
	gl.bindTexture(gl.TEXTURE_2D, textureID);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, imageID);
	if (gl.getError())
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageID);
	if (gl.getError())
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGBA, gl.UNSIGNED_BYTE, imageID);
	if (gl.getError())
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGB, gl.UNSIGNED_BYTE, imageID);
	gl.uniform1i(u_SamplerID, numID);
	switch (numID) {
		case 0:
			{
				textures1 = textureID;
				//Tex.push(textures1);
				ready1 = true;
				break;
			}
		case 1:
			{
				textures2 = textureID;
				Tex.push(textures2);
				ready2 = true;
				break;
			}
		case 2:
			{
				textures3 = textureID;
				Tex.push(textures3);
				ready3 = true;
				break;
			}
		case 3:
			{
				textures4 = textureID;
				Tex.push(textures4);
				ready4 = true;
				break;
			}
		case 4:
			{
				textures5 = textureID;
				Tex.push(textures5);
				ready5 = true;
				break;
			}
		case 5:
			{
				textures6 = textureID;
				Tex.push(textures6);
				ready6 = true;
				break;
			}
		case 6:
			{
				textures7 = textureID;
				Tex.push(textures7);
				ready7 = true;
				break;
			}
		case 7:
			{
				textures8 = textureID;
				Tex.push(textures8);
				ready8 = true;
				break;
			}
		default:
			{
				break;
			}
	}
}
function draw(gl, currentAngle, modelMatrix, u_ModelMatrix, u_ProjMatrix, projMatrix, nf) {

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
	var k = -1;
	for (var j = 0; j < 5; j++) {

		if (startRotate[j])
			modelMatrix.setRotate(currentAngle[j], 1, 0, 0);
		gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i, 6);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i + 6, 6);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i + 12, 6);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i + 18, 6);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i + 24, 6);
		gl.bindTexture(gl.TEXTURE_2D, Tex[Drums[++k]]);
		for (var i = 0 + j * n; i < n + j * n; i++)
			gl.drawArrays(gl.TRIANGLES, 36 * i + 30, 6);

		gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
		modelMatrix.setRotate(0, 1, 0, 0);

	}
	modelMatrix.setRotate(0, 1, 0, 0);
	gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
	gl.bindTexture(gl.TEXTURE_2D, textures1);
	if (ready1 && ready2 && ready3 && ready4 && ready5 && ready6 && ready7 && ready8)
		gl.drawArrays(gl.TRIANGLES, 36 * 5 * n, 6);
	if (flag_win[0])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6, 7);
	if (flag_win[1])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 7, 7);
	if (flag_win[2])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 14, 7);
	if (flag_win[3])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 21, 7);
	if (flag_win[4])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 28, 7);
	if (flag_win[5])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 35, 7);
	if (flag_win[6])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 42, 7);
	if (flag_win[7])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 49, 7);
	if (flag_win[8])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 56, 7);
	if (flag_win[9])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 63, 7);
	if (flag_win[10])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 70, 7);
	if (flag_win[11])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 77, 7);
	if (flag_win[12])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 84, 7);
	if (flag_win[13])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 91, 7);
	if (flag_win[14])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 98, 7);
	if (flag_win[15])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 105, 7);
	if (flag_win[16])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 112, 7);
	if (flag_win[17])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 119, 7);
	if (flag_win[18])
		gl.drawArrays(gl.LINE_STRIP, 36 * 5 * n + 6 + 126, 7);


	gl.drawArrays(gl.LINES, 36 * 5 * n + 6 + 133, 2);
	gl.drawArrays(gl.LINES, 36 * 5 * n + 6 + 135, 2);
	gl.drawArrays(gl.LINES, 36 * 5 * n + 6 + 137, 2);
	gl.drawArrays(gl.LINES, 36 * 5 * n + 6 + 139, 2);
}
