## WeChat Before _ After Slider Test

This mini project is an attempt to replicate [this behavior](https://ourcodeworld.com/articles/read/263/top-5-best-before-and-after-image-comparison-slider-jquery-and-javascript-plugins) in a WeChat Mini Program. 

The code uses the following elements: 
1. Absolute positioning for overlapping images;
2. CSS [clip](https://developer.mozilla.org/en-US/docs/Web/CSS/clip) for the "cropping" effect on one image;
3. WeChat [slider](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html) for user interactivity and data binding;

The current problems are: 
1. The CSS clip property only allows for (rpx and px) which doesn't allow for much responsive sizing in your component;
2. The <slider> can't appear on top of the image no matter how much z-index you provide it;
3. The CSS clip property is out-of-date and is being replaced by clip-path instead. Though clip-path does not work in WeChat's IDE.
4. Need a deeper understanding of the clip property; currently the bottom image shows first and the top image is rendered when the user slides the <slider>. I'd like it the other way around. 
