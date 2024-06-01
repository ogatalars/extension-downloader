from flask import Flask, request, jsonify
from pytube import YouTube
import os

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    data = request.get_json()
    url = data['url']
    yt = YouTube(url)
    stream = yt.streams.get_highest_resolution()
    output_path = './downloads'
    if not os.path.exists(output_path):
        os.makedirs(output_path)
    stream.download(output_path=output_path)
    return jsonify({"message": "Download complete"})

if __name__ == '__main__':
    app.run(port=5000)
