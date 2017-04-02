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


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("tap anywhere to start", "21px 'Showcard Gothic'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 414;
	this.text.parent = this;
	this.text.setTransform(209,5);

	this.text_1 = new cjs.Text("tap anywhere to start", "21px 'Showcard Gothic'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 414;
	this.text_1.parent = this;
	this.text_1.setTransform(209,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,418,172.7), null);


(lib.level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBBIgJgBIgJgDIgGgDIAAgSIAHAFIAJAEIAJACIAJABQAMAAAHgFQAHgGAAgJQAAgFgCgEQgDgDgEgEIgJgFIgLgGIgMgHQgGgDgEgEQgEgEgCgFQgDgGAAgGQAAgJAEgHQAEgGAGgEQAGgEAIgCQAIgCAHAAQASAAAJAFIAAAQQgLgIgSAAIgIACQgFAAgEACQgEADgCAEQgCADAAAFQAAAFABAEIAGAGIAIAFIALAHIANAGIAKAIIAIAKQACAFAAAHQAAAKgDAGQgEAHgGAEQgGADgJADQgIABgIAAIgHAAg");
	this.shape.setTransform(75.5,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA/IAAhwIglAAIAAgNIBXAAIAAANIglAAIAABwg");
	this.shape_1.setTransform(65.9,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA/IAAgNIANAAIAAhjIgNAAIAAgNIAnAAIAAANIgMAAIAABjIAMAAIAAANg");
	this.shape_2.setTransform(58.8,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyA/IAAh9IAjAAQBCAAAAA9QAAAcgTATQgSARgeAAgAgjAyIATAAQAYAAANgNQAOgOAAgXQAAgxgyAAIgUAAg");
	this.shape_3.setTransform(50.5,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA/IAAh9IA+AAIAAANIgvAAIAAAqIAsAAIAAAMIgsAAIAAAtIAyAAIAAANg");
	this.shape_4.setTransform(39.7,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcA/IgWgjQgCgGgDgCIgFgGIgGgDIgHgBIgMAAIAAA1IgPAAIAAh9IAlAAQAIAAAHACQAHACAFAEQAFAFADAGQADAGAAAIQAAAHgCAGQgCAFgEAFIgJAGQgFADgGACIAAAAIAFADIAFAFIAEAFIAEAHIAYAmgAgdgDIAUAAQAFAAAEgBQAFgCADgEQADgDACgEQACgFAAgFQAAgKgGgGQgHgFgLgBIgUAAg");
	this.shape_5.setTransform(30.1,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAwQgQgRAAgcQAAgeASgTQASgSAbAAQASAAAMAFIAAAQQgOgIgQAAQgVAAgNAOQgOAPAAAYQAAAWANAOQANAOATAAQATAAAOgJIAAAPQgOAHgVAAQgaAAgQgRg");
	this.shape_6.setTransform(18.4,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AHaAAQAABiiMBGQiKBGjEAAQjDAAiLhGQiLhGAAhiQAAhiCLhGQCLhFDDAAQDEAACKBFQCMBGAABig");
	this.shape_7.setTransform(47.4,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_8.setTransform(47.4,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C20000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_9.setTransform(47.4,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,96.7,49.6);


(lib.level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBOIAAgHQAAgKADgIQACgHAFgHQAFgHAIgHIATgPQAIgGAFgEQAGgGADgFQAEgGABgFIACgMQAAgHgCgGQgDgFgDgDQgEgEgGgCQgFgBgFAAIgKABIgJAEIgJAGIgJAHIAAgTQAIgHAJgEQAJgDANAAQAJAAAIACQAIADAGAFQAGAGADAHQAEAIAAAKQAAAJgCAIQgDAHgEAHQgEAFgHAGQgGAGgJAGIgQAOQgIAFgEAFQgEAFgBAFQgCAEAAAGIBMAAIAAAQg");
	this.shape.setTransform(80.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBNIAAiZIASAAIAACJIA9AAIAAAQg");
	this.shape_1.setTransform(64,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoBNIAAiZIBNAAIAAAQIg7AAIAAAzIA3AAIAAAQIg3AAIAAA2IA/AAIAAAQg");
	this.shape_2.setTransform(52.9,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBNIg4iZIAUAAIAqB5IADAOIAEgOIArh5IATAAIg5CZg");
	this.shape_3.setTransform(40,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoBNIAAiZIBOAAIAAAQIg8AAIAAAzIA3AAIAAAQIg3AAIAAA2IA/AAIAAAQg");
	this.shape_4.setTransform(28.1,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBNIAAiZIASAAIAACJIA9AAIAAAQg");
	this.shape_5.setTransform(17.7,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AHaAAQAABiiMBGQiKBGjEAAQjDAAiLhGQiLhGAAhiQAAhiCLhGQCLhFDDAAQDEAACKBFQCMBGAABig");
	this.shape_6.setTransform(47.4,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_7.setTransform(47.4,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C20000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_8.setTransform(47.4,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,96.7,49.6);


(lib.LEVEL1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJBPIAAiEIgGAEIgIAGIgKAEIgLAEIAAgSIANgEIAMgGIALgHIAKgIIAHAAIAACdg");
	this.shape.setTransform(79.5,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBNIAAiZIASAAIAACJIA9AAIAAAQg");
	this.shape_1.setTransform(64,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoBNIAAiZIBNAAIAAAQIg7AAIAAAzIA3AAIAAAQIg3AAIAAA2IA/AAIAAAQg");
	this.shape_2.setTransform(52.9,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBNIg4iZIAUAAIAqB5IADAOIAEgOIArh5IATAAIg5CZg");
	this.shape_3.setTransform(40,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoBNIAAiZIBOAAIAAAQIg8AAIAAAzIA3AAIAAAQIg3AAIAAA2IA/AAIAAAQg");
	this.shape_4.setTransform(28.1,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBNIAAiZIASAAIAACJIA9AAIAAAQg");
	this.shape_5.setTransform(17.7,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AHaAAQAABiiMBGQiKBGjEAAQjDAAiLhGQiLhGAAhiQAAhiCLhGQCLhFDDAAQDEAACKBFQCMBGAABig");
	this.shape_6.setTransform(47.4,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_7.setTransform(47.4,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C20000").s().p("AlOCoQiKhFgBhjQABhiCKhGQCLhFDDAAQDEAACLBFQCKBGAABiQAABjiKBFQiLBGjEAAQjDAAiLhGg");
	this.shape_8.setTransform(47.4,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,96.7,49.6);


(lib.introduction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787878").s().p("ApFcZQgfgTgRgbQgKgQgGgTQgHgVgCgsQgCgqAAg2QAAg6AFgkQAHg0ATgnQAag0A2glQAygiA/gRQAtgMAkADQA6AGAsAsQAsAsAIA5QAEAhgHAgQgGAYgrgJQgrgKgUAoQgUAohVAnQhVAnAJBdQAJBdBYhDQBYhDAAAEQABAPgBANIgBAIQgDAdgRAaQgPAZgZASQgvAihAAAQg5AAgsgbgAMNWHQgagDgVgMQgXgOgMgUQgKgQgEgXQgDgQgBgaQgBghADgWQAEgeANgWQAQgaAcgQQAbgPAggCQAZgBAWAHQAYAHASAOQATAPALAXQAKAWgBAXQgBAMgEARIgGAcIgFAfQgDATgEALQgNAkgmATQgcAPgeAAIgSgCgAMexoIgEgCQgkgLgcgZQgdgagLgiQgGgWgBgjQgCgxABhIQABg3AHgdQAThDA7gnQArgdBVgQQA1gJAbAEQAxAFAnAjIANANQAcAfAHApQAJAxgYAvQgZAvgtAUQgNAFgEAFQgHAIABAUQAEA5gPAnQgWA5g8AcQggAPgiAAQgXAAgYgGgAuN0UQgxgFgngcQgVgPglgrQgogrgKgeQgGgUgBghQgCgjAAgsQAAgpADgZQAEgkALgcQAPgoAhgeQAggeApgLQApgMArAKIATAGQAfALAYAWQAfAeAMArQALArgNAoIgJAbQgFAQACALQABALAHALIANAUQAYAjAGAjQAJAugXAuQgXAtgrAXQgKAFgLAEQgaAKgcAAIgRgBg");
	this.shape.setTransform(-97.1,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ArTc7QgtgcgPgxQgFgNgCgXQARAbAfATQAsAbA5AAQBAAAAvgiQAZgTAPgZQARgaADgcIABgJQAFAegGA3QgGAwABAEIgJAJQgNALgXASQgtAgg9AAQg2AAgrgagAqOaPQgKhdBWgnQBVgnAUgnQAUgoArAJQArAJAFgXQADALACALQAIA3gcAzQgbA0gyAZQgKAGgDAEIgCAEQAAgFhYBDQglAcgXAAQggAAgFg2gAJnXVQgjgFgegRQgfgSgRgcQgOgWgFgfQgEgWgBgkQgCguAFgeQAFgqASgdQAVgkAngWQAmgVAsgDQAhgCAgAKQAgAJAZAUQAaAVAPAfQAOAegBAhQgBAPgGAYIgJAnIgGArQgEAZgGAQQgSAxg0AbQgnATgpAAQgMAAgNgBgAKCQ+QggACgbAPQgcAQgQAaQgNAVgEAfQgDAVABAiQABAaADAQQAEAXAKAQQAMAUAXANQAVAMAaAEQAoAFAkgSQAmgUANgjQAEgMADgSIAFgfIAGgcQAEgSABgLQABgYgKgWQgLgWgTgPQgSgPgYgHQgSgFgUAAIgJAAgALKxZQgkgLgcgZIgNgNQA7AQA2gYQA8gcAWg5QAPgogEg4QgBgVAHgHQAEgGANgFQAtgTAZgwQAYgvgJgxQgHgogcgfQAlAJAfAcQAnAjAJAxQAJAxgYAvQgZAwgtATQgNAFgEAGQgHAHABAVQAEA4gPAoQgWA5g8AcQggAPgiAAQgZAAgagIgAu901QgWgCgUgHQALgEAKgGQArgWAXguQAXgtgJgvQgGgigYgjIgNgUQgHgMgBgKQgCgMAFgPIAJgcQANgogLgrQgMgrgfgdQgYgXgfgLIAKgDQApgMArAKQArAKAfAdQAfAeAMArQALArgNAoIgJAbQgFAQACALQABALAHALIANAUQAYAjAGAjQAJAugXAuQgXAtgrAXQgjATgoAAIgRgBg");
	this.shape_1.setTransform(-81,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// TEXT
	this.text = new cjs.Text("SPACE CRASH", "74px 'Showcard Gothic'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 94;
	this.text.lineWidth = 318;
	this.text.parent = this;
	this.text.setTransform(-102.2,-74.7);

	this.text_1 = new cjs.Text("SPACE CRASH", "74px 'Showcard Gothic'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 94;
	this.text_1.lineWidth = 318;
	this.text_1.parent = this;
	this.text_1.setTransform(-102.2,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.329)").s().p("AWJb5Ihfg4IBtgPIAYhsIAxBjIBtgJIhPBMIArBlIhhg0IhTBIgA3o6nIhkg7IBzgRIAahxIAzBpIB0gLIhUBRIAtBrIhmg3IhYBMg");
	this.shape_2.setTransform(-102.6,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003366").s().p("EALvAgIQENijDjkkQE6mSB7n3IAAVQgAVRasIhtAPIBfA4IgUBsIBThIIBhA0IgrhlIBPhMIhtAJIgxhjgEgaTAgIIAA1QQB7H3E6GSQDjEkENCjgATf5AQjjkkkNijIOlAAIAAVQQh7n3k6mSgEgaTggHIOlAAQkNCjjjEkQk6GSh7H3gA4f75IhzARIBkA7IgVByIBYhMIBmA3IgthrIBUhRIh0ALIgzhpg");
	this.shape_3.setTransform(-95.6,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("A6ZOVIAA8pMA0zAAAIAAcpg");
	this.shape_4.setTransform(-93.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("EgDAAj1QpmhOnEpJQoJqjAAu7QAAu6IJqjQEXlpFVioQEoiSFWAAQLhAAIJKjQIKKjAAO6QAAO7oKKjQoJKjrhAAQhiAAhegMg");
	this.shape_5.setTransform(-93.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.introduction, new cjs.Rectangle(-271.3,-222.2,356,461), null);


(lib.credits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// header
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghCeIgWgEQgLgBgKgEQgKgEgGgEIAAgqQAHAGAKAGQAKAFAMAEIAWAFIAVABQAhAAAQgLQARgNAAgXQAAgMgGgKQgFgJgKgHQgKgIgNgIIgbgOIgegPQgOgJgLgKQgKgKgGgNQgGgNAAgRQAAgVAJgPQAKgQAPgKQAPgLATgFQATgEATAAQAuAAAVALIAAAoQgcgSgqgBQgLABgMACQgMACgJAGQgJAFgGAKQgGAIAAANQAAALAFAJQAEAJAIAHQAJAHAMAHIAcAPQAQAIAPAHQAPAKALALQALAKAHANQAGAOAAARQAAAXgIAQQgJAPgPALQgQAKgTAEQgUAEgVAAIgSgBg");
	this.shape.setTransform(219.9,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRCaIAAkSIhZAAIAAghIDVAAIAAAhIhZAAIAAESg");
	this.shape_1.setTransform(196.5,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvCaIAAgfIAeAAIAAj1IgeAAIAAgfIBfAAIAAAfIgeAAIAAD1IAeAAIAAAfg");
	this.shape_2.setTransform(179.1,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah7CaIAAkzIBVAAQCiAAAACWQAABHguArQgtArhKAAgAhXB6IAuAAQA8gBAhggQAighAAg6QAAh2h9AAIgwAAg");
	this.shape_3.setTransform(158.9,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRCaIAAkzICcAAIAAAhIh3AAIAABmIBuAAIAAAgIhuAAIAABsIB9AAIAAAgg");
	this.shape_4.setTransform(132.4,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABECaIg0hWIgOgVQgGgJgGgFQgIgFgIgDQgIgCgKAAIgdAAIAACDIgkAAIAAkzIBbAAQATAAARAFQARAFANAKQANALAHAPQAHAPAAAVQAAAQgEAOQgFANgKAKQgIALgNAHQgMAHgQAEIAAABQAHADAGAEQAGAFAFAGIALAOIALARIA5BdgAhJgJIAwAAQAOABALgFQALgEAIgIQAJgHAFgLQAEgMAAgNQAAgZgQgOQgQgOgdABIgxAAg");
	this.shape_5.setTransform(109,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhLB1QgngqAAhFQAAhJAtgtQAsguBDAAQAsAAAdANIAAAmQghgTgoAAQg0AAghAkQghAjAAA7QAAA4AfAiQAfAgAwAAQAvAAAigUIAAAjQgiASgzAAQhBAAgogqg");
	this.shape_6.setTransform(80.1,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C20000").s().p("A3sdxMAAAg7hMAvZAAAMAAAA7hg");
	this.shape_7.setTransform(151.7,190.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.credits, new cjs.Rectangle(0,0,303.5,381), null);


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// level3
	this.level3 = new lib.level3();
	this.level3.parent = this;
	this.level3.setTransform(149.1,319,1,1,0,0,0,47.4,23.8);
	new cjs.ButtonHelper(this.level3, 0, 1, 2, false, new lib.level3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.level3).wait(1));

	// level2
	this.level2 = new lib.level2();
	this.level2.parent = this;
	this.level2.setTransform(149.1,222.7,1,1,0,0,0,47.4,23.8);
	new cjs.ButtonHelper(this.level2, 0, 1, 2, false, new lib.level2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.level2).wait(1));

	// level1
	this.level1 = new lib.LEVEL1();
	this.level1.parent = this;
	this.level1.setTransform(149.1,128.8,1,1,0,0,0,47.4,23.8);
	new cjs.ButtonHelper(this.level1, 0, 1, 2, false, new lib.LEVEL1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// header
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhTCIQgogXgQgmQgQglAAg8IAAiIICLAAIAACRQAAAWAEAHQAEAFAIAAQALAAADgLQADgKAAgaIAAiEICLAAIAACOQAABcgwApQgvAqg9AAQgrAAgogXg");
	this.shape.setTransform(206.1,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAyCeIhChjIAABgIiKAAIAAk4IBjAAIBIBqIAAhqICKAAIAAE7g");
	this.shape_1.setTransform(169.4,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBCdIAAk4IEDAAIAABOIh6AAIAAAnIBVAAIAABOIhVAAIAAAmIB6AAIAABPg");
	this.shape_2.setTransform(136.7,44.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA1CdIAAidIg1A8Igzg8IAACdIiLAAIAAk4ICHAAIA3BBIA5hBICGAAIAAE4g");
	this.shape_3.setTransform(98.5,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("A3gfYMAAAg+wMAvBAAAMAAAA+wg");
	this.shape_4.setTransform(150.5,200.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.menu, new cjs.Rectangle(0,0,301,401.7), null);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// text
	this.tapToStart = new lib.text();
	this.tapToStart.parent = this;
	this.tapToStart.setTransform(4,-12.4,0.59,0.59,0,0,0,208.7,86.2);

	this.timeline.addTween(cjs.Tween.get(this.tapToStart).to({regX:209,regY:86.4,scaleX:1,scaleY:1,x:4.1,y:-12.3},35).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.2,-63.2,246.6,101.9);


// stage content:
(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Buttons(){
			this.creditBTN = exportRoot.menu.level3;
			this.level1BTN = exportRoot.menu.level1;
		}
		
		
		Buttons.prototype.clickCredits = function(){
			this.creditBTN.on("click",function(){
				exportRoot.introduction.visible = false;
				exportRoot.anywhere.visible = false;
				exportRoot.menu.visible = false;
				exportRoot.credits.visible = true;
			});
		}
		
		Buttons.prototype.clickToPlay = function(){
			this.level1BTN.addEventListener("click", function(event){
				window.open("finalTESTING.html", "_self");
			});
		}
		function Main(){
			this.buttons = new Buttons();
			canvas.onmousedown = this.userTapped.bind(this);
			window.onkeydown = this.userTapped.bind(this);
			this.startScreen();
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
			
			this.menu = exportRoot.menu;
			this.credits = exportRoot.credits;
			this.anykeyStart = exportRoot.anywhere;
			this.intro = exportRoot.introduction;
			
		}
		
		Main.prototype.update = function(evt){
			
		}
		
		
		Main.prototype.showMenu = function(){
			exportRoot.menu.visible = true;
			exportRoot.introduction.visible = false;
			exportRoot.anywhere.visible = false;
			exportRoot.credits.visible = false;
			
			this.buttons.clickCredits();
			this.buttons.clickToPlay();
		}
		
		
		Main.prototype.userTapped = function(evt){
			this.showMenu();
		}
		
		Main.prototype.startScreen = function(){
			exportRoot.menu.visible = false;
			exportRoot.credits.visible = false;
		}
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// menu
	this.menu = new lib.menu();
	this.menu.parent = this;
	this.menu.setTransform(149.3,199.6,1,1,0,0,0,150.5,200.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3g/YMAvBAAAMAAAA+xMgvBAAAg");
	this.shape.setTransform(149.3,199.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.menu}]}).wait(1));

	// anykey
	this.anywhere = new lib.instructions();
	this.anywhere.parent = this;
	this.anywhere.setTransform(263.6,480.4,1,1,0,0,0,118.5,54.6);

	this.timeline.addTween(cjs.Tween.get(this.anywhere).wait(1));

	// introduction
	this.introduction = new lib.introduction();
	this.introduction.parent = this;
	this.introduction.setTransform(150.7,200.4,0.896,0.972,0,0,0,-95.5,9);

	this.timeline.addTween(cjs.Tween.get(this.introduction).wait(1));

	// credits
	this.credits = new lib.credits();
	this.credits.parent = this;
	this.credits.setTransform(150.5,193.6,1,1,0,0,0,151.7,190.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("A3s9wMAvZAAAMAAAA7hMgvZAAAg");
	this.shape_1.setTransform(150.5,193.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.credits}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143.2,175.6,318.8,488.9);
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