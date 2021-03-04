// Cache references to DOM elements.
var elms = ['station0', 'title0', 'live0', 'playing0', 'song0', 
'station1', 'title1', 'live1', 'playing1', 'song1', 
'station2', 'title2', 'live2', 'playing2', 'song2', 
'station3', 'title3', 'live3', 'playing3', 'song3',
'station4', 'title4', 'live4', 'playing4', 'song4'
];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

/**
 * Radio class containing the state of our stations.
 * Includes all methods for playing, stopping, etc.
 * @param {Array} stations Array of objects with station details ({title, src, howl, ...}).
 */
var Radio = function(stations) {
  var self = this;

  self.stations = stations;
  self.index = 0;
  
  // Setup the display for each station.
  for (var i=0; i<self.stations.length; i++) {
    window['title' + i].innerHTML = '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title;
    window['station' + i].addEventListener('click', function(index) {
      var isNotPlaying = (self.stations[index].howl && !self.stations[index].howl.playing());
      
      // Stop other sounds or the current one.
      radio.stop();

      // If the station isn't already playing or it doesn't exist, play it.
      if (isNotPlaying || !self.stations[index].howl) {
        radio.play(index);
      }
    }.bind(self, i));
  }

  //setDynamicData();
};

Radio.prototype = {
  /**
   * Play a station with a specific index.
   * @param  {Number} index Index in the array of stations.
   */
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === 'number' ? index : self.index;
    var data = self.stations[index];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.src,
        html5: true, // A live stream can only be played through HTML5 Audio.
        format: ['mp3', 'aac']
      });
    }

    // Begin playing the sound.
    sound.play();

    // Toggle the display.
    self.toggleStationDisplay(index, true);

    // Keep track of the index we are currently playing.
    self.index = index;
  },

  /**
   * Stop a station's live stream.
   */
  stop: function() {
    var self = this;

    // Get the Howl we want to manipulate.
    var sound = self.stations[self.index].howl;

    // Toggle the display.
    self.toggleStationDisplay(self.index, false);

    // Stop the sound.
    if (sound) {
      sound.unload();
    }
  },

  /**
   * Toggle the display of a station to off/on.
   * @param  {Number} index Index of the station to toggle.
   * @param  {Boolean} state true is on and false is off.
   */
  toggleStationDisplay: function(index, state) {
    var self = this;

    // Highlight/un-highlight the row.
    window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

    // Show/hide the "live" marker.
    window['live' + index].style.opacity = state ? 1 : 0;

    // Show/hide the "playing" animation.
    window['playing' + index].style.display = state ? 'block' : 'none';
  }
};

// Setup our new radio and pass in the stations.
var radio = new Radio([
  {
    freq: '1. ',
    title: "Scratchlords",
    src: 'https://admin.scratch.radio/radio/8000/radio.mp3',
    howl: null
  },
  {
    freq: '2. ',
    title: "Looperbeats",
    src: 'https://admin.scratch.radio/radio/8010/radio.mp3',
    howl: null
  },
  {
    freq: '3. ',
    title: "Dubstation",
    src: 'https://admin.scratch.radio/radio/8020/radio.mp3',
    howl: null
  },
  {
    freq: '4. ',
    title: "Zaebeats",
    src: 'https://admin.scratch.radio/radio/8030/radio.mp3',
    howl: null
  },
  {
    freq: '5',
    title: "Nmcpstudio",
    src: 'https://admin.scratch.radio/radio/8040/radio.mp3',
    howl: null
  }
]);

function getTime(seconds)
{
var date = new Date(seconds * 1000);
var hh = date.getUTCHours();
var mm = date.getUTCMinutes();
var ss = date.getSeconds();
// If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// if (hh > 12) {hh = hh % 12;}
// These lines ensure you have two-digits
if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}
if (ss < 10) {ss = "0"+ss;}
// This formats your string to HH:MM:SS
var t = hh+":"+mm+":"+ss;
return t;
}

scratchlords  = new WebSocket( "wss://admin.scratch.radio/api/live/nowplaying/scratchlords" );
looperbeats  = new WebSocket( "wss://admin.scratch.radio/api/live/nowplaying/looperbeats" );
dubstation  = new WebSocket( "wss://admin.scratch.radio/api/live/nowplaying/dubstation" );
zaebeats  = new WebSocket( "wss://admin.scratch.radio/api/live/nowplaying/zaebeats" );
nmcpstudio  = new WebSocket( "wss://admin.scratch.radio/api/live/nowplaying/nmcpstudio" );

scratchlords.onmessage = function(event) {
    obj = JSON.parse(event.data);
    title = obj.now_playing.song.text;
    elapsed = obj.now_playing.elapsed;
    length = obj.now_playing.duration;

    $('#song0').text(title);
    $('#time0').text(getTime(elapsed) + ' / ' + getTime(length));
};

looperbeats.onmessage = function(event) {
    obj = JSON.parse(event.data);
    title = obj.now_playing.song.text;
    elapsed = obj.now_playing.elapsed;
    length = obj.now_playing.duration;

    $('#song1').text(title);
    $('#time1').text(getTime(elapsed) + ' / ' + getTime(length));
};

dubstation.onmessage = function(event) {
    obj = JSON.parse(event.data);
    title = obj.now_playing.song.text;
    elapsed = obj.now_playing.elapsed;
    length = obj.now_playing.duration;

    $('#song2').text(title);
    $('#time2').text(getTime(elapsed) + ' / ' + getTime(length));
};

zaebeats.onmessage = function(event) {
    obj = JSON.parse(event.data);
    title = obj.now_playing.song.text;
    elapsed = obj.now_playing.elapsed;
    length = obj.now_playing.duration;

    $('#song3').text(title);
    $('#time3').text(getTime(elapsed) + ' / ' + getTime(length));
};

nmcpstudio.onmessage = function(event) {
    obj = JSON.parse(event.data);
    title = obj.now_playing.song.text;
    elapsed = obj.now_playing.elapsed;
    length = obj.now_playing.duration;

    $('#song4').text(title);
    $('#time4').text(getTime(elapsed) + ' / ' + getTime(length));
};