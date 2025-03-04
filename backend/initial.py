# Checks if user tokens exists
import os

# Allows fetches to be made to playlist
from requests_html import HTMLSession
import time

# Parse the URL and html body
from urllib.parse import urlparse, parse_qs
from bs4 import BeautifulSoup
import html5lib

# Build the service and handle insertion errors
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Oauth imports
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# Save credentials and turn them to bytes
import pickle

################################################
############# CHANGE THE FOLLOWING #############
# Michael Jackson: jvmhps
# Throwback: 3h2edz
user = "Rywin" # For Saved Token purposes
musi_link = "https://feelthemusi.com/playlist/3h2edz"
# NOTE for the Throwback Playlist, we are at 180 songs
################################################
################################################

def main():
    # Get the videos and title from musi playlist
    videos, title = parse_musi_playlist()

    print(f"Total Videos to add {len(videos)}")

    # Get credentials from user
    credentials = get_credentials()

    # Building and configuring our service
    youtube = build("youtube", "v3", credentials=credentials)

    # Create the playlist
    request = youtube.playlists().insert(
        part="snippet,status", 
        body={
            "snippet": {
                "title": title,
                "defaultLanguage": "en"
            },
            "status": {
                "privacyStatus": "private"
            }
        }
    )
    response = request.execute()
    print(f"Playlist with title \"{title}\" has been created")

    # Insert the videos into playlist
    playlist_id = response["id"]

    for video_id in videos:
        try:
            # Grab the playlist id and add songs to it like response["id"] or some shit
            request = youtube.playlistItems().insert(
                part="snippet",
                body={
                    "snippet": {
                        "playlistId": playlist_id,
                        "position": 0,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": video_id
                        }
                    }
                }
            )
            response = request.execute()

            print(f"Inserted videoId: {video_id}")
        except HttpError as e:
            # Handle specific HTTP error codes
            if e.resp.status == 404:
                print(f"Error: VideoId {video_id} not found.")
            elif e.resp.status == 403:
                print(f"Error: Access forbidden for video {video_id}. Check API permissions or quota.")
            else:
                print(f"An HTTP error occurred for video {video_id}: {e}")
        
    print("Finished")

def parse_musi_playlist():
    """
    Fetch + Parse the Musi Playlist URL and return the title and list of videoIDs
    """

    # Fetch the html and convert it for parsing
    print(f"Fetching {musi_link}")

    # NOTE You MUST download the chromedriver.exe yourself
    # Match it to the version with your Chrome Browser as it interacts with that
    # https://googlechromelabs.github.io/chrome-for-testing/#stable
    
    session = HTMLSession()
    response = session.get(musi_link) # Will download chromium
    print("Static HTML recieved, now executing JavaScript")
    print("Begin JavaScript Render")

    # Render the html with JavaScript
    response.html.render()

    print("Kinda finished, wait 5 seconds for page to fully render")
    time.sleep(5)
    print("JavaScript Render Finished")

    # Parse the html with Beautiful Soup
    soup = BeautifulSoup(response.html.html, "html5lib")

    # Find the parent div
    parent_div = soup.find("div", id="container")

    # Find the div with id 'playlist_content'
    playlist_div = parent_div.find("div", id="playlist_content")

    # list of Ids to return
    videos = []

    # Check if the div is found to avoid AttributeError
    if playlist_div:
        # Find all <a> tags within the div
        a_tags = playlist_div.find_all("a")

        # Print the href attribute (links) and text of each <a> tag
        for a_tag in a_tags:
            href = a_tag.get("href")  # Get the 'href' attribute

            # Parsing music video URL
            parsed_url = urlparse(href)
            query_params = parse_qs(parsed_url.query)
            videoId = query_params["v"][0]

            # Append to list
            videos.append(videoId)
            print(f"Appended {videoId} to the list")
    else:
        print("Div with id 'playlist_content' not found.")
        exit(1)
    
    print("List of Videos:")
    print(videos)

    if len(videos) == 0:
        print("No videos were found, try again or add more time for rendering")
        exit(1)

    # Find the title of playlist
    header_div = parent_div.find("div", id="playlist_header")
    title = header_div.find("div", id="playlist_header_title").get_text()

    print("Title of Playlist:")
    print(title)

    if len(title) == 0:
        print("Title could not be parsed")
        exit(1)

    return videos, title
    
def get_credentials():
    """
    Gets user credentials using Google's oauth 2.0
    
    If tokens are invalid or doesn't exists, make a request
    """

    credentials = None

    # Check if our pickle stored user credentials from previously successful logins
    if os.path.exists(f"{user}-token.pickle"):
        print(f"Loading {user}'s Credentials from File")
        with open(f"{user}-token.pickle", "rb") as token:
            credentials = pickle.load(token)

    # Check if credentials were loaded and valid
    # If there are no valid credentials available, then either refresh the token or log in.
    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            print(f"Refreshing {user}'s Access Token...")
            credentials.refresh(Request()) # Asked for a new access token via google Request import
        else:
            print(f"Fetching New Tokens for {user}...")
            flow = InstalledAppFlow.from_client_secrets_file(
                'client_secret.json',
                scopes=[
                    "https://www.googleapis.com/auth/youtube.force-ssl"
                ]
            )

            flow.run_local_server(port=8080, prompt='consent',
                                authorization_prompt_message='')
            credentials = flow.credentials

            # Save the credentials for the next run
            with open(f"{user}-token.pickle", 'wb') as f:
                print(f'Saving {user}s Credentials for Future Use...')
                pickle.dump(credentials, f)
    
    return credentials

if __name__ == "__main__":
    # This block will only execute if the script is run directly
    main()