// Copyright 2006-2013 Element Fusion, LLC.  All rights reserved.

var slideshowname;
var slideshowitem;

var slideShowClass = {
	// properties
	// time to wait between slides
	autoTransitionWait: 5,
	// element that holds the slideshow
	container: '',
	// list of contents
	contents: '',
	//status of transition
	transitioning: false,
	// element that holds the current content
	currentContentContainer: '',
	// index of the active content
	currentContentIndex: 0,
	// element that holds the next content
	nextContentContainer: '',
	//timer for this slideshow
	timerID: 0,
	// functions
	// used to initialize contents into their containers
	// called once at the beginning
	InitializeTransition: function() { },
	// used to get the index of the next content
	NextContentIndex: function(slideshow) {
		var temp = slideshow.currentContentIndex + 1;
		if (temp >= slideshow.contents.length)
			temp = 0;
		return temp;
	},
	// used to get the index of the previous content
	PreviousContentIndex: function(slideshow) {
		var temp = slideshow.currentContentIndex - 1;
		if (temp < 0)
			temp = slideshow.contents.length - 1;
		return temp;
	},
	StopSlideShow: function(slideshow) {
		clearInterval(slideshow.timerID);
	},
	EndTransitioning: function()
	{
	this.transitioning = false;
	},
	MoveToNextSlide: function(slideshow, slideShowVarName) {
		if (!this.transitioning) {
			if (slideshow.currentContentIndex + 1 >= slideshow.contents.length)
				slideshow.currentContentIndex = 0;
			else
				slideshow.currentContentIndex = slideshow.currentContentIndex + 1;
			slideshow.PerformTransition('next');
		}
	},
	MoveToPreviousSlide: function(slideshow, slideShowVarName) {
	if (!this.transitioning) {
			if (slideshow.currentContentIndex - 1 < 0)
				slideshow.currentContentIndex = slideshow.contents.length - 1;
			else
				slideshow.currentContentIndex = slideshow.currentContentIndex - 1;
			slideshow.PerformTransition('prev');
		}
	},
	// used to move between the current div and the next/prev
	PerformTransition: function() { /* code is inline with each slideshow */ },
	// used to run the slide show
	StartSlideShow: function(slideshow, slideShowVarName) {
		var autoWait;
		if (slideshow.autoTransitionWait > 0)
			 autoWait = slideshow.autoTransitionWait * 1000;
		else
			 autoWait = 5000;
		slideshowitem = slideshow;
		slideshowname = slideShowVarName;
		slideshow.InitializeTransition();
		if (window[slideShowVarName].contents.length > 0)
			slideshow.timerID = setInterval('onTimerEvent(function() {'
                + slideShowVarName + '.currentContentIndex = '
                    + slideShowVarName + '.NextContentIndex(' + slideShowVarName + ');'
                + slideShowVarName + '.PerformTransition("next");'
                + '})', autoWait);
	},
	ResumeSlideShow: function(slideshow, slideShowVarName) {
		var autoWait;
		if (slideshow.autoTransitionWait > 0)
			 autoWait = slideshow.autoTransitionWait * 1000;
		else
			 autoWait = 5000;
		if (window[slideShowVarName].contents.length > 0)
			slideshow.timerID = setInterval('onTimerEvent(function() {'
            + slideShowVarName + '.currentContentIndex = '
                + slideShowVarName + '.NextContentIndex(' + slideShowVarName + ');'
            + slideShowVarName + '.PerformTransition("next");'
            + '})', autoWait);
	}
};




function onTimerEvent(callback) {
    if (!this.isExecuting) {
      try {
        this.isExecuting = true;
        callback();
      } finally {
        this.isExecuting = false;
      }
    }
}
