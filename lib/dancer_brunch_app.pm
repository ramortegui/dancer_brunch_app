package dancer_brunch_app;
use Dancer2;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

true;
