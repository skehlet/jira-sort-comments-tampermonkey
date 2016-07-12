# What is this?

This Tampermonkey script will auto-click the comment sort link in JIRA if it detects comments are not sorted in the order you prefer. By default the script will sort comments in ascending order (oldest first), but you can easily change this by editing the script.

You will need to add additional @match entries in the script so it runs on your JIRA server(s).

# Why?

This script is necessary because JIRA only has a single, site-wide comment sort option, and if you prefer comments sorted in the opposite direction as your site administrator, you will have to constantly fix the sort order manually (after some number of hours or days when your session resets), likely only after you've realized you've been reading comments in the wrong order. This script relieves this constant source of frustration. 

# How well does it work?

It seems to work well, however it is only a workaround until Atlassian can implement *Store comment sort order in user profile* ([JRA-5443](https://jira.atlassian.com/browse/JRA-5443)). However this ticket has been open since December of 2004, so I wouldn't count on it anytime soon.

It's likely different versions of JIRA may have different HTML element names and/or framing behavior, so there will be a need to adapt it to handle this. I tested it on my own JIRA server (v7.1.8#71012-sha1:d834917) and Atlassian's but other/future versions may need tweaks. Improvements/assistance and Pull Requests would be greatly appreciated.

# How to use

1. If you don't have it already, follow the directions at the [Tampermonkey home page](https://tampermonkey.net/) to install Tampermonkey in your browser. Tampermonkey is supported in "Google Chrome, Opera, Chromium, a lot of their derivatives like CoolNovo and Rockmelt and also Firefox and some Android browsers".

1. Go to [this script's page on Greasy Fork](https://greasyfork.org/en/scripts/21311-sort-jira-comments-in-ascending-order-oldest-first). Click the green *Install this script* button. 

1. Tampermonkey will show you the script so you can review what it does and where it runs. **At this time, you must add the appropriate `@match` tag(s) so it runs on the JIRA servers you wish to fix.**

1. If you also wish to force comments to be sorted in descending order, change that now.

1. Click Install. That's it! You can test by reversing the comments and reloading the page.

# Copyright

Copyright (c) 2016 Steven Kehlet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
