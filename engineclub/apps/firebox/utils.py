import sys, os

# this is all that's needed to run from fabfile in top directory (engineclub)
sys.path.insert(0, os.getcwd())

from engineclub import settings
from django.core.management import setup_environ

setup_environ(settings)

from firebox.views import load_postcodes, load_placenames, reindex_resources

def temp():
    """docstring for temp"""
    from django.core.urlresolvers import resolve
    print resolve('/depot/resource/find/').url_name
    # this fails:
    # print resolve('/depot/resource/find/?csrfmiddlewaretoken=a4b92155bab6bbff7d4f51be9514940d&post_code=aberdeen&tags=fash&boost_location=30.0&result=Find+items')
    # so params need stripped and passed in separately
    
    
if __name__ == "__main__":

    from optparse import OptionParser

    parser = OptionParser()
    parser.add_option("-c", "--command", dest="command",
                    help="command", metavar="COMMAND")
    parser.add_option("-f", "--file", dest="filename",
                    help="source file", metavar="FILE")
    parser.add_option("-d", "--db", dest="dbname",
                    help="database name", metavar="DBNAME")
    # parser.add_option("-q", "--quiet",
    #                 action="store_false", dest="verbose", default=True,
    #                 help="don't print status messages to stdout")

    (options, args) = parser.parse_args()
    
    # print options.dbname or settings.MONGO_DB
    if options.command == 'loadpostcodes' and options.filename:
        print("\nreloading postcodes...")
        load_postcodes(options.filename, options.dbname or settings.MONGO_DB)
    elif options.command == 'loadplacenames' and options.filename:
        print("\nreloading placenames...")
        load_placenames(options.filename, options.dbname or settings.MONGO_DB)
    elif options.command == 'reindex':
        print("\nreindexing resources...")
        reindex_resources(options.dbname or settings.MONGO_DB, printit=True)
    elif options.command == 'temp':
        print("\ntemp...")
        temp()

    else:
        print 'no command recognised'
    
    print '\ndone'

