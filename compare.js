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
	'varying vec4 v_Color;\n'+
	'void main() {\n' +
	'gl_FragColor = texture2D(u_Sampler, v_TexCoord)+v_Color;\n' +
	'}\n';
	var textures1, textures2;
	
	var width;
    var height ;
	
        // Чтение пикселей из второго канваса
    var pixels2;
    var pixels1;
	var buff=[]
function main() {
	
	buff.push(1.0)
	buff.push(1.0)
	buff.push(1.0)
	buff.push(0.0)
	buff.push(0.0)
	buff.push(1.0)
	buff.push(0.0)
	buff.push(1.0)
	buff.push(1.0)
	buff.push(0.0)
	buff.push(0.0)
	buff.push(0.0)
	var canvas1 = document.getElementById('canvas1');
	var canvas2 = document.getElementById('canvas2');
	var nf = document.getElementById('nearFar');
	var nf2 = document.getElementById('nearFar');
	var gl1 = getWebGLContext(canvas1);
	var gl2 = getWebGLContext(canvas2);
	if (!gl1) {
		console.log('Failed to get the rendering context for WebGL');
		return;
	}
	if (!initShaders(gl1, VSHADER_SOURCE, FSHADER_SOURCE)) {
		console.log('Failed to intialize shaders.');
		return;
	}
	initShaders(gl2, VSHADER_SOURCE, FSHADER_SOURCE)
	var nj = initVertexBuffers(gl1,false);
	var nj2 = initVertexBuffers(gl2,true);
	if (nj < 0) {
		console.log('Failed to set the vertex information');
		return;
	}
	var u_ModelMatrix = gl1.getUniformLocation(gl1.program, 'u_ModelMatrix');
	var u_ModelMatrix2 = gl2.getUniformLocation(gl2.program, 'u_ModelMatrix');
	if (!u_ModelMatrix) {
		console.log('Failed to get the storage location of u_ModelMatrix');
		return;
	}
	var modelMatrix = new Matrix4();
	var modelMatrix2 = new Matrix4();
	var u_ProjMatrix = gl1.getUniformLocation(gl1.program, 'u_ProjMatrix');
	var u_ProjMatrix2 = gl2.getUniformLocation(gl2.program, 'u_ProjMatrix');
	var projMatrix = new Matrix4();
	var projMatrix2 = new Matrix4();
	var g_near = -2.0, g_far = 2.1;
	projMatrix.setOrtho(-1, 1, -1, 1, g_near, g_far);
	projMatrix2.setOrtho(-1, 1, -1, 1, g_near, g_far);
	nf.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	nf2.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	gl1.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
	gl2.uniformMatrix4fv(u_ProjMatrix2, false, projMatrix2.elements);
	nf.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	nf2.innerHTML = 'near: ' + g_near + ', far: ' + g_far;
	if (!initTextures(gl1,gl2)) {
		console.log('Failed to initialize the texture.');
		return;
	}
	gl1.clearColor(0.0, 0.0, 0.0, 1.0);
	gl2.clearColor(0.0, 0.0, 0.0, 1.0);

	width = canvas1.width;
    height = canvas1.height;
	
    pixels1 = new Uint8Array(width * height * 4);
    pixels2 = new Uint8Array(width * height * 4);
	var tick = function () {
		draw(gl1,  modelMatrix, u_ModelMatrix, u_ProjMatrix, projMatrix, nf,gl2,  modelMatrix2, u_ModelMatrix2, u_ProjMatrix2, projMatrix2, nf2);
		requestAnimationFrame(tick, canvas1);
		requestAnimationFrame(tick, canvas2);
	};
	tick();
	//initVertexBuffers(gl1,false);
	//initVertexBuffers(gl2,true);
}
function initVertexBuffers(gl,b) {
	var buf = [];
	buf[buf.length] = -1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if (b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[0]
			buf[buf.length] = buff[1]
		}
	}
	else
	{
		buf[buf.length] = 1.0//0
		buf[buf.length] = 1.0//0
	}

	buf[buf.length] = -1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if(b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[2]
			buf[buf.length] = buff[3]
		}
	}
	else
	{
		buf[buf.length] = 1.0//0
		buf[buf.length] = 0.0//1	
	}
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if(b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[4]
			buf[buf.length] = buff[5]
		}
	}
	else
	{
		buf[buf.length] = 0.0//1
		buf[buf.length] = 1.0//0	
	}
	buf[buf.length] = 1.0
	buf[buf.length] = 1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if(b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[6]
			buf[buf.length] = buff[7]
		}
	}
	else
	{
		buf[buf.length] = 0.0//1
		buf[buf.length] = 1.0//0
		
	}
	buf[buf.length] = -1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if(b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[8] 
			buf[buf.length] = buff[9]
		}
	}
	else
	{
		buf[buf.length] = 1.0//0 
		buf[buf.length] = 0.0//1	
	}
	buf[buf.length] = 1.0
	buf[buf.length] = -1.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 0.0
	buf[buf.length] = 1.0
	if(b===true)
	{
		if (buff)
		{
			buf[buf.length] = buff[10]
			buf[buf.length] = buff[11]
		}
	}
	else
	{
		buf[buf.length] = 0.0//1
		buf[buf.length] = 0.0//1	
	}
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
	var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
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
function initTextures(gl1,gl2) {
		var texturesdrum1, texturesdrum2,
		u_Sampler1, u_Sampler2,
		images1, images2,
		paths1, paths2;
		
		paths1 = "https://s6.imgcdn.dev/qzJu2.png";
		paths2 = "https://s6.imgcdn.dev/qzo1i.png";
		paths3 = "https://s6.imgcdn.dev/qzpWH.png";
		paths4 = "https://s6.imgcdn.dev/qaYhS.png";
		paths5 = "https://s6.imgcdn.dev/qajZe.png";
		paths6 = "https://s6.imgcdn.dev/qahPC.png";
		paths7 = "https://s6.imgcdn.dev/XVgUH.png";
		pathscard = "https://s6.imgcdn.dev/pZgXO.png";
	
	texturesdrum1 = gl1.createTexture();
	u_Sampler1 = gl1.getUniformLocation(gl1.program, 'u_Sampler');
	images1 = new Image();
	requestCORSIfNotSameOrigin(images1, paths1);
	images1.crossOrigin = "anonymous";
	images1.onload = function () { loadTexture(gl1, texturesdrum1, u_Sampler1, images1, 1); };
	images1.src = paths1;



	texturesdrum2 = gl2.createTexture();
	u_Sampler2 = gl2.getUniformLocation(gl2.program, 'u_Sampler');
	images2 = new Image();
	requestCORSIfNotSameOrigin(images2, paths2);
	images2.crossOrigin = "anonymous";
	images2.onload = function () { loadTexture(gl2, texturesdrum2, u_Sampler2, images2, 2); };
	images2.src = paths2;
	return true;
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
		case 1:
			{
				textures1 = textureID;
				break;
			}
		case 2:
			{
				textures2 = textureID;
				break;
			}
		default:
			{
				break;
			}
	}
}
function draw(gl,modelMatrix, u_ModelMatrix, u_ProjMatrix, projMatrix, nf,gl2,  modelMatrix2, u_ModelMatrix2, u_ProjMatrix2, projMatrix2, nf2) {

	initVertexBuffers(gl2,true);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
	//modelMatrix.setRotate(0, 1, 0, 0);
	gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
	gl.bindTexture(gl.TEXTURE_2D, textures1);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
	gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);
	gl2.enable(gl2.DEPTH_TEST);
	gl2.uniformMatrix4fv(u_ProjMatrix2, false, projMatrix2.elements);
	//modelMatrix.setRotate(0, 1, 0, 0);
	gl2.uniformMatrix4fv(u_ModelMatrix2, false, modelMatrix2.elements);
	gl2.bindTexture(gl2.TEXTURE_2D, textures2);
	gl2.drawArrays(gl2.TRIANGLES, 0, 6);
	//if (!t)
	{
		t=true;
		 gl2.readPixels(0, 0, width, height, gl2.RGBA, gl2.UNSIGNED_BYTE, pixels2);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels1);

        // Обработка прочитанных данных
       // console.log(pixels); // Массив с данными о цветах пикселей
	   // Сравнение пикселей
        let diffCount = 0;
        for (let i = 0; i < pixels1.length; i += 4) {
			//if(i%40000==0)
				//console.log(i);
            const rDiff = pixels1[i] != pixels2[i];
            const gDiff = pixels1[i + 1] != pixels2[i + 1];
            const bDiff = pixels1[i + 2] != pixels2[i + 2];
            const aDiff = pixels1[i + 3] != pixels2[i + 3];

            if (rDiff || gDiff || bDiff || aDiff) {
                diffCount++;
            }
        }

        //console.log(`Количество различий: ${diffCount}`);
		if(diffCount==0)
			console.log(buff);
	}

}
// Пример использования
main()
