#!/usr/bin/env python3
import tweepy;

consumer_key = 'PaLfWWIpBlBBJjS7lwNgAZtCI'
consumer_key_secret = 'E5X7rQXvy8fqy2rDwr1HJqPpEfbTXNJ7NYEPGzySb5VG1pEX0b'

access_token = '586229098-BEQG9FzXNgXp0j1b1Bb79gAruwtwNIC3tJYd4t9a' 
access_token_secret = 'Jgj71CtEJEkN1TzcQrXE92bt6GxWk5zVuklhQNZoSCB6N'
key = tweepy.OAuthHandler(consumer_key, consumer_key_secret)
key.set_access_token(access_token , access_token_secret)

api = tweepy.API(key)
print(api.me().name)
