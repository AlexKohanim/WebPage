#!/usr/bin/env python3
import tweepy;

consumer_key = 'PaLfWWIpBlBBJjS7lwNgAZtCI'
consumer_key_secret = 'E5X7rQXvy8fqy2rDwr1HJqPpEfbTXNJ7NYEPGzySb5VG1pEX0b'

access_token = '586229098-BEQG9FzXNgXp0j1b1Bb79gAruwtwNIC3tJYd4t9a'
access_token_secret = 'Jgj71CtEJEkN1TzcQrXE92bt6GxWk5zVuklhQNZoSCB6N'

class TweetListener(tweepy.StreamListener):
  def on_status(self , status):
    print ('Tweet text : ' + status.text ) 
    return True
  def on_error ( self , status_code ):
    print('Got an error with status code: ' + str(status_code))
    return True
  def on_timeout (self): 
    print('Timeout..') 
    return True

if __name__ == '__main__': 
  listener = TweetListener();
  auth = tweepy.OAuthHandler( consumer_key , consumer_key_secret ) 
  auth.set_access_token(access_token , access_token_secret)

  stream = tweepy.Stream(auth, listener) 
  stream.filter(follow=[], track=['#CSC412SFSU'])
