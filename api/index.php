<?php

require __DIR__ . '/../include/vendor/autoload.php';

$api = \AzuraCast\Api\Client::create(
    'https://admin.scratch.radio',
    'abe7e92f08ae5d63:044ee29b99d5f79d168ca5622bd5bb1f'
);

$res = [];

$nowPlaying = $api->nowPlaying();

for ($i=0; $i < 5; $i++) { 
    $res[$i]['title'] = $nowPlaying[$i]->getCurrentSong()->getSong()->getTitle();
    $res[$i]['elapsed'] = gmdate("i:s", $nowPlaying[$i]->getCurrentSong()->getElapsed());
    $res[$i]['remaining'] = gmdate("i:s", $nowPlaying[$i]->getCurrentSong()->getRemaining());
    $res[$i]['length'] = gmdate("i:s", $nowPlaying[$i]->getCurrentSong()->getElapsed() + $nowPlaying[$i]->getCurrentSong()->getRemaining());
}

print_r(json_encode($res));
