(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.stoneai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inner
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(84,84,84,0.62)").s().p("Ag0JqQi3gKi6gNQhZgGg3giQgggUgIgSQgLgTgHgSQgMgiALgQQAFgGBaAjQBZAiAAgCIBcAcQBqAeBHABIDsAEQC5ACA8gJIBOgcQBIgbAxgGQBCgHAjgCIAUAAQADAAgRAVQgVAYgbAWQhUBGhhANQgaAEg9AAQhzAAjtgNgAotmnQgMgQAegqQAOgWAUgXQAGgNA8gdQBRgoBYgFQJdgRAXAAQAxABAsATQAyAVAYAlQAIALAUAXQAQATAGALQgegIgjgNIhNgcQg8gKi5ACIjtAFQhGABhrAdIhbAdQAAgDh1AiQhlAcgTAAIgDgBg");
	this.shape.setTransform(62.5,64.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AEVp4QACAABEgBQBMAEAuAbQAxAdApBBQAUAgAMAaQAAACAGHiQABBKAZCqQAVCIgNA6QgMA4hfA0QgpAVhJAaQghANkegLQkEgKjwgSQi2gOgkheQgLgeAFghIAHgcQAJjGAJjGQALjbADhCQAFhkADgKQAOgyAMgaQAWgyAdgVQA9gsBggXQAxgLAogEQIcgKAAgEg");
	this.shape_1.setTransform(62.8,64.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ABbJ1QkEgKjwgSQi2gOgkheQgLgeAFghIAHgcIASmMIAOkdQAFhkADgKQAOgyAMgaQAWgyAdgVQA9gsBggXQAxgLAogEQIcgKAAgEIBGgBQBMAEAuAbQAxAdApBBQAUAgAMAaIAGHkQABBKAZCqQAVCIgNA6QgMA4hfA0QgpAVhJAaQgSAHhdAAQhNAAiDgFg");
	this.shape_2.setTransform(62.8,64.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AmZGaQi2gJgkhCQgLgUAFgXIAHgUIASkQIAOjEQAFhGADgHQAOgiAMgTQAWgiAdgOQA9geBggQQAxgIAogDQIcgHAAgCIBGgBQBMADAuASQAxAUApAtQAUAWAMATIAGFNQABAzAZB2QAVBegNAnQgMAog3AfQgkAUglAKQhGARhWADQnGgRkigPg");
	this.shape_3.setTransform(64.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-0.3,132.8,134.3);


(lib.screenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXvAgbMAAAhA1MAvfAAAMAAABA1g");
	this.shape.setTransform(152,207.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.screenFlash, new cjs.Rectangle(0,0,304,415), null);


(lib.newbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.859)").s().p("AoxFeQkAiRAAjNQAAjMEAiRQEBiRFpAAQFrAAEACRQAoAXAhAXQhhBuAACFQAAARABARQAHBCAgA9QAqBOBUBEQg5A3hVAwQkACRlrAAQlpAAkBiRg");
	this.shape.setTransform(-94.4,179.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.776)").s().p("AqpGBQhBglgygoQhVhEgphOQghg9gGhDQgCgRAAgRQAAiEBihuQBEhMB0hCQEbigGOAAQGPAAEaCgQEbCfAADhQAADikbCfQkaCgmPAAQmOAAkbigg");
	this.shape_1.setTransform(67.2,173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// stars
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADeA+QACAEADADAETCgIAAABAkSifQAEAAAEgB");
	this.shape_2.setTransform(91.7,-155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,204,0.757)").s().p("AlsFsQiWiWAAjWQAAjVCWiXQB+h9CqgVIAIgBQAegDAeAAQDWAACWCWQAkAkAcAoIAFAHQAdAsATAvIAAABQAiBYAABlQAADWiXCWQiWCXjWAAQjVAAiXiXgAhljKIgGABQhzAPhWBVQhmBlAACSQAACRBmBmQBnBnCRAAQCQAABnhnQBmhmAAiRQAAhGgXg7QgNghgUgcIgDgGQgTgagYgZQhnhniQAAQgVAAgUACg");
	this.shape_3.setTransform(71.1,-120.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,204,0.62)").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBWhVBzgOIAGgBQAUgCAUAAQCRAABnBmQAYAZATAbIADAFQAUAdANAhQAXA7AABFQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape_4.setTransform(65,-105.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,123,0.447)").s().p("AzeZmIg9AIIA2gdIgag3IAsAqIAsgqIgbA3IA3AdIg9gIIgLA8gArBYCIhSAMIBJgoIgkhKIA8A5IA8g5IgkBKIBJAoIhSgMIgPBSgAiaVzIhSAMIBJgnIgkhLIA8A5IA8g5IglBLIBKAnIhTgMIgOBSgAMQUfIg5AIIAygbIgYgzIAoAnIAqgnIgZAzIAyAbIg4gIIgLA3gA1NRqIhTALIBKgnIglhLIA8A6IA8g6IgkBLIBJAnIhSgLIgPBSgADpRCIhSALIBJgnIgkhLIA7A6IA9g6IglBLIBKAnIhTgLIgPBRgAUxQBIhSALIBJgnIgkhLIA8A6IA8g6IglBLIBKAnIhTgLIgOBSgAqTOJIhSAMIBJgnIgkhLIA8A6IA8g6IgkBLIBJAnIhSgMIgPBSgAhDLQIhTALIBKgnIglhLIA8A6IA7g6IgjBLIBIAnIhRgLIgPBRgAJ7KBIg2AIIAwgaIgYgxIAoAmIAngmIgYAxIAxAaIg2gIIgKA3gAziIXIhSAMIBJgoIgkhKIA7A5IA9g5IglBKIBKAoIhTgMIgPBSgAUxFdIhSAMIBJgoIgkhKIA8A5IA8g5IglBKIBKAoIhTgMIgOBSgApTFaIgsAGIAngVIgUgnIAgAeIAggeIgTAnIAnAVIgsgGIgIArgAB9EaIhSAMIBJgoIgkhKIA8A5IA8g5IgkBKIBJAoIhSgMIgPBSgAKvBiIhTALIBKgnIglhKIA8A5IA8g5IgkBKIBJAnIhSgLIgPBSgAyMjLIhSAMIBJgoIgkhKIA8A5IA8g5IgkBKIBJAoIhSgMIgPBSgAAnkxIhRAMIBIgoIgjhKIA6A5IA9g5IglBKIBKAoIhTgMIgPBSgAJImXIhSAMIBJgoIgkhKIA8A5IA8g5IgkBKIBJAoIhSgMIgPBSgAR2oqIgvAGIApgWIgUgrIAiAhIAighIgVArIAqAWIgvgGIgIAvgAzxrOIgxAHIAsgXIgWgsIAkAiIAjgiIgVAsIArAXIgxgHIgIAxgAg9s0IgvAHIAqgXIgVgqIAiAgIAjggIgVAqIApAXIgugHIgJAvgAo8uqIhTAMIBKgnIglhLIA8A6IA8g6IgkBLIBJAnIhSgMIgPBSgAyW0UIiKATIB7hCIg9h+IBkBhIBmhhIg9B+IB7BCIiKgTIgaCJgATfy+IAAAAIAAAAgASq0gIAQgQIgLAXIgFgHgAAn2CIhRAMIBIgoIgjhKIA6A5IA9g5IglBKIBKAoIhTgMIgPBSgAoE3UIhSALIBJgnIgkhLIA8A6IA8g6IglBLIBKAnIhTgLIgOBSgAKv46IhTALIBKgnIglhLIA8A6IA8g6IgkBLIBJAnIhSgLIgLA7IgIABg");
	this.shape_5.setTransform(-5.5,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// gradient
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape_6.setTransform(-7.9,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#0000FF","#000000"],[0,1],-12.1,83.9,0,-12.1,83.9,327).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_7.setTransform(-7.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// bg colour
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("A1Yd7IgBAAMAAAg71MAqzAAAIAAAB");
	this.shape_8.setTransform(-21,-3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("A3bfQIAAirMAAAg70MAqyAAAIEFAAMAAAA+fg");
	this.shape_9.setTransform(-7.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newbg, new cjs.Rectangle(-176.1,-195.9,339.7,424.7), null);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("press any key to fly", "21px 'Showcard Gothic'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(118.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructions, new cjs.Rectangle(0,0,237,109.3), null);


(lib.hitpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("ABRAAQAAAhgYAYQgYAYghAAQghAAgYgYQgXgYAAghQAAghAXgYQAYgXAhAAQAhAAAYAXQAYAYAAAhg");
	this.shape.setTransform(21.9,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("Ag4A5QgYgYAAghQAAghAYgXQAXgYAhAAQAhAAAYAYQAYAXAAAhQAAAhgYAYQgYAYghAAQghAAgXgYg");
	this.shape_1.setTransform(21.9,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitpoint, new cjs.Rectangle(12.8,12.8,18.2,18.2), null);


(lib.ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// covering
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("A3bg8IAAhWMAu3AAAIAABWQhoCChoiCQgmB5gfh5Qi4FAjDlAQhZBThjhTQh0C2h1i2QjoETjHkTQhWB4hgh4QhOBlhOhlQhiCohdioQjIFtjbltQhRDqhLjqQhcDPhhAAQhhAAhljPg");
	this.shape.setTransform(149.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// covering copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("A3bg8IAAhWMAu3AAAIAABWQhoCChoiCQgmB5gfh5Qi4FAjDlAQhZBThjhTQh0C2h1i2QjoETjHkTQhWB4hgh4QhOBlhOhlQhiCohdioQjHFtjcltQhRDqhLjqQhcDPhhAAQhhAAhljPg");
	this.shape_1.setTransform(149.5,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// edges
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A3bg8IAAhWMAu3AAAIAABWQhoCChoiCQgmB5gfh5Qi4FAjDlAQhZBThjhTQh0C2h1i2QjoETjHkTQhWB4hgh4QhOBlhOhlQhiCohdioQjHFtjcltQhRDqhLjqQhcDPhhAAQhhAAhljPg");
	this.shape_2.setTransform(149.5,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// dirt
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AR7lFIAAAbQAAAFACABQACACAEgBQAHgBAAAAQAEAAAIAFIANABIAYgEQAIAAAGgDQALgIgCgTARSgnIAABcQAAAUAFAHQAHAQAWAHQAXAGAXgGQANgCADgJQABgHAAgEQABgHADgCAHqlhQAFALADARQABAKACAUQADAPAKAaQAIACAIgCQAJgDAFgHAEBhyQABAFAAAIQAAAFgBAJQgCARAJAJQAGAJAMABQAYAHAUgFQAWgIAJgTAMBjgQAAACAAAeQgBASADANQAAAGAEABQACACAIAAIAMAAQALgDAHgRAMJCeQAJAWABAfQABAHgCAwQAAALAEADQADADAHAAQASAAALgFAGmFGQAAAJgBADQAAAJAEAEQAEAEAIAAQAYAAAugCAR4EkQgDAbADAYQAWAEAVgFQATgDAFABAnqgbQgNAPgBAIQgBAEABAHQABAGgBAEQAAAMABADQADAEAHAEQAIAHACAAIAPABQASAAAGgFAhPlcIAAAoQAAAHABAEQACAFAEACQAGAEAGAAIAQgJQAMgCAIABAzOg0QgGARAGASQAFAKABAFQAEAHAFAPQAGANAOAEQAHACADAEQACAFABAAQADACAEgHQAFgXADgKAtBkoIAAAdQAAACABABIAEACIAUAAQAEAAACgCQADgBACgEQAHgIgCgFAtuD1QgCAlACAmQAGADAKgEQAMgEAFABQADAAAJABQADgBAFgFQAKgLAHgKQAIgLAAgQAiPB4QAGAegCAZQgCAIACAHQADAJAGABQAEAAAEgBQACgBAFgDQARgMAXAE");
	this.shape_3.setTransform(144.1,92.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("A3bKjIAA1FMAu3AAAIAAVFgAF6JfIBGgCIhGACQgIAAgEgEQgEgEAAgIIACgNIgCANQAAAIAEAEQAEAEAIAAIAAAAgARRJVIARgBIAFgBIACgBIABAAIAAAAIABAAIAQgCIACAAIABAAIABAAIABAAIgBAAIgBAAIgBAAIgCAAIgQACIgBAAIAAAAIgBAAIgCABIgFABIgRABIgBAAIAAAAIgPgBIgBAAIgBAAIgCgBIgBgYIABgaIgBAaIABAYIACABIABAAIABAAIAPABIAAAAIABAAgAuiI9IABAAIAAAAIAGgBIACAAIACgBIAAAAIABAAIAMgDIABAAIAAAAIABAAIAAAAIAMABIAIgGQAKgKAIgLQAHgLAAgQQAAAQgHALQgIALgKAKIgIAGIgMgBIAAAAIgBAAIAAAAIgBAAIgMADIgBAAIAAAAIgCABIgCAAIgGABIAAAAIgBAAIAAAAIgBAAIgFgBIgBAAIAAglIAAgmIAAAmIAAAlIABAAIAFABIABAAIAAAAgALlIYQASgBALgFQgLAFgSABQgGAAgEgEQgDgDAAgLIABgxIgBgFQAAgggKgVQAKAVAAAgIABAFIgBAxQAAALADADQAEAEAGAAIAAAAgAi9HFQAEAAAEgCIAHgEIABAAQAMgIAPgBIABAAIAAAAIAJABIAAAAIACABIgCgBIAAAAIgJgBIAAAAIgBAAQgPABgMAIIgBAAIgHAEQgEACgEAAQgGgCgDgIIgBgHIABgIIABgOQAAgUgEgWQAEAWAAAUIgBAOIgBAIIABAHQADAIAGACIAAAAgARnFkQANgDADgJIABgLQABgGAEgDQgEADgBAGIgBALQgDAJgNADQgLADgMAAQgLAAgMgDQgVgIgIgPQgEgIAAgUIAAhcIAABcQAAAUAEAIQAIAPAVAIQAMADALAAQAMAAALgDgAzXEtQACgBADgEIAAAAIAJgiIgJAiIAAAAQgDAEgCABIgBAAIAAAAIgBgBQgBAAgCgEQgDgEgHgDQgOgDgGgOQgFgPgEgHQgBgGgFgKQgDgIAAgJQAAgJADgJQgDAJAAAJQAAAJADAIQAFAKABAGQAEAHAFAPQAGAOAOADQAHADADAEQACAEABAAIABABIAAAAIABAAgAoOEsQARAAAGgEQgGAEgRAAIgPgBIgKgGQgIgEgCgEQgCgEAAgMIAAgEIAAgGIAAgHIAAgEQACgJAMgPQgMAPgCAJIAAAEIAAAHIAAAGIAAAEQAAAMACAEQACAEAIAEIAKAGIAPABgAD6DMIAPgBIADgBQAWgIAIgSQgIASgWAIIgDABIgPABIgBAAIAAAAQgLAAgNgDIAAAAIgCgBQgMgBgGgJQgHgHAAgNIAAgGIABgNIAAgGIgBgIIABAIIAAAGIgBANIAAAGQAAANAHAHQAGAJAMABIACABIAAAAQANADALAAIAAAAIABAAgALiBjQALgDAHgQQgHAQgLADIgMAAQgHABgDgCQgEgBAAgHQgCgKAAgQIAAgFIAAggIAAAgIAAAFQAAAQACAKQAAAHAEABQADACAHgBIAMAAgAHPAAIAIgBIABAAQAIgDAFgHQgFAHgIADIgBAAIgIABIgBAAIAAAAIgDAAIgEgBQgKgbgDgOIgDgeQgDgRgFgMQAFAMADARIADAeQADAOAKAbIAEABIADAAIAAAAIABAAgAtigJQADgBACgBQADgBACgEQAGgHAAgFIAAgBIAAABQAAAFgGAHQgCAEgDABQgCABgDABIgUAAIgFgCIgBgEIAAgdIAAAdIABAEIAFACIAUAAgARbgjIAOABIAXgDQAJAAAFgEQAJgGAAgOIAAgGIAAAGQAAAOgJAGQgFAEgJAAIgXADIgOgBQgIgEgDAAIgIABIgCAAIAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAAAQgBgCgBgFIAAgaIAAAaQABAFABACIAAAAQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIAAAAIACAAIAIgBQADAAAIAEgAh3giIAQgIIABAAIABAAIACgBIAJgBIABAAIAAAAIAFAAIABAAIgBAAIgFAAIAAAAIgBAAIgJABIgCABIgBAAIgBAAIgQAIQgGABgFgEQgFgDgBgFQgCgDAAgIIAAgoIAAAoQAAAIACADQABAFAFADQAFAEAGgBIAAAAg");
	this.shape_4.setTransform(150,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ground, new cjs.Rectangle(-0.5,0.1,300.6,136.2), null);


(lib.getReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.getReady = new cjs.Text("GET READY", "36px 'Showcard Gothic'", "#FFFFFF");
	this.getReady.name = "getReady";
	this.getReady.textAlign = "center";
	this.getReady.lineHeight = 47;
	this.getReady.lineWidth = 209;
	this.getReady.parent = this;
	this.getReady.setTransform(106.5,2);

	this.timeline.addTween(cjs.Tween.get(this.getReady).wait(1));

}).prototype = getMCSymbolPrototype(lib.getReady, new cjs.Rectangle(0,0,213,48.6), null);


(lib.gameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gameOver = new cjs.Text("Game over", "36px 'Showcard Gothic'", "#FFFFFF");
	this.gameOver.name = "gameOver";
	this.gameOver.textAlign = "center";
	this.gameOver.lineHeight = 47;
	this.gameOver.lineWidth = 209;
	this.gameOver.parent = this;
	this.gameOver.setTransform(106.5,2);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameOver, new cjs.Rectangle(0,0,213,48.6), null);


(lib.rock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// upper rock
	this.instance = new lib.stoneai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,-161.4,0.679,2.41,0,0,180,65.3,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lower rock
	this.instance_1 = new lib.stoneai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,273.9,0.679,1.684,0,0,0,65.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rock, new cjs.Rectangle(-10.3,-308.9,92.1,690.6), null);


(lib.character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// collision
	this.hit8 = new lib.hitpoint();
	this.hit8.parent = this;
	this.hit8.setTransform(-82.9,41.2,1,1,0,0,0,21.9,21.9);

	this.hit6 = new lib.hitpoint();
	this.hit6.parent = this;
	this.hit6.setTransform(-30.5,195.7,1,1,0,0,0,21.9,21.9);

	this.hit3 = new lib.hitpoint();
	this.hit3.parent = this;
	this.hit3.setTransform(82,170.3,1,1,0,0,0,21.9,21.9);

	this.hit7 = new lib.hitpoint();
	this.hit7.parent = this;
	this.hit7.setTransform(-99.1,175.5,1,1,0,0,0,21.9,21.9);

	this.hit0 = new lib.hitpoint();
	this.hit0.parent = this;
	this.hit0.setTransform(-29.6,-6.3,1,1,0,0,0,21.9,21.9);

	this.hit1 = new lib.hitpoint();
	this.hit1.parent = this;
	this.hit1.setTransform(30.6,27.5,1,1,0,0,0,21.9,21.9);

	this.hit5 = new lib.hitpoint();
	this.hit5.parent = this;
	this.hit5.setTransform(-18,270.7,1,1,0,0,0,21.9,21.9);

	this.hit4 = new lib.hitpoint();
	this.hit4.parent = this;
	this.hit4.setTransform(71.3,234.1,1,1,0,0,0,21.9,21.9);

	this.hit2 = new lib.hitpoint();
	this.hit2.parent = this;
	this.hit2.setTransform(126.9,75.5,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit2},{t:this.hit4},{t:this.hit5},{t:this.hit1},{t:this.hit0},{t:this.hit7},{t:this.hit3},{t:this.hit6},{t:this.hit8}]}).wait(17));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB0AHQADgUBvjoQgjgRg1gSQhpgkhXgEQjpDTBWDEQBRC5AUgGQgdAcgEAEQgLAJgLAJQgJAHgKAHQgpAbguAFQg6AHhCgdQgthYgthYQhZiuABgBQABAAAFmWQIRCLDKl/QANgSC7C/QC7DAgFAIQg0DBhyBxQgTATgSAOQh/BehyiKIglAXQACAGABAGQAsDNAxBKQA5BZBlgZQBygcAjgYQAIgFAEgFQAMgQgGgbQgEgVgWgvQgvhkgNgZQgVgpgNgGQgEgCgTANQgCABgCABQgcAUgXAHQhVAahlhjgAkBFqQg5AIg8gaQg+B7gQB5QgGApABAIQAAANAJAFQABABABABQAJADAVABQAgABAYABQBAADBFgbQAigNAdgPQAKgCAQgaQAVghATg7QALgjAMg0QAMgzgBgVQAAgJgDgEQgMgUgIgOQgBgDgBgCQgFgIgCgGQgZAagBAAQgDADgEADAiXE8QgzAng3AH");
	this.shape.setTransform(23.3,200.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B0000").s().p("AmYFTQgVgCgJgDQgLgEgMgdQgDgIAAgLIACACQAIADAWABIA3ACQBBADBEgbQAjgNAcgPQALgCAQgaQAUghATg7QAMgjALg0QAMgygBgVIAWAmQAIAMgQBIQgMAzgLAjQgTA7gVAiQgQAagKABQAFALgyATQgxAUg/ABIgwAAIgvAAgACCgPQgyhNgnjAIAPg2IAJAIQAtDNAwBKQA6BYBkgZQBygbAjgYQAAALgEAOQgJAfiFAcQgfAGgbAAQhXAAgshCg");
	this.shape_1.setTransform(25,237.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Al+FIIg4gCQgVgBgJgDIgCgCQgJgFAAgNQgBgIAGgpQAQh5A+h7QA8AaA5gIQAugFApgaIATgOIAWgSIAHgGIAagaQgKAUARgGIACAFIAUAiQADAEAAAJQABAUgMAzQgMA0gLAjQgTA7gVAhQgQAagKACQgdAPgiANQg+AYg6AAIgNAAgACZgNQgxhKgsjNIgDgMIAlgXIACABIAAABIABABQBCBPBHAAIAAAAIABAAQAxAAAzgmQATgNAEACQANAGAVApQANAZAvBkQAWAvAEAVQAGAbgMAQQgEAFgIAFQgjAXhyAcQgWAGgUAAQhHAAgthFgADqj1QhHAAhChPIgBgBIAAgBIgCgBQBlBjBVgaQAXgHAcgUIAEgCQgzAmgxAAIgBAAIAAAAg");
	this.shape_2.setTransform(25.5,233.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Al9HqIhaiwQhZivABgBQABAAAFmVQIRCLDKl/QANgSC7C/QC7DAgFAIQg0C/hyBzQgTATgSAOIgEACQgcAUgXAHQhVAahlhjQADgVBvjnQgjgRg1gSQhpgkhXgEQjpDRBWDGQBRC5AUgGIghAgIgWASQgzAng3AHIgWACQgwAAg2gYg");
	this.shape_3.setTransform(23.3,185.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AB+AXQAIgMCliMQgDgBgDgBQhEgHgVgHQhpgkhYgEQlyBAB9DSQAHAGA3AuQBKA+BAAIAB+AXIgrAPQAAADAAAEQgEB8AfAtQAkA2BrgPQB5gSAogNQAJgEAFgDQARgKAAgQQABgMgLgdQgXg9gHgPQgMgZgMgEQgDgBgUAHIgCABQgBAAAAABIgBAAIAAAAIgBAAQgBAAAAAAQghAMgZAEQhbAQhNg8gAjDE1Qg7AShCABQgtgohmhLQgHgFiTh2QAhivAxhuQAxhugCAXQIRCLDLl/QAMgSC8DAQC7C/gFAJQgDAIgCAJAJuiHQhcBniCA+QgWALgUAIAJoiOQgCAEgBADAFhAzQiTA3hQhTAjDE1Qg5ATg9AAQg+BYgQBKQgFAaAAAEQABAIAJAAQABAAABAAQAIAAAWgFQAggHAXgFQBBgQBEghQAjgQAdgRQAKgDAQgTQAVgZATgoQALgWAMghQALghAAgNQAAgFgDgBQgMgJgIgGQgBgCgBAAQgFgEgCgDIgLAKQgOAMgBABQgCABgDABQAAABgBAAIgBABQgLAJgLAIQgeAUggAQgAhZD/QgJAGgKAHQgVANgWAKAgtDdQgPALgFAE");
	this.shape_4.setTransform(17.2,186.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B0000").s().p("AmMDzQgDgEAAgGIACAAQAIAAAVgFIA4gNQBAgPBFghQAigRAdgQQAKgEAQgTQAVgZATgnQAMgXALggQAMghgBgMIAVAQIAAAZIgHAaQgMAhgMAXQgSAngVAZQgQATgKAEQAEAFgxAYQgxAYg/ARIhfAYQgVAFgJAAIgBAAQgKAAgMgNgAA8g7QghguAHh1IAcghIAHAFQgEB8AfAtQAkA2BrgPQB5gRApgOQgEAGgHAJQgRATiKARQghAEgcAAQhXAAgbgpg");
	this.shape_5.setTransform(18.5,216.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AmaD8QgJAAgBgIQAAgEAFgaQAQhKA+hYQA8ABA6gUIAsgSQAWgKAVgMIATgNIAWgRIABgBIABAAIAFgDIAOgNIALgKQgKAPASgIIACACIAUAPQACABAAAFQABANgMAgQgLAhgMAXQgTAngUAZQgQATgLADQgcARgjAQQhEAhhBAQIg3ANQgWAEgIAAIgCAAgABVg9QgfgtAEh8IABgHIAqgPIACACQAvAwBHAAIABAAIAAAAQAvAAA4gUIACgBIAAAAIACgBIAAAAIABAAIABAAIAAgBIADgBQATgHAEABQAMAFALAYQAHAPAXA9QALAdAAAMQgBAQgQALIgOAGQgpAOh5ARQgXADgUAAQhHAAgdgqgADdjKQhHAAgvgwIgCgCQBOA9BbgRQAZgDAggNIACAAIgCABIAAAAIgCABQg4AUgvAAIAAAAIgBAAg");
	this.shape_6.setTransform(19.6,214.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AnTE6Iiah8QAhiwAxhtQAxhtgCAXQIRCLDLl/QAMgSC8C/QC7C/gFAJIgFASIAFAAQhcBmiCA/IgqATIgCABIgBAAIgBAAIgBAAIAAAAIgCABQggAMgZAEQhbAQhOg8QAJgNCkiLIgFgCQhEgIgVgHQhpgjhYgFQlyBBB9DRIA+A0QBKA/A/AIIgKAJIgUAQIgBABIgBABIgWAQQgeAVggAPIgsASQg7AThCAAQgtgnhmhLgAJkgiIAEgIIgEAIg");
	this.shape_7.setTransform(17.2,176.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AhrFsQgrAbgsAHQg7AHhCgdQifiggXhyQgYhxAEAgQAEAhhYn6QIRCLDKl/QAMgSBjDjQBjDiAIBGIAAABQBIC0AZBPQAWBKAWAPAC6CgQAtDNAwBKQA6BZBkgZQBygcAkgXQAHgGAEgFQANgQgGgbQgFgVgWgvQguhkgNgZQgTglgNgJQgEAMABgNAHcCfQgFADgKAHQgCABgBABQgcAUgXAHQgEABgEABQhSAOhghZIglAXAHnCfQgBgBgBAAQgBAAAAAAQgCgBgGACQgdAagfAKQgIADgJACQhSAThgheQiaiuipkzQhjEgAxCqQAwCrBGAcQgjAtghAQQgDABgCABAhYFgQgKAGgJAGAgiEtQgZAaAAABQgEACgDADAk4F7Qg+B8gQB5QgFApAAAIQABANAJAFQABABABAAQAIADAWACQAgABAXABQBBADBEgbQAjgOAcgPQALgBAQgaQAUgiATg7QAMgjALgzQAMgzgBgWQAAgIgCgEQgNgVgHgOQgBgCgBgCQgFgJgDgG");
	this.shape_8.setTransform(28.5,203.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AmTEfIg4gCQgVgCgJgDIgCgBQgJgFAAgNQgBgIAGgpQAQh5A+h7QA8AbA5gIQAugFApgbIAFgDQAigQAjguQgLAVASgGIACAEIAUAjQADAEAAAIQAAAWgLAyQgMAzgLAjQgTA7gVAiQgQAagKABQgdAPgiAOQg+AYg6AAIgNAAgACuAbQgxhJgsjNIgDgMIAlgXQBeByBmgrQAWgKAXgRIAPgJQAGgDACABQgCANAFgLQANAJASAkQANAZAvBkQAWAvAEAVQAGAagMAQQgEAFgIAGQgjAXhyAcQgWAGgUAAQhHAAgthGgAE3jXQAfgLAdgZQgdAZgfALgAjCg7IAWgTIAHgFIAagbQgjAugiAQIAOgLg");
	this.shape_9.setTransform(39.1,245.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B0000").s().p("AmtEpQgVgBgJgDQgLgFgMgdQgDgHAAgLIABABQAJADAVACIA4ACQBBADBEgbQAigOAdgPQALgBAPgaQAVgiATg7QAMgjALgyQAMgzgBgWIAWAmQAIANgQBHQgMA0gMAjQgSA7gVAhQgQAagLACQAFAKgxAUQgxAUg/ABIgmAAIg5gBgACXAZQgyhMgnjAIAPg2IAJAIQAtDNAwBKQA5BYBlgZQBygcAkgXQgBAKgEAPQgKAfiDAcQggAHgcAAQhXAAgrhEg");
	this.shape_10.setTransform(38.6,248.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkDINQigifgXhyQgXhzAEAiQAEAhhZn7QISCLDJl/QANgSBjDjQBjDjAIBGIAAAAQBIC0AYBPQAXBLAVAPIADABQgFALACgNIAAABIAAgBQgCgBgGADIgPAKIgEACQgcATgXAHIgHACQhSAPhhhaQiZiuipkyQhjEfAwCrQAxCrBFAcIgZAbIgHAFIgWASIgSANQgrAbgtAHIgVABQgxAAg2gYg");
	this.shape_11.setTransform(22.6,189);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AB+AXIgrAPQAAADAAAEQgEB8AfAtQAkA2BrgPQB5gSAogNQAJgEAFgDQARgKAAgQQABgMgLgdQgXg9gHgPQgMgZgMgEQgDgBgUAHIgCABQgBAAAAABIgBAAIAAAAIgBAAQgBAAAAAAQghAMgZAEQhbAQhNg8QAIgMCliMQgDgBgDgBQhEgHgVgHQhpgkhYgEQlyBAB9DSQAHAGA3AuQBKA+BAAIAjDE1Qg7AShCABQgtgohmhLQgHgFiTh2QAhivAxhuQAxhugCAXQIRCLDLl/QAMgSC8DAQC7C/gFAJQgDAIgCAJAJuiHQhcBniCA+QgWALgUAIAJoiOQgCAEgBADAFhAzQiTA3hQhTAjDE1Qg5ATg9AAQg+BYgQBKQgFAaAAAEQABAIAJAAQABAAABAAQAIAAAWgFQAggHAXgFQBBgQBEghQAjgQAdgRQAKgDAQgTQAVgZATgoQALgWAMghQALghAAgNQAAgFgDgBQgMgJgIgGQgBgCgBAAQgFgEgCgDIgLAKQgOAMgBABQgCABgDABQAAABgBAAIgBABQgLAJgLAIQgeAUggAQgAhZD/QgJAGgKAHQgVANgWAKAgtDdQgPALgFAE");
	this.shape_12.setTransform(17.2,186.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AhrFsQgrAbgsAHQg7AHhCgdQifiggXhyQgYhxAEAgQAEAhhYn6QIRCLDKl/QAMgSBjDjQBjDiAIBGIAAABQBIC0AZBPQAWBKAWAPQgBAAAAAAQgCgBgGACQgFADgKAHQgCABgBABQgcAUgXAHQgEABgEABQhSAThgheIglAXAC6CgQAtDNAwBKQA6BZBkgZQBygcAkgXQAHgGAEgFQANgQgGgbQgFgVgWgvQguhkgNgZQgTglgNgJQgBgBgBAAAHnCfQgEAMABgNAHcCfQgdAagfAKQgIADgJACQhSAOhghZQiaiuipkzQhjEgAxCqQAwCrBGAcQgjAtghAQQgDABgCABAhYFgQgKAGgJAGAk4F7Qg+B8gQB5QgFApAAAIQABANAJAFQABABABAAQAIADAWACQAgABAXABQBBADBEgbQAjgOAcgPQALgBAQgaQAUgiATg7QAMgjALgzQAMgzgBgWQAAgIgCgEQgNgVgHgOQgBgCgBgCQgFgJgDgGQgZAaAAABQgEACgDAD");
	this.shape_13.setTransform(28.5,203.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkDINQigifgXhyQgXhzAEAiQAEAhhZn7QISCLDJl/QANgSBjDjQBjDjAIBGIAAAAQBIC0AYBPQAXBLAVAPIAAgBQgCgBgGADIgPAKIgEACQgcATgXAHIgHACQhSAPhhhaQiZiuipkyQhjEfAwCrQAxCrBFAcIgZAbIgHAFIgWASIgSANQgrAbgtAHIgVABQgxAAg2gYgAIgEzIAAABIADABIgDAFQgBAAABgHg");
	this.shape_14.setTransform(22.6,189);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AmTEfIg4gCQgVgCgJgDIgCgBQgJgFAAgNQgBgIAGgpQAQh5A+h7QA8AbA5gIQAugFApgbIAFgDIAOgLIAWgTIAHgFIAagbQgjAugiAQQAigQAjguQgLAVASgGIACAEIAUAjQADAEAAAIQAAAWgLAyQgMAzgLAjQgTA7gVAiQgQAagKABQgdAPgiAOQg+AYg6AAIgNAAgACuAbQgxhJgsjNIgDgMIAlgXQBeByBmgrQAWgKAXgRIAPgJQgdAZgfALQAfgLAdgZQAGgDACABQgCANAFgLQANAJASAkQANAZAvBkQAWAvAEAVQAGAagMAQQgEAFgIAGQgjAXhyAcQgWAGgUAAQhHAAgthGg");
	this.shape_15.setTransform(39.1,245.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},3).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13}]},3).wait(3));

	// arms
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ANUn8QAfgsAhgmQAGgHAHgHQA2g6AQAcQAHANAAARQgCAVgPAbQgOAXgQATQABABBkgRQAmgEAWABQAkADgFASQgDAQgcAUQgZATgtAYQhcArABABQABABBvAHQAcADAVAFQA9ANgCAXQgCAYg5AKQgSAEgZACQhjACABABQgFgCgLABQgVAEgVAbQAQAUArA2QAgAwgXAXQg+gLgOgGQg1gagyhTQgWAMABABQgRgIgmgKQhMgThkgIQhegHhVAIQhDAJgFAAQADgDgBgqQgBg3gPgwQgPgvgjg5QhJg5ApAJQCWAGBvAEQE3ALABACQA7AeAJAGIAAAAQACABAAAAQAAABAKArQAKAygEAmQgDAmgTArQgJAVgIAOQABABgWANANToFQAAAIABABAqtGJQgFgMgCgnQgCgwAHgyQATiQA8g7QA7g7gPh1QgPh1hLhgQgxARgsAhQgnAegkArQg0BAgsBdQhpCqAXC2QitAGgFBRQgCAfBTgIQAEAAAFgBQABAAACAAQAGgBAGAAQATgDAWgEQiFBtA1A7QAtAcCJiEQhOCSBOAxQBLgVAnhyQAmhyAqBNQArBOAlgPQAkgPg7h/QgCAAgEAAIAAAAAtsFdQARAGATAGQAiAMAbAIQgvgLgygVgAsLF9QBbAbADgPQgtgBgxgLgAvoEcQAIAXB0AqQg7gZhBgog");
	this.shape_16.setTransform(9,119.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ApqHhQgugBgwgLIg9gUIgkgMQg8gZhAgoQgXi2BpirQArhcA1hAQAjgrAogeQAsghAxgRQBLBgAPB1QAOB0g7A8Qg7A7gTCQQgHAyACAwQACAnAFAMgAMhiiQhMgThkgIQhegHhVAIIhIAJQACgDAAgqQgBg3gPgwQgPgvgjg5QhKg5AqAJIEFAKQE2ALACACIBEAkIAAAAIACABIAKAsQAKAygEAmQgDAmgTArQgJAVgIAOQABABgWANQgWAMABABQgRgIgmgKg");
	this.shape_17.setTransform(2.3,110.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AuiHBQiJCEgtgcQg1g7CFhtIgpAHIgMABIgDAAIgJABQhTAIACgfQAFhRCtgGQAIAXB0AqQAyAVAvALQBbAbADgPIAAAAIAGAAQA7B/gkAPQglAPgrhOQgqhNgmByQgnByhLAVQhOgxBOiSgAORiIQg1gagyhTQAWgNgBgBQAIgOAJgVQATgrADgmQAEgmgKgyIgKgsIgCgBQAfgsAhgmIANgOQA2g6AQAcQAHANgBARQgBAVgPAbQgOAXgQATQABABBkgRQAmgEAWABQAkADgFASQgDAQgcAUQgZATgtAYQhcArABABQABABBvAHQAcADAVAFQA9ANgCAXQgCAYg5AKQgSAEgZACQhjACABABQgFgCgLABQgVAEgVAbIA7BKQAgAwgXAXQg+gLgOgGg");
	this.shape_18.setTransform(9,119.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("APhiiQA0ANAyAIQAKACAKAAQBPAJgHggQgDgQgLgLQgQgQgdgKQgZgIgZgDQAAgCBXg1QAfgVAQgQQAZgagPgLQgNgJgiACQggADgxALQhiAcAAgBQAAgCBPhNQAUgWANgRQAlgxgRgRQgRgQgyAdQgQAJgUAPQhMA/AAgBQgDAFgIAGQgTAKghgGQgCgZgDhGQgHg5gggCQgoAxgGAOQgXA2ARBfAPhiiIABgCIgVgnQgZgtgcgaQgcgbgqgTQgUgKgQgGQABgBgZAEQgZAFgBAAQgHARgWAgQgtBBhGBHQhDBDiBBZQAEAAAbAhQAjAqAUAuQATAtATB7QBthmBShMQDjjUgBgBQAZg+ADgLgAsbghQACANAXAfQAcAmAlAjQBpBlBTAJQBUAKA+BlQA9BlABB5QgyARg2ACQgxABg3gLQhRgShcgtQi8hEhficIAQgkIANgdQAIgRAGgOQAYgxAHgNIABgCQABgBAAAAQAPgYAbgmQAGgIAFgIIADgEQAkguAJAHQAAgBAAgBQgZiUgnALQglAMAPBXQAPBWhlhBQhlhBhIAeQgeBXCYBBQi+gTgSA0QgEBOCrADQgTALgQAJQgFADgGADQgBABgBABQgEADgDACQhGAuAUAWQA4A9CKho");
	this.shape_19.setTransform(-15.3,60.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AoPGvQhRgRhcguQi8hEhficIAQgkIANgcIAPgfQAXgxAHgNIABgCIABgBIAqg9QAcgjAfgZIABAAQADANAWAfQAcAnAmAjQBoBkBTAIQBUAKA+BlQA+BlAAB6QgyARg2ABIgLAAQgsAAgxgKgAH0AdQgUgsgjgrQgbgggEgBQCBhZBDhDQBHhIAthBQAVggAIgRIAZgEQAZgEgBABQAQAFAUAKQArAUAbAbQAcAZAZAuIAVAnIgBACQgDALgZA9QABACjjDTIi/CyQgSh7gUgtg");
	this.shape_20.setTransform(-14.3,70.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AyNGRQgUgWBGgtIAHgFIACgDIALgFIAjgUQirgEAEhOQASgzC+ATQiYhDAehXQBIgeBlBBQBlBCgPhXQgPhWAlgMQAngKAZCTQgDgMgNAMIgdApIgMARIgHAKQgWAegPAZIgBABIgBACQgTAhgKAaIgCAEIgOAfIgNAcIgOAYQhXBCg2AAQggAAgVgXgARbgRIgUgDQgygHg0gNIABgCIgVgnQgZgugcgZQgcgbgqgUQgUgKgQgFQABgBgZAEQgRhgAXg2QAGgNAogxQAgACAHA5IAFBfQAhAGATgLQAIgGADgFQAAACBMg/QAUgPAQgKQAygdARAQQARARglAyQgNARgUAVQhPBOAAACIBigbQAxgMAggCQAigDANAKQAPAKgZAaQgQARgfAVQhXA0AAACQAZADAZAJQAdAKAQAPQALAMADAPQAFAagwAAQgMAAgRgCg");
	this.shape_21.setTransform(-15.3,48.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AH9CFQgWgNAAABQgBgTgLgmQgVhKgrhbQgghCgkg3QgLgRgLgQQgqg2AQAJQAIgigjhkQgihjgTgYQgTgXgHgLIAHAAQBOghA3AkQA2AlBTBWQBSBXBoCoQBoCpgBACQADBBAAAMQA1AEAyAKQAKABAJADQAhAHAQAKQASALgEANQgBACgBACQgJANgOAIQgTAKgfAAQgbAAgYgFQgBABBBBOQAXAfAJAUQAQAggSAFQgPAFgggNQgdgNgrgaQhTg7AAABQgBACAyBjQALAaAGAVQATA7gVAKQgVAKgmgsQgMgOgOgVQgzhUgBABQgBgFgGgJQgOgQgigFQgJAYgaBAQgJASgKALQgRAUgUgGQgWg7gCgPQgBgSAEgXQAIgtAgg5gAL2AmIAAABQgBABggAeQgnAigjAQQgiAQguAFQgXADgQAAQAAABgXgMAL9AgQgHAEAAACAoMD+QgIgHgMggQgOgngHguQgViCAihQQAhhQgqhbQgrhbhYgpQgkAngcAyQgZAtgSA2QgcBRgLBlQgrDEBCCNQgLAHgJAHQh6BVARBCQAGAaBDgwQADgDAEgDQABgBACgBQAEgDAFgEQAPgMARgPQhSCgA7AWQAtABBRi1QgbCjBNABQA5g4ADh0QABhzA4ArQA3ArAbgfQAbgfhShNAoND+QACAPhTAXQgqAOgvAJQhsAYgMgP");
	this.shape_22.setTransform(9.7,121.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AsVB/QALhlAchPQASg2AZguQAcgxAkgoQBYApArBbQAqBbghBQQgiBQAVCDQAHAuAOAnQAMAfAIAIIgBAAQglAXgsAOIg3AQIgiAIQg4AJhAAAQhCiOArjFgAIuESQgWgNAAABQgBgTgLglQgVhLgrhcQgghAgkg4IgWghQgqg2AQAKQAIgigihkQgjhkgTgXIgagiIAHAAQBOghA3AkQA3AkBSBXQBTBWBoCpQBnCogBACQADBCAAALIAAACIghAfQgnAigjAPQgiAQguAGQgXACgQAAIAAABQgCAAgVgMg");
	this.shape_23.setTransform(4.8,107.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AtHEdQg7gXBSifIggAbIgJAHIgDACIgHAFQhDAxgGgbQgQhCB5hVIAUgNQAMAPBsgXQAvgJAqgPQBTgXgCgOIABAAIAFgDQBSBLgbAgQgbAfg3gsQg4gqgBBzQgDBzg5A4QhNgBAbiiQhQC0gtAAIgBAAgALKAyQgMgOgOgVQgzhTgBABQgBgGgGgIQgOgRgigEIgjBYQgJARgKALQgRATgUgFQgWg6gCgPQgBgTAEgWQAIgtAgg6QAXANAAgCQAQAAAXgCQAugGAigQQAjgPAngiIAhgfIAAgCQA1AEAyAKIATAEQAhAIAQAJIAOAZIgCAEQgJANgOAIQgTAJgfAAQgbAAgYgFQgBACBBBOQAXAeAJAVQAQAggSAFQgPAFgggOQgdgMgrgbQhTg6AAABQgBABAyBkQALAaAGAUQATA7gVAJQgEACgEAAQgUAAgfgjg");
	this.shape_24.setTransform(9.7,154);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("ANUn8QAfgsAhgmQAGgHAHgHQA2g6AQAcQAHANAAARQgCAVgPAbQgOAXgQATQABABBkgRQAmgEAWABQAkADgFASQgDAQgcAUQgZATgtAYQhcArABABQABABBvAHQAcADAVAFQA9ANgCAXQgCAYg5AKQgSAEgZACQhjACABABQgFgCgLABQgVAEgVAbQAQAUArA2QAgAwgXAXQg+gLgOgGQg1gagyhTQgWAMABABQgRgIgmgKQhMgThkgIQhegHhVAIQhDAJgFAAQADgDgBgqQgBg3gPgwQgPgvgjg5QhJg5ApAJQCWAGBvAEQE3ALABACQA7AeAJAGIAAAAQACABAAAAQAAABAKArQAKAygEAmQgDAmgTArQgJAVgIAOQABABgWANANToFQAAAIABABAqtGJQgFgMgCgnQgCgwAHgyQATiQA8g7QA7g7gPh1QgPh1hLhgQgxARgsAhQgnAegkArQg0BAgsBdQhpCqAXC2QitAGgFBRQgCAfBTgIQAEAAAFgBQABAAACAAQAGgBAGAAQATgDAWgEQiFBtA1A7QAtAcCJiEQhOCSBOAxQBLgVAnhyQAmhyAqBNQArBOAlgPQAkgPg7h/QgCAAgEAAIAAAAQgtgBgxgLQBbAbADgPAtsFdQARAGATAGQAiAMAbAIQgvgLgygVQg7gZhBgoQAIAXB0Aqg");
	this.shape_25.setTransform(9,119.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AH9CFQgWgNAAABQgBgTgLgmQgVhKgrhbQgghCgkg3QgLgRgLgQQgqg2AQAJQAIgigjhkQgihjgTgYQgTgXgHgLIAHAAQBOghA3AkQA2AlBTBWQBSBXBoCoQBoCpgBACQADBBAAAMQA1AEAyAKQAKABAJADQAhAHAQAKQASALgEANQgBACgBACQgJANgOAIQgTAKgfAAQgbAAgYgFQgBABBBBOQAXAfAJAUQAQAggSAFQgPAFgggNQgdgNgrgaQhTg7AAABQgBACAyBjQALAaAGAVQATA7gVAKQgVAKgmgsQgMgOgOgVQgzhUgBABQgBgFgGgJQgOgQgigFQgJAYgaBAQgJASgKALQgRAUgUgGQgWg7gCgPQgBgSAEgXQAIgtAgg5gAL2AmIAAABQgBABggAeQgnAigjAQQgiAQguAFQgXADgQAAQAAABgXgMAL9AgQgHAEAAACAoMD+QgIgHgMggQgOgngHguQgViCAihQQAhhQgqhbQgrhbhYgpQgkAngcAyQgZAtgSA2QgcBRgLBlQgrDEBCCNAoND+QACAPhTAXQgqAOgvAJQhsAYgMgPQgLAHgJAHQh6BVARBCQAGAaBDgwQADgDAEgDQABgBACgBQAEgDAFgEQAPgMARgPQhSCgA7AWQAtABBRi1QgbCjBNABQA5g4ADh0QABhzA4ArQA3ArAbgfQAbgfhShN");
	this.shape_26.setTransform(9.7,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},3).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_25}]},3).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_26}]},3).wait(3));

	// suit colour
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AnhlfQAOgaAdgkQA6hHBKguQDviSFCCqQAnAVAMBZQANBjgyBEQg3BLhxA/QhiA2g3ADQhgAGgOAAQhfgEhTgnQhzg3gZh2QgIglADgmgAmMAYQgGAAgFgBQhAhbgph8QgFgNgDgNQgWhLgEhDQgHiKBIhlQBRiFCEg0QCNg3CxAwQAlAKA/A1QBHA6A5BNQCbDMgvCzQgFAUgSAMQAWAXAoA2QA6BRABgBQABAAgBBZQgBBbABgBQABAAAJA+QAJA/ABgBQABAAAVB9QALA/ALA+QjSGCoJiOQgnhdg2iLQg1iLAFAGQAFAHAThJQAUhKgQhOQgQhNhUhcQgBgBAAgBIEwgGQBEgFBAgNQgZAFgYAEQixAcjRgLgAEXhsQAhgcA2gtIgDADQgmApguAdQh+BOhyAcQBjgWBagrQABAAAygpgAEICQQADANgtAWQguAXhEATQhEAUgyAFQgzAFgDgNQAAgOAqgUQAtgXBEgUQBEgTAzgFQAwgFAGAMgAhADuQAKCMAWA3QAWA2ALAkQAMAkAZAFQAaAFAYACQAXACAoAAQAoAABPgmQBPgmACg+QADg+gjhhQgUg5gjhLACHD9IBfghIBJDUIhfAggAA4EuQAAAPgLAKQgKALgPAAQgPAAgKgLQgLgKAAgPQAAgPALgLQAKgLAPAAQAPAAAKALQALALAAAPgABJGTQAAAPgLAKQgKALgPAAQgPAAgLgLQgLgKAAgPQAAgPALgLQALgLAPAAQAPAAAKALQALALAAAPgABjH1QAAAPgLAKQgKALgPAAQgPAAgLgLQgLgKAAgPQAAgPALgLQALgLAPAAQAPAAAKALQALALAAAPg");
	this.shape_27.setTransform(-13.7,81);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006600").s().p("AhThYIBeghIBJDSIheAhg");
	this.shape_28.setTransform(8.2,115.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AgZAZQgLgKAAgPQAAgOALgLQALgLAOABQAPgBAKALQALALAAAOQAAAPgLAKQgKAMgPAAQgOAAgLgMg");
	this.shape_29.setTransform(-7.4,131.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FF00").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLALQgKAKgPABQgOgBgLgKg");
	this.shape_30.setTransform(-10,121.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AgZAZQgLgKAAgPQAAgOALgLQALgLAOAAQAPAAAKALQAMALAAAOQAAAPgMAKQgKAMgPAAQgOAAgLgMg");
	this.shape_31.setTransform(-11.7,111.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("Ag2DYQgYgCgagFQgZgFgMgkQgMgjgWg3QgWg2gKiLQACAJAbAAIAAAAIAAAAIAZgCQAzgFBEgTQBDgUAugXQAqgUAAgMIAAgCQAjBLAUA4QAjBggDA/QgCA+hPAmQhPAmgoAAQgngBgXgCgAhpB4QgLALAAAPQAAAPALALQALALAPAAQAPAAAKgLQALgLAAgPQAAgPgLgLQgKgKgPAAQgPAAgLAKgAgHhlIBIDTIBfghIhJjSgAiDAWQgLALAAAPQAAAPALALQALALAPAAQAPAAAKgLQALgLAAgPQAAgPgLgLQgKgKgPAAQgPAAgLAKgAiUhOQgLALAAAPQAAAPALALQALALAPAAQAPAAAKgLQALgLAAgPQAAgPgLgLQgKgKgPAAQgPAAgLAKgAiyhqQgbAAgCgJQAAgPAqgUQAugXBEgTQBDgUAzgFQAwgFAGAMIAAABIAAACQAAAMgqAUQguAXhDAUQhEATgzAFIgZACIAAAAIAAAAgAjPhzIAAAAgAB5jRIAAAAg");
	this.shape_32.setTransform(0.6,116.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AlMGjQhAhdgph8IgIgZQgWhMgEhCQgHiJBJhmQBRiFCDgzQCOg4CwAwQAlAKBAA1QBGA7A6BMQCaDMguCzQgFATgTANIADgDIhXBIQh9BOhyAcQhBAPhEAFIkwAGIACABIgMAAgAjmiGQhLAtg6BIQgcAjgPAaIgEAfQgCAnAIAlQAYB2B0A2QBTAoBfADQAOABBegGQA4gEBjg2QBwg+A4hLQAyhEgOhjQgMhZgmgUQiuhciWAAQh/AAhuBEg");
	this.shape_33.setTransform(-21.2,41.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AkCHMQgnhdg1iLQg2iMAFAHQAFAGAUhJQAThIgQhOQgPhOhVhcIAFABIANAAIABAAQAxACAvAAIABAAIAAAAQCEAAB2gQIALgCIADAAIABAAIAFgBQAZgEAagHQBhgVBagrIAzgqIBXhIIgDADQAXAXAnA2IA7BQQABAAgBBaIAABaQABAAAJA+IAKA+QABgBAWB9IAVB9QiZEalAAAQh2AAiMgmgACHizQgzAFhEAUQhDATgtAXQgrAUAAAPQAKCLAWA2QAWA3AMAjQAMAkAaAFQAZAFAXACQAXACAoABQAoAABPgmQBPgmACg+QADg/gihgQgVg4gjhLIAAgBQgEgIgZAAIgZABgADMmpQAugdAmgoQgmAoguAdgAlkkhQgvAAgxgCIgBAAIgNAAIgFgBIgBgBIEwgGQBFgFBBgPQgaAHgZAEIgFABIgBAAIgDAAIgLACQh2AQiEAAIAAAAIgBAAgAgik/IAAAAg");
	this.shape_34.setTransform(-6.2,112.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(17));

	// face
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AElhbQgHgUAGgMQAJgRAdAJQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAHQgRAIgJgQQgDgFgCgGQgFgOgDgTQgEgYgCgGQALAfADAgQADAkgHAnQgNBDgsBJAElhbQACAEACAFQAAAAAAABAB0kLQAMAFAMAGIAHAEQAOAIANAJIANAKQAnAdAeApQAYAfANAhAAZkfQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaAhKgrQAAALgIAIQgEAEgGACQgEACgGAAQgLAAgIgIQgIgIAAgLQAAgBAAAAQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMgAgbgtQAAApgeAcQgeAdgqAAQgrAAgegdQgegcAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgADThdQAAApgeAdQgeAcgqAAQgrAAgegcQgegdAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgABAhUQAAgCAAgBQABgKAHgGQAIgIALAAQAMAAAIAIQABABACACQAEAGABAGQAAACAAACQAAAJgFAHQgCACgBACQgFAEgFACQgEACgGAAQgLAAgIgIQgIgIAAgMAjui9QgBABgBABQgXAjgMAsQgIAcgEAfQAAAJgBAJQgCAgAEAfQADAWAGAVQACAHACAHQADAHACAHQABADgBADQgBANgLAPQgLAQgYgOQgZgOgHgPQgIgPAAgUQAAgVAHgPQAIgPALAAQALgBATAAQAIAAAFAJQADAGACAKQACAGABAHQABAGAAAIQABACABADQAHANAAAKQAOAjAXAhQArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghAg5C1QAFAGBYgQQBigRAaghAgdArQALAPASADQAiAIAkguAhgEhQgIAAgHgBQgBAAgCAA");
	this.shape_35.setTransform(-23.1,48.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC99").s().p("AhqEJQgZgQgagVQg2grgfgnQgWgggOgjQgBgKgGgOIgBgCIgCgQIABAOIAEANIgCgJQAGAOABAKIgFgPIAFAPIAAADIAAACQgBAOgLAPQgLAPgYgNQgZgOgIgPQgHgPAAgVQAAgUAHgPQAIgPALAAIAeAAQAIAAAFAIQADAGACAJIADAOIgDgOQgIg2ACgqQAEggAHgcQAGgtAeghQgXAjgNArQANgrAXgjIABgCIASgSQAbgZAfgRQBJgpBeACIAVABQAxADAqARIAYALIAHAEQAOAHANAKIANAKQATAPARATQBVBfAAB9IgCAcQglBlghA7QgdA1gZAUQg2AqhSAFIgIAAQg7AAhLgwgAgWCbIAEgBIAVgDIAOgDIACAAIABAAIAEgBIACAAQBigRAagiQgaAihiARIgCAAIgEABIgBAAIgCAAIgOADIgVADIgEABQgYADgLAAIAAAAQgIAAgCgCIAAAAIAAAAQACACAIAAIAAAAQALAAAYgDgAkfAzQgGgVgDgWQADAWAGAVgAABAmQAcgBAdgkIACgBIgCABQgdAkgcABIgBAAIAAAAIgJgBIgBAAQgSgEgLgOQALAOASAEIABAAIAJABIAAAAIABAAgAjNiRIgHAGQgeAdAAApQAAApAeAcQAeAdArAAQAqAAAegdQAegcAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAAhjBIgHAGQgdAdAAApQAAApAdAdQAeAdArAAQAqAAAegdQAegdAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAkWBUIAAgCIAAgDQAOAjAWAgQgZgggLgegAkWBPIAAAAgAkWBPIAAAAgAkdA3IAAAAgAEygfIgFgLQgDghgLgeQALAeADAhQgFgOgDgTIgGgeIAAgBIgEgJQgHgVAGgMQAJgRAdAKQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAIQgGACgFAAQgJAAgGgLgAA2h0IAAAAQAAgMAIgHQAIgIALAAQAMAAAIAIIADADQAFAHAAAJIgBAEQAAgHgEgFIgDgEQgIgIgMAAQgLAAgIAIQgHAHgBAJIAAgEg");
	this.shape_36.setTransform(-22.1,51.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ah0AoQgHgIgBgMIAAAAQABgMAHgHQAJgHALAAQAMAAAIAHQAHAIAAALQAAAMgHAIQgFAEgFACQgFACgFAAQgLAAgJgIgABOAAQgJgIABgLIAAgBIAAgDQABgJAHgHQAIgIALAAQAMAAAHAIIADAEQAEAFABAHIAAAEQABAJgGAHIgDADQgEAEgFACQgFABgFAAQgLAAgIgHg");
	this.shape_37.setTransform(-23.7,42.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhvEgIgDAAQhKg3grg+QArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghQgfARgbAZIgRARIgCACQgeAhgFAuQgIAcgEAfIgBASIgBAVQAAAVADAVQgFgJgIAAIgeABQgLAAgIAPQgHAPAAAVQAAAUAIAPQAHAPAZAOQAYAOALgQQALgPABgNQALAdAaAhQAfAmA1ArQAaAVAZAQIgPgBgAEzA5IABgcQABh9hWhfQgRgTgTgPQAnAdAeApQAYAfANAhQgNghgYgfQgegpgngdIgNgKQgNgJgOgIIgHgEIgYgLQgqgQgxgEQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaQAhg7AmhlgAEzA5QgNBDgsBJQAshJANhDQAFgbAAgaIgBgWIABAWQAAAagFAbgAEkh7QgGAMAHAUIAEAJIAAABIAGAeQADATAFAOIAFALQAJAQARgIQARgHAIgRQAJgRAAgYQAAgYgJgRQgIgRgdgJQgKgDgIAAQgOAAgGALgAkVBLIACAFIgCgFIgBgOIADAQIAAADIACAJIgEgOgAkVBLIAAAAgAjKAYQgegcAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAcQgeAdgqAAQgrAAgegdgAh5g/QgIAIAAALIAAABQAAALAIAIQAIAIALAAQAGAAAEgCQAGgCAEgEQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAkeAgQgDgVAAgVIABgVIABgSQgCAqAIA3QgCgKgDgGgAAkgXQgegdAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAdQgeAcgqAAQgrAAgegcgABIhvQgIAIAAALIAAABIAAAEIAAADIAAAAQAAAMAIAIQAIAIALAAQAGAAAEgCQAFgCAFgEIADgEQAFgHAAgJIAAgEIAAgDQAAgKgFgGIgDgEQgIgIgMAAQgLAAgIAIg");
	this.shape_38.setTransform(-23.1,48.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AElhbQgHgUAGgMQAJgRAdAJQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAHQgRAIgJgQQgDgFgCgGQgFgOgDgTQgEgYgCgGQALAfADAgQADAkgHAnQgNBDgsBJAElhbQACAEACAFQAAAAAAABAB0kLQAMAFAMAGIAHAEQAOAIANAJIANAKQAnAdAeApQAYAfANAhAhgkBIB5geIAAAAQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaAB3kTQgCAEgDAEQhCBihQAWAguhHQAAALgIAIQgFAFgFACQgEABgGAAIAAAAQgLAAgIgIQgIgIAAgLIAAgBQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMgAgbgtQAAApgeAcQgeAdgqAAQgrAAgegdQgegcAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgADThdQAAApgeAdQgeAcgqAAQgrAAgegcQgegdAAgpQAAgUAIgSQAHgRAPgPQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgAAWhlQABgKAHgGQAIgIALAAQAMAAAIAIQABABACACQABABAAABQACACABADQABADAAADQAAABAAACQAAAJgFAHQgCACgBACQgCABgCACQgDACgDABQgEACgGAAQgLAAgIgIQgIgIAAgMAjui9QgBABgBABQgXAjgMAsQgIAcgEAfQAAAJgBAJQgCAgAEAfQADAWAGAVQACAHACAHQADAHACAHQABADgBADQgBANgLAPQgLAQgYgOQgZgOgHgPQgIgPAAgUQAAgVAHgPQAIgPALAAQALgBATAAQAIAAAFAJQADAGACAKQACAGABAHQABAGAAAIQABACABADQAHANAAAKQAOAjAXAhQArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghAgzDMQAEgDBdgNQBfgOAYgIAgdArQALAPASADQAiAIAkguAhgEhQgIgBgHAAQgBAAgCAAAi8jNQBLAzBaAL");
	this.shape_39.setTransform(-23.1,48.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag+ApQgLAAgIgIQgHgIgBgLIAAgBQABgMAHgGQAJgIALAAQALAAAJAIQAHAHABALQgBAMgHAIQgFAEgFACQgFACgFAAgAAqAGQgHgHgBgLIAAgBIABgDQABgJAGgHQAJgIALAAQAMAAAHAIIAEAEIABABIACAGIABAFIAAAEQAAAJgEAGIgEADIgDADIgGAEQgEABgGAAQgLAAgJgIg");
	this.shape_40.setTransform(-24.4,40.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AhqEJQgZgQgagVQg2grgfgnQgWgggOgjQgBgKgGgOIgBgCIgCgQIABAOIAEANIgCgJQAGAOABAKIgFgPIAFAPIAAADIAAACQgBAOgLAPQgLAPgYgNQgZgOgIgPQgHgPAAgVQAAgUAHgPQAIgPALAAIAeAAQAIAAAFAIQADAGACAJIADAOIgDgOQgIg2ACgqQAEggAHgcQANgrAXgjIABgCIASgSQAbgZAfgRIAAAAQBJgpBeACIAVABIh5AdIB5gdIAAAAQAwADApAQIACABIAYALIAHAEQAOAHANAKIANAKQATAPARATQBVBfAAB9IgCAcQglBlghA7QgdA1gZAUQg2AqhSAFIgIAAQg7AAhLgwgAAkCjQhdAOgEACQAEgCBdgOQBfgNAYgIQgYAIhfANgAkfAzQgGgVgDgWQADAWAGAVgAABAmQAcgBAdgkIACgBIgCABQgdAkgcABIgBAAIAAAAIgJgBIgBAAQgSgEgLgOQALAOASAEIABAAIAJABIAAAAIABAAgAjNiRIgHAGQgeAdAAApQAAApAeAcQAeAdArAAQAqAAAegdQAegcAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAAhjBIgHAGQgPAOgHASQgHARAAAVQAAApAdAdQAeAdArAAQAqAAAegdQAegdAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAghioQhagLhLgzQBLAzBaALgAgqisQBQgVBChjQhCBjhQAVgAkWBUIAAgCIAAgDQAOAjAWAgQgZgggLgegAkWBPIAAAAgAkWBPIAAAAgAkdA3IAAAAgAEygfIgFgLQgDghgLgeQALAeADAhQgFgOgDgTIgGgeIAAgBIgEgJQgHgVAGgMQAJgRAdAKQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAIQgGACgFAAQgJAAgGgLgAj6jTQgXAjgNArQAGgtAeghgAj6jTIAAAAg");
	this.shape_41.setTransform(-22.1,51.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhvEgIgDAAQhKg3grg+QArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghQgfARgbAZIgRARIgCACQgeAhgFAuQgIAcgEAfIgBASIgBAVQAAAVADAVQgFgJgIAAIgeABQgLAAgIAPQgHAPAAAVQAAAUAIAPQAHAPAZAOQAYAOALgQQALgPABgNQALAdAaAhQAfAmA1ArQAaAVAZAQIgPgBgAEzA5IABgcQABh9hWhfQgRgTgTgPQAnAdAeApQAYAfANAhQgNghgYgfQgegpgngdIgNgKQgNgJgOgIIgHgEIgYgLIgCAAIAFgIIgFAIQgpgQgwgEQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaQAhg7AmhlgAEzA5QgNBDgsBJQAshJANhDQAFgbAAgaIgBgWIABAWQAAAagFAbgAEkh7QgGAMAHAUIAEAJIAAABIAGAeQADATAFAOIAFALQAJAQARgIQARgHAIgRQAJgRAAgYQAAgYgJgRQgIgRgdgJQgKgDgIAAQgOAAgGALgAkVBLIACAFIgCgFIgBgOIADAQIAAADIACAJIgEgOgAkVBLIAAAAgAjKAYQgegcAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAcQgeAdgqAAQgrAAgegdgAhdhbQgIAIAAALIAAABQAAALAIAIQAIAIALAAIAAAAQAGAAAEgBQAFgCAFgFQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAkeAgQgDgVAAgVIABgVIABgSQgCAqAIA3QgCgKgDgGgAAkgXQgegdAAgpQAAgUAIgSQAHgRAPgPIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAdQgeAcgqAAQgrAAgegcgAAeh1QgHAGgBAKIAAADIAAAAQAAAMAIAIQAIAIALAAQAGAAAEgCIAGgDIAEgDIADgEQAFgHAAgJIAAgDIgBgGIgDgFIgBgCIgDgDQgIgIgMAAQgLAAgIAIg");
	this.shape_42.setTransform(-23.1,48.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AElhbQgHgUAGgMQAJgRAdAJQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAHQgRAIgJgQQgDgFgCgGQADAkgHAnQgNBDgsBJAEphRQALAfADAgQgFgOgDgTQgEgYgCgGgAElhbQACAEACAFQAAAAAAABAB0kLQAMAFAMAGIAHAEQAOAIANAJIANAKQAnAdAeApQAYAfANAhAAZkfQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaAhKgrQAAALgIAIQgEAEgGACQgEACgGAAQgLAAgIgIQgIgIAAgLQAAgBAAAAQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMgAgbgtQAAApgeAcQgeAdgqAAQgrAAgegdQgegcAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgADThdQAAApgeAdQgeAcgqAAQgrAAgegcQgegdAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgABAhUQAAgCAAgBQABgKAHgGQAIgIALAAQAMAAAIAIQABABACACQAEAGABAGQAAACAAACQAAAJgFAHQgCACgBACQgFAEgFACQgEACgGAAQgLAAgIgIQgIgIAAgMAjui9QgBABgBABQgXAjgMAsQgIAcgEAfQAAAJgBAJQgCAgAEAfQADAGACAKQACAGABAHQABAGAAAIQABACABADQAHANAAAKQABADgBADQgBANgLAPQgLAQgYgOQgZgOgHgPQgIgPAAgUQAAgVAHgPQAIgPALAAQALgBATAAQAIAAAFAJQADAWAGAVQACAHACAHQADAHACAHQAOAjAXAhQArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghAg5C1QAFAGBYgQQBigRAaghAgdArQALAPASADQAiAIAkguAhgEhQgIAAgHgBQgBAAgCAA");
	this.shape_43.setTransform(-23.1,48.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC99").s().p("AhqEJQgZgQgagVQg2grgfgnQgWgggOgjQgBgKgGgOIgBgCIgCgQIgDgOIADAOIABAOQgGgVgDgWQADAWAGAVIAEANIAFAPIAAADIAAACQgBAOgLAPQgLAPgYgNQgZgOgIgPQgHgPAAgVQAAgUAHgPQAIgPALAAIAeAAQAIAAAFAIQADAGACAJQgIg2ACgqQAEggAHgcQANgrAXgjIABgCIASgSQAbgZAfgRQBJgpBeACIAVABQAxADAqARIAYALIAHAEQAOAHANAKIANAKQATAPARATQBVBfAAB9IgCAcQglBlghA7QgdA1gZAUQg2AqhSAFIgIAAQg7AAhLgwgAgWCbIAEgBIAVgDIAOgDIACAAIABAAIAEgBIACAAQBigRAagiQgaAihiARIgCAAIgEABIgBAAIgCAAIgOADIgVADIgEABQgYADgLAAIAAAAQgIAAgCgCIAAAAIAAAAQACACAIAAIAAAAQALAAAYgDgAABAmQAcgBAdgkIACgBIgCABQgdAkgcABIgBAAIAAAAIgJgBIgBAAQgSgEgLgOQALAOASAEIABAAIAJABIAAAAIABAAgAjNiRIgHAGQgeAdAAApQAAApAeAcQAeAdArAAQAqAAAegdQAegcAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAAhjBIgHAGQgdAdAAApQAAApAdAdQAeAdArAAQAqAAAegdQAegdAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAkWBUIAAgCIAAgDQAOAjAWAgQgZgggLgegAkWBPIAAAAgAkWBPIAAAAgAkbBAIgCgJQAGAOABAKIgFgPgAkdA3IAAAAgAEygfIgFgLQgDghgLgeIAAgBIgEgJQgHgVAGgMQAJgRAdAKQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAIQgGACgFAAQgJAAgGgLgAElhLIgGgeQALAeADAhQgFgOgDgTgAEfhpIAAAAgAA2h0IAAAAQAAgMAIgHQAIgIALAAQAMAAAIAIIADADQAFAHAAAJIgBAEQAAgHgEgFIgDgEQgIgIgMAAQgLAAgIAIQgHAHgBAJIAAgEgAj6jTQgXAjgNArQAGgtAeghgAj6jTIAAAAg");
	this.shape_44.setTransform(-22.1,51.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhvEgIgDAAQhKg3grg+QAfAmA1ArQAaAVAZAQIgPgBgAkND1QiGhAgQh1QgPh0BvhlQBEg+BcghQgfARgbAZIgRARIgCACQgeAhgFAuQgIAcgEAfIgBASIgBAVQAAAVADAVQgDgVAAgVIABgVIABgSQgCAqAIA3QgCgKgDgGQgFgJgIAAIgeABQgLAAgIAPQgHAPAAAVQAAAUAIAPQAHAPAZAOQAYAOALgQQALgPABgNQALAdAaAhQArA+BKA3QhTgJhIgigAEzA5IABgcQABh9hWhfQgRgTgTgPQAnAdAeApQAYAfANAhIAEAJIAAABIAGAeQADATAFAOIAFALQAJAQARgIQARgHAIgRQAJgRAAgYQAAgYgJgRQgIgRgdgJQgdgJgJARQgGAMAHAUQgNghgYgfQgegpgngdIgNgKQgNgJgOgIIgHgEIgYgLQgqgQgxgEQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaQAhg7AmhlgAEzA5QgNBDgsBJQAshJANhDQAFgbAAgaIgBgWIABAWQAAAagFAbgAjnCrIAAAAgAkVBLIACAFIACAJIgEgOgAkVBLIgBgOIADAQIAAADIgCgFgAjKAYQgegcAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAcQgeAdgqAAQgrAAgegdgAh5g/QgIAIAAALIAAABQAAALAIAIQAIAIALAAQAGAAAEgCQAGgCAEgEQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAAkgXQgegdAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAdQgeAcgqAAQgrAAgegcgABIhvQgIAIAAALIAAABIAAAEIAAADIAAAAQAAAMAIAIQAIAIALAAQAGAAAEgCQAFgCAFgEIADgEQAFgHAAgJIAAgEIAAgDQAAgKgFgGIgDgEQgIgIgMAAQgLAAgIAIgAElhbIAAAAg");
	this.shape_45.setTransform(-23.1,48.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AElhbQgHgUAGgMQAJgRAdAJQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAHQgRAIgJgQQgDgFgCgGQADAkgHAnQgNBDgsBJAEphRQALAfADAgQgFgOgDgTQgEgYgCgGgAElhbQACAEACAFQAAAAAAABAB0kLQAMAFAMAGIAHAEQAOAIANAJIANAKQAnAdAeApQAYAfANAhAhgkBIB5geIAAAAQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaAB3kTQgCAEgDAEQhCBihQAWAguhHQAAALgIAIQgFAFgFACQgEABgGAAIAAAAQgLAAgIgIQgIgIAAgLIAAgBQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAAMgAgbgtQAAApgeAcQgeAdgqAAQgrAAgegdQgegcAAgpQAAgpAegdQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgADThdQAAApgeAdQgeAcgqAAQgrAAgegcQgegdAAgpQAAgUAIgSQAHgRAPgPQAEgDADgDQAcgXAmAAQAmAAAcAXQADADADADQAeAdAAApgAAWhlQABgKAHgGQAIgIALAAQAMAAAIAIQABABACACQABABAAABQACACABADQABADAAADQAAABAAACQAAAJgFAHQgCACgBACQgCABgCACQgDACgDABQgEACgGAAQgLAAgIgIQgIgIAAgMAjui9QgBABgBABQgXAjgMAsQgIAcgEAfQAAAJgBAJQgCAgAEAfQADAGACAKQACAGABAHQABAGAAAIQABACABADQAHANAAAKQABADgBADQgBANgLAPQgLAQgYgOQgZgOgHgPQgIgPAAgUQAAgVAHgPQAIgPALAAQALgBATAAQAIAAAFAJQADAWAGAVQACAHACAHQADAHACAHQAOAjAXAhQArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghAgzDMQAEgDBdgNQBfgOAYgIAgdArQALAPASADQAiAIAkguAhgEhQgIgBgHAAQgBAAgCAAAi8jNQBLAzBaAL");
	this.shape_46.setTransform(-23.1,48.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC99").s().p("AhqEJQgZgQgagVQg2grgfgnQgWgggOgjQgBgKgGgOIgBgCIgCgQIgDgOIADAOIABAOQgGgVgDgWQADAWAGAVIAEANIAFAPIAAADIAAACQgBAOgLAPQgLAPgYgNQgZgOgIgPQgHgPAAgVQAAgUAHgPQAIgPALAAIAeAAQAIAAAFAIQADAGACAJQgIg2ACgqQAEggAHgcQANgrAXgjIABgCIASgSQAbgZAfgRIAAAAQBJgpBeACIAVABIAAAAQAwADApAQIACABIAYALIAHAEQAOAHANAKIANAKQATAPARATQBVBfAAB9IgCAcQglBlghA7QgdA1gZAUQg2AqhSAFIgIAAQg7AAhLgwgAAkCjQhdAOgEACQAEgCBdgOQBfgNAYgIQgYAIhfANgAABAmQAcgBAdgkIACgBIgCABQgdAkgcABIgBAAIAAAAIgJgBIgBAAQgSgEgLgOQALAOASAEIABAAIAJABIAAAAIABAAgAjNiRIgHAGQgeAdAAApQAAApAeAcQAeAdArAAQAqAAAegdQAegcAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAAhjBIgHAGQgPAOgHASQgHARAAAVQAAApAdAdQAeAdArAAQAqAAAegdQAegdAAgpQAAgpgegdIgGgGQgcgXgmAAQgmAAgcAXgAghioQhagLhLgzQBLAzBaALgAgqisQBQgVBChjQhCBjhQAVgAhqkaIB5gdgAkWBUIAAgCIAAgDQAOAjAWAgQgZgggLgegAkWBPIAAAAgAkWBPIAAAAgAkbBAIgCgJQAGAOABAKIgFgPgAkdA3IAAAAgAEygfIgFgLQgDghgLgeIAAgBIgEgJQgHgVAGgMQAJgRAdAKQAdAJAIARQAJARAAAYQAAAYgJARQgIARgRAIQgGACgFAAQgJAAgGgLgAElhLIgGgeQALAeADAhQgFgOgDgTgAEfhpIAAAAgAj6jTQgXAjgNArQAGgtAeghgAj6jTIAAAAg");
	this.shape_47.setTransform(-22.1,51.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhvEgIgDAAQhKg3grg+QArA+BKA3QhTgJhIgiQiGhAgQh1QgPh0BvhlQBEg+BcghQgfARgbAZIgRARIgCACQgeAhgFAuQgIAcgEAfIgBASIgBAVQAAAVADAVQgFgJgIAAIgeABQgLAAgIAPQgHAPAAAVQAAAUAIAPQAHAPAZAOQAYAOALgQQALgPABgNQALAdAaAhQAfAmA1ArQAaAVAZAQIgPgBgAEzA5IABgcQABh9hWhfQgRgTgTgPQAnAdAeApQAYAfANAhIAEAJIAAABIAGAeQADATAFAOIAFALQAJAQARgIQARgHAIgRQAJgRAAgYQAAgYgJgRQgIgRgdgJQgdgJgJARQgGAMAHAUQgNghgYgfQgegpgngdIgNgKQgNgJgOgIIgHgEIgYgLIgCAAIAFgIIgFAIQgpgQgwgEQCIgIBsA0QCHBAAPB1QAQB0hwBlQgnAkgwAaQAhg7AmhlgAEzA5QgNBDgsBJQAshJANhDQAFgbAAgaIgBgWIABAWQAAAagFAbgAkVBLIACAFIACAJIgEgOgAkVBLIgBgOIADAQIAAADIgCgFgAjKAYQgegcAAgpQAAgpAegdIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAcQgeAdgqAAQgrAAgegdgAhdhbQgIAIAAALIAAABQAAALAIAIQAIAIALAAIAAAAQAGAAAEgBQAFgCAFgFQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAkeAgQgDgVAAgVIABgVIABgSQgCAqAIA3QgCgKgDgGgAAkgXQgegdAAgpQAAgUAIgSQAHgRAPgPIAHgGQAcgXAmAAQAmAAAcAXIAGAGQAeAdAAApQAAApgeAdQgeAcgqAAQgrAAgegcgAAeh1QgHAGgBAKIAAADIAAAAQAAAMAIAIQAIAIALAAQAGAAAEgCIAGgDIAEgDIADgEQAFgHAAgJIAAgDIgBgGIgDgFIgBgCIgDgDQgIgIgMAAQgLAAgIAIgAElhbIAAAAg");
	this.shape_48.setTransform(-23.1,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},6).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_37},{t:this.shape_43}]},3).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_40},{t:this.shape_46}]},5).wait(3));

	// detail
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AqEljIA9iSINRj3IBxBlQCkG1gHCrAIhgWQAUAnAHAkQALAygvAfQgwAegSgrQgSgrgXhBQgYg/gSgvQgTgwAbgUQAbgUAmAiQAmAiARAjQARAjAEAIQAFAJAEAIQAahjBKIyIukE0QjgmpB5ANIgsixQhAEtiSswApBl8QghAMgiANAkFDyQAABQgTA4QgTA4gaAAQgbAAgTg4QgSg4gQhTQgPhTgBg8QAAg8A9AHQA9AHATA4QATA5AABPgAF7qHIu8ELQH1i2HHhVg");
	this.shape_49.setTransform(-15.5,79.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AmFEeIgtixQhAEtiRswIBCgZIO8kLQCkG1gHCrIgVgqQgRgjgmgjQgmgigbAUQgbAVATAvQASAvAYBAQAXBAASArQASArAwgeQAvgegLgyQgHgjgUgpQAahjBKIyIukE0QjgmoB6AMgAmlAtQABA9APBSQAQBTASA4QATA5AbgBQAbABASg5QAUg4gBhPQABhQgUg4QgTg4g9gHIgMgBQgxAAAAA1g");
	this.shape_50.setTransform(-15.5,84.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AnCAzINRj3IBxBmQnJBVnzC0IhDAagAm8CrIAAAAgAIAheIu8EJQHzi0HJhVg");
	this.shape_51.setTransform(-28.8,23.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("Am4D3QgTg4gPhSQgQhTAAg7QgBg9A+AIQA9AHATA4QATA3AABQQAABPgTA4QgTA5gbAAQgaAAgTg5gAnvBkQgIgmAAghIAsCyQgYgvgMg8gAGQgIQgSgrgXhBQgXhBgTgvQgTgvAbgUQAbgVAmAjQAmAiARAjIAWAqIAJASQATAoAHAkQALAygvAdQgTANgPAAQgVAAgLgYg");
	this.shape_52.setTransform(-8.5,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-14.9,245.5,294.2);


// stage content:
(lib.finalTESTING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function UI(){
			this.scorelabel = exportRoot.score;
			this.gameOver = exportRoot.gameOver;
			this.getReady = exportRoot.getReady;
			this.startInstructions = exportRoot.instructions;
			this.screenFlash = exportRoot.screenFlash;
			this.getReadyF();
		}
		
		UI.prototype.updateScore = function(score){
			this.scorelabel.text = score;
		}
		
		UI.prototype.gameStart = function(){
			this.updateScore(0);
			this.gameOver.visible = false;
			this.getReady.visible = false;
			this.startInstructions.visible = false;
			this.screenFlash.visible = false;
		}                          
		
		UI.prototype.getReadyF = function(){
			this.gameOver.visible = false;
			this.getReady.visible = true;
			this.startInstructions.visible = true;
			this.screenFlash.visible = false;
		}
		
		UI.prototype.gameOverF = function(){
			this.gameOver.visble = true;
			this.getReady.visible = false;
			this.startInstructions.visible = true;
		}
		
		UI.prototype.startScreenFlash = function(){
			this.screenFlash.visible = true;
			this.screenFlash.alpha = 1;
			createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
		}
		function Character() {
		
		
			this.mc = exportRoot.character;
			this.initY = this.mc.y;
			this.state = Character.DEAD;
			this.velocity = 0;
			this.setupCollisionPoints();
		}
		
		Character.prototype.startFlying = function () {
			this.state = Character.ALIVE;
			this.mc.y = this.initY;
			this.mc.play();
			this.velocity = 0;
			this.fly();
			
		}
		
		Character.prototype.update = function () {
			if (this.state == Character.ALIVE || this.state == Character.DYING) {
				this.updateVelocity();
			}
		}
		
		Character.ALIVE = 0;
		Character.DYING = 1;
		Character.DEAD = 2;
		
		Character.prototype.isAlive = function () {
			return (this.state == Character.ALIVE);
		}
		Character.prototype.isDead = function () {
			return (this.state == Character.DEAD);
		}
		
		Character.prototype.updateVelocity = function () {
			this.velocity += Main.GRAVITY;
			if (this.velocity > Main.MAX_VELOCITY) {
				this.velocity = Main.MAX_VELOCITY;
			}
			this.mc.y += this.velocity;
		}
		
		Character.prototype.fly = function () {
			if (this.state == Character.ALIVE && this.mc.y > 0) {
				this.velocity = Main.FLAP_IMPULSE;
				createjs.Sound.play("flap");
			}
		}
		
		Character.prototype.setupCollisionPoints = function () {
			this.collisionPoints = [this.mc.hit0, this.mc.hit1, this.mc.hit2,
				this.mc.hit3, this.mc.hit4, this.mc.hit5,
				this.mc.hit6, this.mc.hit7, this.mc.hit8];
			
			for (var i = 0; i < this.collisionPoints.length; i++) {
				this.collisionPoints[i].visible = false;
			}
		}
		
		Character.prototype.hitTest = function(target) {
			for (var i = 0; i < this.collisionPoints.length; i++) {
				var pt = this.collisionPoints[i].localToLocal(0, 0, target);
				var collision = target.hitTest(pt.x, pt.y);
				if (collision == true) {
					return true;
				}
			}
			return false;
		}
		
			Character.prototype.hitGround = function () {
				if (this.state == Character.ALIVE){
					createjs.Sound.play("point");
					}
				this.state = Character.DEAD;
				this.mc.stop();
			}
			
			Character.prototype.fallFromSky = function(){
				if(this.state == Character.ALIVE){
					this.state = Character.DYING;
					this.velocity = 0;
					createjs.Sound.play("point");
				}
			}
			
			Character.prototype.getPosition = function(){
				return{x: this.mc.x, y: this.mc.y};
			}
		function Rocks(){
			this.scrolling = false;
			
			this.distanceBetweenRocks = exportRoot.rock1.x - exportRoot.rock0.x;
			this.leftBound = 20; //exportRoot.rock0.nominalBounds.width;
			this.maxRockY = exportRoot.rock0.y;
			this.minRockY = exportRoot.rock2.y;
			
			//this.rocks = [exportRoot.rock0, exportRoot.rock1, exportRoot.rock2];
			this.setupStartPosition();
		}
		
		Rocks.prototype.startScrolling = function(){
			this.scrolling = true;
			this.setupStartPosition();
			this.approachingRock = this.rocks[0];
		}
		
		Rocks.prototype.stopScrolling = function(){
			this.scrolling = false;
		}
		
		Rocks.prototype.update = function(){
			if(this.scrolling == true){
				//console.log("scrolling");
				this.updateRockPositions();
				this.checkLeftRockIsOutsideScreen();
			}
		}
		
		Rocks.prototype.updateRockPositions = function(){
			for(var i =0; i<this.rocks.length;i++){
				var rock = this.rocks[i];
				rock.x -= Main.SCROLL_SPEED;
			}
		}
		
		Rocks.prototype.checkLeftRockIsOutsideScreen = function(){
			var leftMostRock = this.rocks[0];
			var rightMostRock = this.rocks[2];
				if(leftMostRock.x < this.leftBound){
					leftMostRock.x = rightMostRock.x + this.distanceBetweenRocks;
					this.setRandomYPosition(leftMostRock);
					this.rocks.shift();
					this.rocks.push(leftMostRock);
					//console.log("test");
				}
		}
		
		Rocks.prototype.setRandomYPosition = function(rock) {
			var delta = this.minRockY - this.maxRockY;
			rock.y = this.maxRockY + Math.round(Math.random() * delta);
			//console.log("random");
		}
		
		Rocks.prototype.setupStartPosition = function(){
			this.rocks = [exportRoot.rock0, exportRoot.rock1, exportRoot.rock2];
				for(var i = 0; i<this.rocks.length; i++){
					var rock = this.rocks[i];
					rock.x = (lib.properties.width * 1.5) + (i * this.distanceBetweenRocks);
					this.setRandomYPosition(rock);
				}
		}
		
		Rocks.prototype.isCharacterTouchingRocks = function(character){
			for(var i = 0; i<this.rocks.length; i++){
				if(character.hitTest(this.rocks[i])){
					return true;
				}
			} return false;
		}
		
		Rocks.prototype.setNextApproachingRock = function(){
			for(var i = 0; i < this.rocks.length; i++){
				if(this.rocks[i] == this.approachingRock){
					this.approachingRock = this.rocks[i +1];
					return;
				}
			}
		}
		
		Rocks.prototype.hasCharacterPassedRock = function(character){
			var CharacterXPosition = character.getPosition().x;
			if(CharacterXPosition > this.approachingRock.x){
				return true;
			} return false;
		}
		function Ground() {
			this.scrolling = false;
			this.slices = [exportRoot.ground0, exportRoot.ground1, exportRoot.ground2];
			this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
			this.leftBound = exportRoot.ground0.x - this.sliceWidth;
		}
		
		Ground.prototype.update = function () {
			if (this.scrolling == true) {
				this.updateSlicePositions();
				this.checkLeftSliceIsOutsideScreen();
		
			}
		}
		
		Ground.prototype.startScrolling = function () {
			this.scrolling = true;
		}
		Ground.prototype.stopScrolling = function () {
			this.scrolling = false;
		}
		
		Ground.prototype.updateSlicePositions = function () {
			for (var i = 0; i < this.slices.length; i++) {
				var slice = this.slices[i];
				slice.x -= Main.SCROLL_SPEED;
			}
		}
		
		Ground.prototype.checkLeftSliceIsOutsideScreen = function () {
			var firstSlice = this.slices[0];
			var lastSlice = this.slices[2];
			if (firstSlice.x < this.leftBound) {
				firstSlice.x = lastSlice.x + this.sliceWidth;
				this.slices.shift();
				this.slices.push(firstSlice);
			}
		}
		
		
		Ground.prototype.isCharacterTouchingGround = function (character) {
			for (var i = 0; i < this.slices.length; i++) {
				if (character.hitTest(this.slices[i])) {
					return true;
				}
			}
		
			return false;
		}
		function Main(){
			this.character = new Character();
			this.rocks = new Rocks();
			this.ground = new Ground();
			this.ui = new UI();
			this.score = 0;
			
			this.registerSound();
			
			canvas.onmousedown = this.userPressed.bind(this);
			window.onkeydown = this.userPressed.bind(this);
		
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
			}
					
		Main.prototype.update = function(evt){
			this.ground.update();
			this.rocks.update();
			this.character.update();
			
			this.checkForCharacterCollidingWithGround();
			this.checkForCharacterCollidingWithRocks();
			this.checkForCharacterPassingRock();
		}
		
		Main.prototype.userPressed = function(evt){
			if(this.character.isDead()){
				this.startGame();
			} else {
				this.character.fly();
				}
		}
		
		Main.prototype.startGame = function()
		{
		  this.score = 0;
		  this.ground.startScrolling();
		  this.rocks.startScrolling();
		  this.character.startFlying();
		  this.ui.gameStart();
			
		}
		
		Main.SCROLL_SPEED = 3.0;
		Main.GRAVITY = 0.55;
		Main.FLAP_IMPULSE = -8.15;
		Main.MAX_VELOCITY = 20;
		
		
		
		
		
		
		Main.prototype.checkForCharacterCollidingWithGround = function(){
			if(this.character.isDead() == false){
				if(this.ground.isCharacterTouchingGround(this.character)){
					this.characterHitGround();
				}
			}
		}
		
		
		Main.prototype.characterHitGround = function(){
			this.character.hitGround();
			this.ground.stopScrolling();
			this.rocks.stopScrolling();
			this.ui.gameOverF();
			
			canvas.addEventListener("click", function(event){
				window.open("intro.html", "_self");
			});
		}
		
		Main.prototype.checkForCharacterCollidingWithRocks = function(){
			if(this.character.isAlive()){
				if(this.rocks.isCharacterTouchingRocks(this.character)){
					this.characterHitRock();
				}
			}
		}
		
		
		Main.prototype.characterHitRock = function(){
			this.character.fallFromSky();
			this.ground.stopScrolling();
			this.rocks.stopScrolling();
			this.ui.startScreenFlash();
		}
		
		Main.prototype.checkForCharacterPassingRock = function(){
			if(this.character.isAlive()){
				if(this.rocks.hasCharacterPassedRock(this.character)){
					this.rocks.setNextApproachingRock();
					this.scoredPoint();
				}
			}
		}
		
		
		Main.prototype.scoredPoint = function(){
			this.score++;
			this.ui.updateScore(this.score);
			createjs.Sound.play("hit");
		}
		
		Main.prototype.registerSound = function(){
			createjs.Sound.registerSound("point.wav", "point");
			createjs.Sound.registerSound("flap.wav", "flap");
			createjs.Sound.registerSound("hit.wav", "hit");
		}
		
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// screenFlash
	this.screenFlash = new lib.screenFlash();
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(152,207.5,1,1,0,0,0,152,207.5);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// score
	this.score = new cjs.Text("0", "bold 36px 'Prestige Elite Std'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 43;
	this.score.lineWidth = 48;
	this.score.parent = this;
	this.score.setTransform(130,20.3);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// anykey
	this.instructions = new lib.instructions();
	this.instructions.parent = this;
	this.instructions.setTransform(157.5,316.4,1,1,0,0,0,118.5,54.6);
	this.instructions.cache(-2,-2,241,113);

	this.timeline.addTween(cjs.Tween.get(this.instructions).wait(1));

	// gameOver
	this.gameOver = new lib.gameOver();
	this.gameOver.parent = this;
	this.gameOver.setTransform(158.5,163.9,1,1,0,0,0,106.5,24.3);
	this.gameOver.cache(-2,-2,217,53);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(1));

	// getReady
	this.getReady = new lib.getReady();
	this.getReady.parent = this;
	this.getReady.setTransform(163.5,163.9,1,1,0,0,0,106.5,24.3);
	this.getReady.cache(-2,-2,217,53);

	this.timeline.addTween(cjs.Tween.get(this.getReady).wait(1));

	// character
	this.character = new lib.character();
	this.character.parent = this;
	this.character.setTransform(45,183.8,0.26,0.26,0,0,0,8.8,135.4);

	this.timeline.addTween(cjs.Tween.get(this.character).wait(1));

	// ground
	this.ground2 = new lib.ground();
	this.ground2.parent = this;
	this.ground2.setTransform(747.7,414.5,1,1,0,0,0,150,67.5);

	this.ground1 = new lib.ground();
	this.ground1.parent = this;
	this.ground1.setTransform(449.1,414.5,1,1,0,0,0,150,67.5);

	this.ground0 = new lib.ground();
	this.ground0.parent = this;
	this.ground0.setTransform(150.6,414.5,1,1,0,0,0,150,67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground0},{t:this.ground1},{t:this.ground2}]}).wait(1));

	// rocks
	this.rock2 = new lib.rock();
	this.rock2.parent = this;
	this.rock2.setTransform(366.7,272.6,1,1,0,0,0,35.7,122.6);

	this.rock1 = new lib.rock();
	this.rock1.parent = this;
	this.rock1.setTransform(158.7,214.9,1,1.076,0,0,0,35.7,122.6);

	this.rock0 = new lib.rock();
	this.rock0.parent = this;
	this.rock0.setTransform(-26.5,106,1,1,0,0,0,65.5,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rock0},{t:this.rock1},{t:this.rock2}]}).wait(1));

	// new bg
	this.instance = new lib.newbg();
	this.instance.parent = this;
	this.instance.setTransform(137.5,191.5,1,1,0,0,0,-20.9,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.3,-70.1,999.3,801.8);
// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;