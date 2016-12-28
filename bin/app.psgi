#!/usr/bin/env perl

use strict;
use warnings;
use FindBin;
use lib "$FindBin::Bin/../lib";

use dancer_brunch_app;
dancer_brunch_app->to_app;
