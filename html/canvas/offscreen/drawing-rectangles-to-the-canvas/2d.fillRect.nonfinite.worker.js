// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.fillRect.nonfinite
// Description:fillRect() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fillRect() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(Infinity, 0, 100, 50);
ctx.fillRect(-Infinity, 0, 100, 50);
ctx.fillRect(NaN, 0, 100, 50);
ctx.fillRect(0, Infinity, 100, 50);
ctx.fillRect(0, -Infinity, 100, 50);
ctx.fillRect(0, NaN, 100, 50);
ctx.fillRect(0, 0, Infinity, 50);
ctx.fillRect(0, 0, -Infinity, 50);
ctx.fillRect(0, 0, NaN, 50);
ctx.fillRect(0, 0, 100, Infinity);
ctx.fillRect(0, 0, 100, -Infinity);
ctx.fillRect(0, 0, 100, NaN);
ctx.fillRect(Infinity, Infinity, 100, 50);
ctx.fillRect(Infinity, Infinity, Infinity, 50);
ctx.fillRect(Infinity, Infinity, Infinity, Infinity);
ctx.fillRect(Infinity, Infinity, 100, Infinity);
ctx.fillRect(Infinity, 0, Infinity, 50);
ctx.fillRect(Infinity, 0, Infinity, Infinity);
ctx.fillRect(Infinity, 0, 100, Infinity);
ctx.fillRect(0, Infinity, Infinity, 50);
ctx.fillRect(0, Infinity, Infinity, Infinity);
ctx.fillRect(0, Infinity, 100, Infinity);
ctx.fillRect(0, 0, Infinity, Infinity);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();