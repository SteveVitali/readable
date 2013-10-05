// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

words = document.body.innerText.split(" ").length;

//Avg. reading speed 300wpm
wpm = 300; 

time_in_seconds = words/wpm * 60; 

minutes = Math.floor(time_in_seconds/60);

seconds = Math.floor(time_in_seconds % 60);

if (words) {
	if (minutes == 0 && seconds != 0){
  		result = "Estimated teading time: "+seconds+" seconds"
  	}
  	else if (minutes != 0 && seconds != 0)
  	{
  		result = "Estimated reading time: "+minutes+" minutes and "+seconds+" seconds"
  	}
  	else
  	{
  		result = "Estimated reading time: "+minutes+" minutes"
  	}
	var payload = {
		count: result
	};
  chrome.extension.sendRequest(payload, function(response) {});
}

